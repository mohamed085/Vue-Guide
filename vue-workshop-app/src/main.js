import { createApp } from 'vue';
import { createRouter , createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from "./components/teams/TeamsList";
import UsersList from "./components/users/UsersList";
import TeamMembers from "./components/teams/TeamMembers";
import NotFound from "./components/nav/NotFound";
import TeamFooter from "./components/teams/TeamFooter";
import UserFooter from "./components/users/UserFooter";

const app = createApp(App);
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/teams'
        },
        {
            name: 'teams',
            path: '/teams',
            components: {
                default: TeamsList,
                footer: TeamFooter
            },
             children: [
                {
                    name: 'team-members',
                    path: ':teamId',
                    component: TeamMembers ,
                    props: true
                },
            ]
        },
        {
            path: '/users',
            components: {
                default: UsersList,
                footer: UserFooter
            }
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from , savePosition) {
        if (savePosition){
            return savePosition;
        }
        return { left: 0, top: 0 }
    }
});

router.beforeEach((to,from, next) => {
    next();
})

app.use(router);

app.mount('#app');
