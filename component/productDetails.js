const productDetail = {
    template: 
    /* html */
    `
    <ul>
        <li v-for="detail in details">{{detail}}</li>
    </ul>
    `,
    props: {
        details: Array
    },
    setup(props) {
        const detail = ref(["50% wool", "30% Cotton", "20% polyester"])
        const details = computed(() => {
            return props.details
        })
        return {
            details,
            detail
        }
    }
}