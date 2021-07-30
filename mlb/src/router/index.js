import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home'
import RosterView from '@/views/RosterView'

Vue.use(VueRouter);

const routes = [
  {
  path:'/',
  name: 'home',
  component: Home
},
{
  path:'/roster/:id',
  name:'roster',
  component: RosterView
}
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
