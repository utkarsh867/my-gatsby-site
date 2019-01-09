import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardContent} from "@material-ui/core";
import withStyles from "@material-ui/core/es/styles/withStyles";
import {withPrefix} from 'gatsby';
import CardActions from "@material-ui/core/es/CardActions/CardActions";
import Button from "@material-ui/core/es/Button/Button";


const styles = {
    activity_card: {
        width: '100%',
        display: 'flex',
        marginBottom: '16px'
    },
    card: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
    },
    header: {
        alignItems: 'center',
        marginBottom: '10px',
    },
    cover: {
        width: '50px',
        margin: '16px',
        marginLeft: '0'
    },
    content:{
        flexBasis: '100%',
        flex: '5 0px',
        padding: '30px'
    },
    cardActionArea: {
        textDecoration: 'none'
    }
};


const ActivityCard = props => {
    const {activityName} = props;
    const {activityTerm} = props;
    const {activityDescription} = props;
    const {activityCoverURL} = props;
    const {activityAction} = props;
    const {classes} = props;
    return (
        <Card className={classes.activity_card}>
            <div className={classes.card}>
                <CardContent className={classes.content}>
                    <div className={'container-fluid'}>
                        <div className={`row ${classes.header}`}>
                            <img
                                src={withPrefix(activityCoverURL)}
                                className={classes.cover}
                                alt={"Cover"}/>
                            <h1 style={{margin: 0}}>{activityName}</h1>
                        </div>
                    </div>
                    <h4>{activityTerm}</h4>
                    <p>{activityDescription}</p>
                    {activityAction !== 'none' ?
                        <CardActions>
                            <Button href={activityAction}>See More</Button>
                        </CardActions>: null}
                </CardContent>
            </div>
        </Card>
    );
};

ActivityCard.propTypes = {
    activityName: PropTypes.string.isRequired,
    activityTerm: PropTypes.string.isRequired,
    activityDescription: PropTypes.string.isRequired,
    activityCoverURL: PropTypes.string.isRequired,
    activityAction: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles) (ActivityCard);