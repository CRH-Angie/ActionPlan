const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
      url: "/cart-url",
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    },
    removeToCart() {
      this.cart.pop()
    },
  }
});
