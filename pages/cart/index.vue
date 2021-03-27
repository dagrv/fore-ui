<template>
    <div class="section">
        <div class="container is-fluid">
            <div class="columns is-centered">
                <div class="column is-three-quarters">
                    <h1 class="title is-4">Cart</h1>

                    <article class="message" v-if="products.length">
                        <CartOverview />
                    </article>

                    <h1 v-else class="is-size-3 has-text-centered mt-6">Your cart is empty</h1>

                    <a href="#" v-if="!empty" class="button is-fullwidth is-success is-size-4 has-text-weight-semibold">
                        Buy
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import CartOverview from '@/components/cart/CartOverview'
    
    export default {
        components: {
            CartOverview
        },

        computed: {
            ...mapGetters({
                empty: 'cart/empty',
                products: 'cart/products',
                // changed: 'cart/changed'
            })
        }
    }
</script>