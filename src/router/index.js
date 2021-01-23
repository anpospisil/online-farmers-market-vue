import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '@/pages/Products'
import AddNewProduct from '@/pages/AddNewProduct'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Products", 
        component: Products
    },
    {
        path: "/add-new-product",
        name: "AddNewProduct", 
        component: AddNewProduct
    }
]