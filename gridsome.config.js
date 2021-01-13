// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Library',
  siteDescription: 'Gridsome Library',
  titleTemplate: '%s - Gridsome Library',
  icon: {
    favicon: './src/favicon.png',
    touchicon: './src/favicon.png'
  },
  
  templates: {
    BookEntry: '/books/:id',
    Faker: '/readers/:id',
  },

  plugins: [
    {
      use: '@gridsome/source-faker',
      options: {
        numNode: 50
      }
    }
  ]
}
