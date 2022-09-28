app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template:
    /*html*/
    `
    <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img :src="image" alt="" :class="{'out-of-stock-img': !inStock}" />
          </div>
          <div class="product-info">
            <h1>{{title}}</h1>
            <p v-if="inStock > 0 && inStock <= 10">
              Almost Out of Stock!
            </p>
            <p v-else-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p v-if="onSale">{{sale}}</p>
            <p>{{description}}</p>
            <product-details :details="details"></product-details>
            <p>Available Colors:</p>
            <div v-for="(variant, index) in variants" 
                :key="variant.id" 
                @mouseover="updateVariant(index)"
                class="color-circle"
                :style="{backgroundColor: variant.color, display: 'inline-block', marginRight: '5px'}"
                >
            </div>
            <p>Available Sizes:</p>
            <span v-for="size in sizes" :style="{marginRight: '5px', fontSize: '24px'}">{{size}}</span>
            <div><button class="button" 
            :class="{disabledButton:!inStock}"
            @click="addToCart()" 
            :disabled="!inStock" :style="{marginLeft: '0px'}">Add to Cart</button></div>
            <p>Shipping: {{shipping}}</p>
          </div>
        </div>
        <review-list v-if="reviews.length" :reviews="reviews"></review-list>
        <review-form @reviewSubmitted="addReview"></review-form>
      </div>
    `,

  data() {
    return {
      product: "Socks",
      brand: "Vue Mastery",
      description: "Stretchable, made of cotton and is very comfortable to use",
      inventory: 100,
      onSale: true,
      selectedVariant: 0,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green", path: "./assets/images/socks_green.jpg", quantity: 100 },
        { id: 2235, color: "blue", path: "./assets/images/socks_blue.jpg", quantity: 0 },
      ],
      sizes: ["S", "M", "L", "XL"],
      reviews: [],
    };
  },
  methods: {
    addToCart() {
        this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    updateVariant(index) {
      this.selectedVariant = index
    },
    addReview(review) {
      this.reviews.push(review)
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].path
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity
    },
    sale() {
      return this.brand+' '+this.product+'is on sale!'
    },
    shipping() {
        if (this.premium) return 'Free'
        return '39pesos'
    },
  }
})