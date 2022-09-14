const app = Vue.createApp({
    data(){
        return {
            product: 'Socks',
            description: 'Stretchable, made of cotton and is very comfortable to use',
            image: './assets/images/socks_green.jpg',
            inventory: 100,
            url: '/new-url',
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green'},
                {id: 2235, color: 'blue'}
            ],
            sizes: ['S','M','L','XL']
        }
    }
})