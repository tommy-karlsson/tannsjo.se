
import Home from './components/Home.js';
import House from './components/House.js';
import Todo from './components/Todo.js';
import Contact from './components/Contact.js';

const routes = [
	{path: '/', component: Home},
	{path: '/house', component: House},
	{path: '/todo', component: Todo},
	{path: '/contact', component: Contact},
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes,
})

const app = Vue.createApp({
})

app.use(router)
app.mount('#app')
