const productDisplay = { 
    template: `
    <div class="product-display">
        <div class="product-container">
            <img :src="image">
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inventory > 10">In Stock ({{ inventory }})</p>
            <p v-else-if="inventory <= 10 && inventory > 0">Almost out of stock ({{ inventory }})</p>
            <p v-else>Out Of Stock</p>
            <p>Shipping: {{ shipping }}</p>

            <product-detail :details="details"></product-detail>
            
            <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{ backgroundColor: variant.color }">
            </div>
            <button class="button" :disabled="!inStock" @click="addToCart" :class="{ disabledButton: !inStock }">Add To Cart</button>
            <button class="button" @click="removeCart">Remove From Cart</button>
        </div>
        <review-form @review-submitted="addReview"></review-form>
    </div>
    `, 
    props: {
        premium: Boolean,
        details: Array
    },
    setup(props, { emit }) {
        const product = ref('Boot');
        const brand = ref('SE 331');
        const inventory = ref(12);
        const onSale = ref(true);
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
        ]);
        const selectedVariant = ref(0);

        const shipping = computed(() => {
            return props.premium ? 'Free' : 30;
        });

        const title = computed(() => {
            return onSale.value ? `${brand.value} ${product.value} is on sale!` : `${brand.value} ${product.value}`;
        });

        const image = computed(() => {
            return variants.value.length > 0 ? variants.value[selectedVariant.value].image : '';
        });

        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity > 0;
        });

        function addToCart() {
            emit('add-to-cart', variants.value[selectedVariant.value].id);
        }

        function removeCart() {
            emit('remove-cart');
        }

        const reviews = ref([]);

        function addReview(review) {
            reviews.value.push(review);
        }

        function updateVariant(index) {
            selectedVariant.value = index;
        }

        return {
            title,
            image,
            inStock,
            inventory,
            onSale,
            variants,
            addToCart,
            removeCart,
            shipping,
            updateVariant,
            addReview
        };
    }  
};
