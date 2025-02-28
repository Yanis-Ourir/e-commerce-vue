import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

export type Product = {
    id: number
    name: string
    price: number
    description: string
    image: string
    class: string
    slug: string
}

export type Products = Product[]

const products: Products = [
        {
            id: 1,
            name: 'Bouteille Isotherme en Acier Inoxydable',
            price: 25,
            description: 'Garde vos boissons chaudes ou froides pendant 12h.',
            image: './bouteille-isotherme.jpg',
            slug: 'bouteille-isotherme',
            class: 'product'
        },
        {
            id: 2,
            name: 'Sac à vrac en coton bio',
            price: 10,
            description: 'Idéal pour les courses zéro déchet.',
            image: './sac-vrac.jpg',
            slug: 'sac-vrac',
            class: 'product'
        },
        {
            id: 3,
            name: 'Brosse à dents en bambou',
            price: 5,
            description: 'Alternative écologique aux brosses en plastique.',
            image: './brosse-bambou.jpg',
            slug: 'brosse-bambou',
            class: 'product'
        },
        {
            id: 4,
            name: 'Savon solide naturel',
            price: 8,
            description: 'Fait à la main avec des ingrédients bio.',
            image: './savon-naturel.jpg',
            slug: 'savon-naturel',
            class: 'product'
        },
        {
            id: 5,
            name: 'Lampe solaire portable',
            price: 35,
            description: 'Rechargeable et idéale pour le camping ou la maison.',
            image: './lampe-solaire.jpg',
            slug: 'lampe-solaire',
            class: 'product'
        }
    ]

app.provide('products', products)


app.mount('#app')
