const c1 = () => import(/* webpackChunkName: "page--src--pages--user--id-vue" */ "/Users/anna/Documents/gridsome-test/src/pages/user/[id].vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--book-entry-vue" */ "/Users/anna/Documents/gridsome-test/src/templates/BookEntry.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--books-vue" */ "/Users/anna/Documents/gridsome-test/src/pages/Books.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/anna/Documents/gridsome-test/src/pages/About.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/anna/Documents/gridsome-test/node_modules/gridsome/app/pages/404.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/anna/Documents/gridsome-test/src/pages/Index.vue")

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
    path: "/books/:id/",
    component: c2
  },
  {
    path: "/books/",
    component: c3
  },
  {
    path: "/about/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
