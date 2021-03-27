<template>
    <div class="section">
        <div class="container is-fluid">
            <div class="columns is-centered">
                <div class="column is-three-quarters">
                    <h1 class="title is-4">Cart</h1>

                    <article class="message">
                        <CartOverview />
                    </article>

                    <a href="#" class="button is-fullwidth is-medium is-info is-success is-size-5 has-text-weight-semibold">
                        Buy
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CartOverview from '@/components/cart/CartOverview'
    
    export default {
        components: {
            CartOverview
        }
    }
</script>