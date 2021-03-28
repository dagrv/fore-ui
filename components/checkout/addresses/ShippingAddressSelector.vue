<template>
    <table class="table is-hoverable is-fullwidth">
        <tbody>
            <tr v-for="address in addresses" :key="address.id">
                <td>
                    <p :class="{ 'has-text-weight-bold': address.id ===  selectedAddress.id }">
                        {{ address.name }} <br>
                        {{ address.address_1 }} <br>
                        {{ address.city }} <br>
                        {{ address.postal_code }}<br>
                        {{ address.country.name }} <br>
                    </p>
                </td>
                
                <td>
                    <a href="" class="button is-link is-outlined is-size-6" @click.prevent="$emit('click', address)">
                        Deliver here
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        props: {
            addresses: {
                required: true,
                type: Array
            },

            selectedAddress: {
                required: true,
                type: Object
            }
        }
    }
</script>