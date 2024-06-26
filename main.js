const { createApp, ref } = Vue;

createApp ({
    setup() {
        const product = ref('Socks')
        const discription = ref('Cotton Socks')
        const image = ref('./assets/images/socks_green.jpg')
        const camt = ref('https://www.camt.cmu.ac.th/index.php/th/')
        const inStock = ref(true)
        const inventory = ref(12)
        const onSale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool', 
            '20% polyester'
        ])
        const variants = ref([
            {id: 2234, color: 'green', image:'./assets/images/socks_green.jpg'},
            {id: 2235, color: 'blue', image:'./assets/images/socks_blue.jpg'}
        ])
        const sizes = ref([
            'S',
            'M',
            'L'
        ])
        const cart = ref(0)

        function addToCart() {
            cart.value += 1
        }
        function updateImage(variantImage){
            image.value = variantImage
        }
        function buyBtn() {
            inventory.value -= 1;
            console.log(inventory)
        }


        return {
            product,
            discription,
            image,
            camt,
            inStock,
            inventory,
            onSale,
            details,
            variants,
            sizes,
            cart,
            addToCart,
            updateImage,
            buyBtn
        }
    }
}).mount('#app')