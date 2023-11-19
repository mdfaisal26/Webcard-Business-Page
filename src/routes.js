// routes.js

import AboutUs from './components/AboutUs.vue'
import ContentPage from './components/ContentPage.vue'

const routes = [
    { path: '/', component: ContentPage },
    { path: '/about', component: AboutUs }
    // Add other routes as needed
];

export default routes;
