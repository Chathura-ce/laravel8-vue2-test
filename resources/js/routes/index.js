import PostIndex from "../components/Posts";
import PostCreate from "../components/Posts/Create";

export default {
    mode: 'history',
    routes: [
        {
            path: '/',
            component: PostIndex,
            name:'posts.index'
        },
        {
            path: '/posts/create',
            component: PostCreate,
            name:'posts.create'
        }
    ]
}

