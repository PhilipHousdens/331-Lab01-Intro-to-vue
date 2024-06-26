const { createApp, ref } = Vue;

createApp ({
    setup() {
        const product = ref('Socks')
        const discription = ref('Cotton Socks')
        const image = ref('./assets/images/socks_green.jpg')
        const camt = ref('https://www.camt.cmu.ac.th/index.php/th/')
        const inStock = ref(true)
        const inventory = ref(100)
        const onSale = ref(true)
        return {
            product,
            discription,
            image,
            camt,
            inStock,
            inventory,
            onSale
        }
    }
}).mount('#app')