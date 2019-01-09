import React, {Component} from 'react';

import {Grid, Card, CardMedia, CardContent }from "@material-ui/core";

import {StaticQuery, withPrefix, graphql} from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAt} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

import posed from 'react-pose';

const styles = {
    icon: {
        width: '100%',
    }
};

const iconSizes = '3x';

const IconBox = posed.div({
    hoverable: true,
    pressable: true,
    init: {
        scale: 1,
    },
    hover: {
        scale: 1.2,
    },
    press: {
        scale: 1.1,
    }
});

const query = graphql`
query MyInfoQuery {
    site {
        siteMetadata {
            email
            linkedIN
            github
        }
    }
}`;

class MyInfo extends Component {

    generateIconBox = (link, icon, color) => {
        return(
            <Grid item xs={4}>
                <IconBox>
                    <a href={link}
                       style={{textDecoration: 'none', color: color}}
                       target='_blank'
                       rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon style={styles.icon} icon={icon} size={iconSizes}/>
                    </a>
                </IconBox>
            </Grid>
        )
    };

    render() {
        const {data} = this.props;
        return (
            <Card>
                <CardMedia
                    component={"img"}
                    image={withPrefix('profile.jpg')}
                />
                <CardContent>
                    <Grid container spacing={0}>
                        {this.generateIconBox(data.site.siteMetadata.github, faGithub, '#333')}
                        {this.generateIconBox(data.site.siteMetadata.linkedIN, faLinkedin, '#0077B5')}
                        {this.generateIconBox(data.site.siteMetadata.email, faAt, '#333')}
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

export default props => (
    <StaticQuery
        query={query}
        render={(data) => (<MyInfo data={data} {...props}/>)}
    />
);
