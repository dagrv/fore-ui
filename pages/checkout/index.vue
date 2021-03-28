<template>
<div class="section">
  <div class="container is-fluid">
    <div class="columns">
      <div class="column is-three-quarters">
        
        <ShippingAddress :addresses="addresses" />

        <article class="message is-dark">
          <div class="message-body">
            <h1 class="title is-5">Payment</h1>
          </div>
        </article>

        <article class="message is-dark">
          <div class="message-body">
            <h1 class="title is-5">
              Shipping
            </h1>
            <div class="select is-fullwidth">
              <select>
                <option>
                  UPS Livraison Standard
                </option>
              </select>
            </div>
          </div>
        </article>

        <article class="message is-success" v-if="products.length">
          <div class="message-body is-success">
            <h1 class="title is-5">
              Cart Summary
            </h1>
            <CartOverview>
                <template slot="rows">
                    <tr>
                        <td></td>
                        <td></td>
                        <td class="is-size-5">Shipping</td>
                        <td class="has-text-weight-bold is-size-5">0€</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td class="is-size-5">Total</td>
                        <td class="has-text-weight-bold is-size-5">{{total}}</td>
                        <td></td>
                    </tr>
                </template>
            </CartOverview>
          </div>
        </article>

        <article>
          <div>
            <button 
                class="button is-success is-fullwidth is-medium" :disabled="empty">
              Place Order <p v-if="products.length">&nbsp;- {{total}}</p>
            </button>
          </div>
        </article>
      </div>
      <div class="column is-one-quarter">
        <article>
          <div>
            <button 
                class="button is-info is-fullwidth is-medium" :disabled="empty">
              Place Order <p v-if="products.length">&nbsp;- {{total}}</p>
            </button>
          </div>
        </article>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import CartOverview from '@/components/cart/CartOverview'
    import ShippingAddress from '@/components/checkout/addresses/ShippingAddress'

    export default {
        data() {
            return {
                addresses: []
            }
        },
        
        components: {
            CartOverview,
            ShippingAddress
        },

        computed: {
            ...mapGetters({
                total: 'cart/total',
                products: 'cart/products',
                empty: 'cart/empty'
            })
        },

        async asyncData({ app }) {
            let addresses = await app.$axios.$get('addresses')

            return {
                addresses: addresses.data
            }
        }
    }
</script>