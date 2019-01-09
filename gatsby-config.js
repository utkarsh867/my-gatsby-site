const data = require('./data/siteConfig');

module.exports = {
    siteMetadata: {
        title: data.myName,
        ...data,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `./src/utils/typography.js`
            }
        },
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Utkarsh Goel",
                short_name: "Utkarsh Goel",
                start_url: "/",
                background_color: "#000",
                theme_color: "#000",
                display: "standalone",
                icon: "./static/profile.jpg",
            },
        },
        'gatsby-plugin-offline',
    ]
};