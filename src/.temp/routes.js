const c1 = () => import(/* webpackChunkName: "page--src--pages--user--id-vue" */ "/Users/anna/Documents/gridsome-test/src/pages/user/[id].vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--faker-vue" */ "/Users/anna/Documents/gridsome-test/src/templates/Faker.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--book-entry-vue" */ "/Users/anna/Documents/gridsome-test/src/templates/BookEntry.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--readers-vue" */ "/Users/anna/Documents/gridsome-test/src/pages/Readers.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--books-vue" */ "/Users/anna/Documents/gridsome-test/src/pages/Books.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/anna/Documents/gridsome-test/src/pages/About.vue")
const c7 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/anna/Documents/gridsome-test/node_modules/gridsome/app/pages/404.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/anna/Documents/gridsome-test/src/pages/Index.vue")

export default [
  {
    name: "__user_id",
    path: "/user/:id",
    component: c1,
    meta: {
      dataPath: "/user/_id.json",
      dynamic: true
    }
  },
  {
    path: "/readers/:id/",
    component: c2
  },
  {
    path: "/books/:id/",
    component: c3
  },
  {
    path: "/readers/",
    component: c4
  },
  {
    path: "/books/",
    component: c5
  },
  {
    path: "/about/",
    component: c6
  },
  {
    name: "404",
    path: "/404/",
    component: c7
  },
  {
    name: "home",
    path: "/",
    component: c8
  },
  {
    name: "*",
    path: "*",
    component: c7
  }
]
