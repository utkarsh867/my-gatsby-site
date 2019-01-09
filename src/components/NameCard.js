import React from 'react';
import PropTypes from 'prop-types';

import withStyles from "@material-ui/core/es/styles/withStyles";
import {Card, CardContent} from "@material-ui/core";

import {StaticQuery, graphql} from 'gatsby';


const styles = {
    name_card: {
        padding: '10px'
    }
};

const query = graphql`
query NameCardQuery {
    site {
        siteMetadata {
            myName
            description
        }
    }
}
`;

const NameCard = props => {
    const {classes} = props;
    const {data} = props;
    return (
        <Card className={classes.name_card}>
            <CardContent>
                <h1>{data.site.siteMetadata.myName}</h1>
                <p>{data.site.siteMetadata.description}</p>
            </CardContent>
        </Card>
    );
};


export default withStyles (styles) ((props) => (
    <StaticQuery
        query={query}
        render={ (data) => (<NameCard data={data} {...props}/>) }
    />
));

NameCard.propTypes = {
    classes: PropTypes.object.isRequired
};
