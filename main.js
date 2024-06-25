const { createApp, ref } = Vue;

createApp ({
    setup() {
        const product = ref('Boots')
        const image = ref('./assets/images/socks_green.jpg')
        const inStock = ref(true)
        return {
            product,
            image,
            inStock
        }
    }
}).mount('#app')