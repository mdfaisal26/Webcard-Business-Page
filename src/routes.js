// routes.js

import AboutUs from './components/AboutUs.vue'
import ContentPage from './components/ContentPage.vue'
import FAQ from './components/FAQ.vue'
import Portfolio from './components/Portfolio.vue'

const routes = [
    { path: '/', component: ContentPage },
    { path: '/about', component: AboutUs },
    { path: '/portfolio', component: Portfolio },
    { path: '/FAQ', component: FAQ },
    // Add other routes as needed
];

export default routes;
