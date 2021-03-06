import React, {useEffect} from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import {
    Avatar,
    Breadcrumbs as MuiBreadcrumbs,
    Button,
    Card as MuiCard,
    CardActions,
    CardContent as MuiCardContent,
    CardMedia as MuiCardMedia,
    Chip as MuiChip,
    Divider as MuiDivider,
    Grid,
    Link,
    Typography as MuiTypography,
} from "@material-ui/core";

import { AvatarGroup as MuiAvatarGroup } from "@material-ui/lab";

import { green, orange } from "@material-ui/core/colors";

import { spacing, SpacingProps } from "@material-ui/system";
import {useDispatch} from "react-redux";
import {getProjects} from "../store/project/slice";

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)`
  border-bottom: 1px solid ${(props) => props.theme.palette.grey[300]};
`;

const CardMedia = styled(MuiCardMedia)`
  height: 220px;
`;

const Divider = styled(MuiDivider)(spacing);

interface TypographyPropsType extends SpacingProps {
    component?: string;
}
const Typography = styled(MuiTypography)<TypographyPropsType>(spacing);

const Chip = styled(MuiChip)<{ rgbcolor?: string }>`
  height: 20px;
  padding: 4px 0;
  font-size: 85%;
  background-color: ${(props) => props.rgbcolor};
  color: ${(props) => props.theme.palette.common.white};
  margin-bottom: ${(props) => props.theme.spacing(4)}px;
`;

const AvatarGroup = styled(MuiAvatarGroup)`
  margin-left: ${(props) => props.theme.spacing(2)}px;
`;

type ProjectPropsType = {
    image?: string;
    title: string;
    description: string;
    chip: JSX.Element;
};
const Project: React.FC<ProjectPropsType> = ({
                                                 image,
                                                 title,
                                                 description,
                                                 chip,
                                             }) => {
    return (
        <Card mb={6}>
            {image ? <CardMedia image={image} title="Contemplative Reptile" /> : null}
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>

                {chip}

                <Typography mb={4} color="textSecondary" component="p">
                    {description}
                </Typography>

                <AvatarGroup max={3}>
                    <Avatar alt="Avatar" src="/static/img/avatars/avatar-1.jpg" />
                    <Avatar alt="Avatar" src="/static/img/avatars/avatar-2.jpg" />
                    <Avatar alt="Avatar" src="/static/img/avatars/avatar-3.jpg" />
                </AvatarGroup>
            </CardContent>
            <CardActions>
                {/*<Button size="small" color="primary">*/}
                {/*    Share*/}
                {/*</Button>*/}
                <Button size="small" color="primary">
                    ??????????????????
                </Button>
            </CardActions>
        </Card>
    );
};

function Projects() {
    const dispatch = useDispatch();
    const getData = () => {
        dispatch(getProjects())
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Typography variant="h3" gutterBottom display="inline">
                ??????????????
            </Typography>

            <Breadcrumbs aria-label="Breadcrumb" mt={2}>
                <Link component={NavLink} exact to="/">
                    ??????????????
                </Link>
                <Typography>??????????????</Typography>
            </Breadcrumbs>

            <Divider my={6} />

            <Grid container spacing={6}>
                <Grid item xs={12} lg={6} xl={3}>
                    <Project
                        title="???????????????????????? ???????????????????????????? ?????????????????????????????? ???????????????????? ?????? ???????????????????? ?????????????????????? ????????????????"
                        description="???????????????????????? ???????????????? ????????????????????, ?????? ???????????????????? ???????????????? ?????????????????? ???????? ???????????????????????? ???????????? ???? ?????????? ?????????????? ?????????????????? ?? ???????????????????????? ?????????????????????? ???????????????????????????? ????????????????. ???? ??????????????, ???????????? ????????????????, ?????? ???????????????????? ?? ???????????????? ?????????????????? ???????????????????????? ?????????? ???????????????????? ?????????????????????? ???????????????? ???????????? ????????????????."
                        chip={<Chip label="????????????????" rgbcolor={green[500]} />}
                        // image="https://source.unsplash.com/random"
                    />
                </Grid>
                <Grid item xs={12} lg={6} xl={3}>
                    <Project
                        title="???????????? ????????-?????????????? ?????? ?????????? ???????????? ???????????????????? ???????????????????????????? ?? ?????????????????? ????????????????"
                        description="???? ??????????????, ???????????? ????????????????, ?????? ?????????????????????? ?????????????????? ?????????????????????? ?????????????? ?????????????????????? ?? ?????????????????? ?????????????????????????????? ?????????????? ??????????????????????. ???????????????????? ???????? ?????????????? ?????????????????? ????????????????, ?????? ???????????????????? ???????????????? ?????????????????? ???????? ???????????????????????? ???????????????????????? ???????????????????? ?? ???????????????????? ???????????????????????? ???????????????????? ?? ???????????????????????????????? ??????????????."
                        chip={<Chip label="?? ????????????????" rgbcolor={orange[500]} />}
                        // image="https://source.unsplash.com/random"
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default Projects;
