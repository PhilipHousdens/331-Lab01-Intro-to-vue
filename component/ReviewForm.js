const reviewForm = {
    template: /*html*/
    `
    <form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">

        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>

        <label for="rating">Rating:</label>
        <select id="rating" v-model="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>
        <label for="recommend">Would you recommend this product?</label>
        <input type="checkbox" id="recommend" v-model="recommend">

        <input class="button" type="submit" value="Submit">
    </form>
    `,
    setup(props, { emit }) {
        const form = reactive({
            name: '',
            review: '',
            rating: null,
            recommend: false
        });

        function onSubmit() {
            // Check if all fields are filled out
            if (form.name === '' || form.review === '' || form.rating === null) {
                alert('Review is incomplete. Please fill out every field.');
                return;
            }

            const productReview = {
                name: form.name,
                review: form.review,
                rating: form.rating,
                recommend: form.recommend // Include recommend in the review object
            };

            emit('review-submitted', productReview);

            // Reset form fields
            form.name = '';
            form.review = '';
            form.rating = null;
            form.recommend = false; // Reset recommend to false
        }

        return {
            ...toRefs(form),
            onSubmit
        };
    }
};

