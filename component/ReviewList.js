const reviewList = {
    template:
    /*html*/
    ` 
    <div class="review-contianer">
        <h3>Reviews: </h3>
        <ul>
        <li v-for="(review, index) in reviews" :key="index">
            {{ review.name }} gave this {{ review.rating }} stars
            <br/>
            "{{ review.review }}"
            <br/>
        </li>
        </ul>
    </div>
    `,
    props: {
        reviews: {
            type: Array
        }
    }, 
    setup(props){
        const reviews = props.reviews
        return {
            reviews
        }
    }
}