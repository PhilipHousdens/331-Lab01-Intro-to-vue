const { createApp, ref, computed } = Vue;

const app = createApp ({
    setup() {
        const cart = ref([])
        const cartNum = ref(0)
        const premium = ref(true)
        const details = ref(["50% wool", "30% Cotton", "20% polyester"])

        function updateCart(id) {
            cart.value.push(id) 
            console.log(cart.value)

            cartNum.value += 1
        }

        function removeCart() {
            cart.value.splice(0,1)
            console.log(cart.value)

            cartNum.value -= 1

            if (cartNum.value <= 0) {
                return cartNum.value = 0;
            }
        }
        return {
           cart,
           cartNum,
           premium,
           details,
           updateCart,
           removeCart
        }
    }
})

app.component('product-display', productDisplay)
    .component('product-detail', productDetail)
    .component('review-form', reviewForm)
    .mount('#app')