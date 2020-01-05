/* eslint-disable prettier/prettier */
module.exports = {
    siteMetadata: {
        title: 'Gatsby Workshop',
        description:
            'A site that is going to be super fast!',
    },
    plugins: [
        'gatsby-plugin-emotion',
        'gatsby-plugin-react-helmet',
        'prettier',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayouts: {
                    default: require.resolve('./src/components/layout.js'),
                },
            },
        },
    ],
};
