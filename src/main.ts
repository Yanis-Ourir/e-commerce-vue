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
}

export type Products = Product[]

const products: Products = [
    {
        id: 1,
        name: 'Product 1',
        price: 100,
        description: 'One Piece - 25 Affiches Wanted Primes Mugiwara 100,5 x 70,5 cm',
        image: './onepiece-affiche.webp',
        class: 'product1',
    },
    {
        id: 2,
        name: 'Product 2',
        price: 200,
        description: 'Booster One piece, 12 cartes à collectionner, 1 carte rare garantie',
        image: './one-piece-booster.png',
        class: 'product2',
    },
    {
        id: 3,
        name: 'Product 3',
        price: 300,
        description: 'One Piece - Figurine Monkey D. Luffy Gear Fourth - King of Artist - 30 cm',
        image: './one-piece-figurine.webp',
        class: 'product3',
    },
    {
        id: 4,
        name: 'Product 3',
        price: 300,
        description: 'One Piece - Figurine Monkey D. Luffy Gear Fourth - King of Artist - 30 cm',
        image: './one-piece-figurine.webp',
        class: 'product3',
    },
]

app.provide('products', products)


app.mount('#app')
