// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  siteDescription: 'Testing Gridsome',
  titleTemplate: '%s - Gridsome test',
  plugins: [],
  icon: {
    favicon: './src/favicon.png',
    touchicon: './src/favicon.png'
  },
  templates: {
    BookEntry: '/books/:id',
  }
}