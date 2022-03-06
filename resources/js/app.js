import Vue from "vue";
import VueRouter from "vue-router";
import App from './components/App'
import routes from './routes'
import 'nprogress/nprogress.css'
import {store} from './store/store'


require('./bootstrap');

Vue.use(VueRouter)


const router = new VueRouter(routes)
router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    if (to.name) {
        // Start the route progress bar.
        // NProgress.start()
        store.state.loading = true

    }
    next()
})

router.afterEach((to, from) => {
    // Complete the animation of the route progress bar.
    // NProgress.done()
    setTimeout(()=>{
        store.state.loading = false
    },300)

})


const app = new Vue({
    store:store,
    el: '#app',
    components: {App},
    router: router
});
