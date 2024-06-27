const { createApp, ref, computed } = Vue;

createApp ({
    setup() {
        const product = ref('Socks')
        const brand = ref('SE 331')
        const discription = ref('Cotton Socks')
        const camt = ref('https://www.camt.cmu.ac.th/index.php/th/')
        const inventory = ref(12)
        const onSale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool', 
            '20% polyester'
        ])
        const variants = ref([
            {id: 2234, color: 'green', image:'./assets/images/socks_green.jpg', quantity: 50},
            {id: 2235, color: 'blue', image:'./assets/images/socks_blue.jpg', quantity: 0}
        ])
        

        const selectedVariant = ref(0)


        const sizes = ref([
            'S',
            'M',
            'L'
        ])
        const cart = ref(0)

        function addToCart() {
            cart.value += 1
            inventory.value -= 1;
            if (inventory.value === 0) {
                inStock.value = !inStock.value;
            }
        }
        function updateImage(variantImage){
            image.value = variantImage
        }
        function updateVariant(index) {
            selectedVariant.value = index;
        }
        function toggleBuyBtn() {
            inventory.value -= 1;
            console.log(inStock.value)
        }
        function toggleStock() {
            inStock.value = !inStock.value;
        }

        const title = computed(() => {
            return brand.value + ' ' + product.value
        })
        const image = computed(() => {
            return variants.value[selectedVariant.value].image
        })
        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity
        })


        return {
            title,
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
            toggleStock,
            toggleBuyBtn
        }
    }
}).mount('#app')