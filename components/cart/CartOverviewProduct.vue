<template>
    <tr>
        <td width="140">
            <img src="http://via.placeholder.com/80x80" alt="placeholder">
        </td>

        <td class="is-size-5">{{ product.product.name }} — {{ product.type }} / {{ product.name }}</td>
        
        <td width="160">
            <div class="field">
                <div class="control">
                    <div class="select is-fullwidth">
                        <select v-model="quantity">
                            <option value="0" v-if="product.quantity == 0">0</option>
                            <option :value="x" v-for="x in product.stock_count" :key="x" :selected="x == product.quantity">
                                {{ x }}
                            </option>
                        </select>
                    </div>
                    
                </div>
            </div>
        </td>

        <td class="is-size-5">{{ product.total }}</td>
        
        <td class="is-size-5 has-text-danger">
            <a href="" @click.prevent="destroy(product.id)">Delete</a>
        </td>
    </tr>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                quantity: this.product.quantity
            }
        },
        
        props: {
            product: {
                required: true,
                type: Object
            }
        },

        watch: {
            'quantity' (quantity) {
                this.update({ productId: this.product.id, quantity })
            }
        },

        methods: {
            ...mapActions({
                destroy: 'cart/destroy',
                update: 'cart/update'
            })
        }
    }
</script>