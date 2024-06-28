const productDisplay = { 
    template:
    /*html*/
    `
    <div class="product-display">
        <div class="product-container">
            <img :src="image">
        </div>
        <div class="product-info">
            <h1>{{title}}</h1>
            <p v-if="inventory > 10">In Stock ({{inventory}})</p>
            <p v-else-if="inventory <= 10 && inventory > 0">Almost out of stock ({{inventory}})</p>
            <p v-else>Out Of Stock</p>
            <p>Shipping: {{shipping}}</p>

            <product-detail :details></product-detail>
            
            <div v-for="(variant,index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{backgroundColor: variant.color}">
            </div>
            <button class="button" :disabled="!inStock" @click="addToCart" :class="{disabledButton: !inStock}">Add To Cart</button>
            <button class="button" @click="removeCart" >Remove From Cart</button>
        </div>
    </div>
    `, 
    props: {
        premium: Boolean,
        details: Array
    
    },
    setup(props, {emit}) {
        
        const product = ref('Boot')
        const brand = ref('SE 331')
        const inventory = ref(12)
        const onSale = ref(true)
        const variants = ref([
            {id: 2234, color: 'green', image:'./assets/images/socks_green.jpg', quantity: 50},
            {id: 2235, color: 'blue', image:'./assets/images/socks_blue.jpg', quantity: 0}
        ])
        

        const selectedVariant = ref(0)
        

        const shipping = computed(() => {
            if (props.premium) {
                return 'Free'
            } else {
                return 30
            }
        })


        function addToCart() {
            emit('add-to-cart')
        }       

        function removeCart() {
            emit('remove-cart')
        }


        function updateVariant(index) {
            selectedVariant.value = index;
        }
        function updateImage(variantImage) {
            image.value = variantImage  
        }

        const title = computed(() => {
            if (onSale.value === true) {
                return brand.value + ' ' + product.value + ' is on sale!'
            } else {
                return brand.value + ' ' + product.value
            }
        })
        const image = computed(() => {
            return variants.value[selectedVariant.value].image
        })
        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity
        })


        return {
            title,
            image,
            inStock,
            inventory,
            onSale,
            variants,
            addToCart,
            updateVariant,
            removeCart,
            shipping,
            updateImage,
        }
    }
    
}