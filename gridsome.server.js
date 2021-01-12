// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

bookISBNs = [
  "0553211285",
  "9789875504950",
  "9780439203524",
  "9780883017500",
  "9781402766442",
  "9781585101634",
  "9780393044720",
  "9780143105947",
  "9780881033731"
]

module.exports = function (api) {
  api.loadSource(async store => {
    let books = []

    for (const isbn of bookISBNs) {
      const res = await axios.get(`http://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`)

      if (res.data[`ISBN:${isbn}`]) {
        books.push(res.data[`ISBN:${isbn}`])
      }
    }

    const collection = store.addCollection({
      typeName: 'BookEntry'
    })

    for (const item of books) {
      collection.addNode(item)
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
