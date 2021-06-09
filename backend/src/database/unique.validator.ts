import { Connection, EntitySchema, FindConditions, ObjectType } from 'typeorm';
import {
  ValidationArguments,
  ValidatorConstraintInterface,
} from 'class-validator';

interface UniqueValidationArguments<E> extends ValidationArguments {
  constraints: [
    ObjectType<E> | EntitySchema<E> | string,
    ((validationArguments: ValidationArguments) => FindConditions<E>) | keyof E,
    (value: string) => boolean,
  ];
}

export abstract class UniqueValidator implements ValidatorConstraintInterface {
  protected constructor(protected readonly connection: Connection) {}

  public async validate<E>(value: string, args: UniqueValidationArguments<E>) {
    const [
      EntityClass,
      findCondition = args.property,
      checkCondition,
    ] = args.constraints;
    const useValidation = checkCondition ? checkCondition(value) : true;

    return (
      useValidation &&
      (await this.connection.getRepository(EntityClass).count({
        where:
          typeof findCondition === 'function'
            ? findCondition(args)
            : {
                [findCondition || args.property]: value,
              },
      })) <= 0
    );
  }

  public defaultMessage(args: ValidationArguments) {
    const [EntityClass] = args.constraints;
    const entity = EntityClass.name || 'Entity';

    return `${entity} with the same '${args.property}' already exist`;
  }
}