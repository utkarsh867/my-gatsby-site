import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {graphql, StaticQuery} from 'gatsby';
import withStyles from "@material-ui/core/es/styles/withStyles";
import ActivityCard from "./ActivityCard";

const styles = {
    section: {
        marginTop: '30px'
    },
    subheading: {
        color: 'grey',
        fontSize: '1em'
    }
};

const query = graphql`
query EducationQuery{
    site{
        siteMetadata {
            contents {
                subsections {
                    tag
                    content {
                        head
                        description
                        subhead
                        image
                        action
                    }
                }
            }
        }
    }
}`;

class Education extends Component {

    generateActivityCard = (data) => {
        return (
            <ActivityCard
                key={data.head}
                activityName={data.head}
                activityTerm={data.subhead}
                activityDescription={data.description}
                activityCoverURL={data.image}
                activityAction={data.action}
            />
        )
    };

    generateSubSection = (data) => {
        const {classes} = this.props;
        return (
            <div className={'container-fluid'} key={data.tag}>
                <div className={`row ${classes.section}`}>
                    <div className={'col-12'}>
                        <h2 className={classes.subheading}>{data.tag}</h2>
                    </div>
                </div>
                <div className={'row'}>
                    {data.content.map(this.generateActivityCard)}
                </div>
            </div>
        );
    };


    render() {
        const {data} = this.props;
        return (
            <div>
                {data.site.siteMetadata.contents.subsections.map(this.generateSubSection) }
            </div>
        );
    }
}

Education.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles) ((props) => (
    <StaticQuery
        query={query}
        render={ (data) => <Education data={data} {...props}/>}
    />
));