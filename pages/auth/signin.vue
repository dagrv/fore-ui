<template>
    <div class="container is-fluid">
        <div class="columns is-centered mt-6">
            <div class="column is-6">
                <h1 class="title is-4">Sign In</h1>
                    <form action="" @submit.prevent="signin">
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control">
                                <input class="input" type="email" placeholder="name@mail.com" 
                                v-model="form.email">
                            </div>
                        </div>

                        <div class="field">
                            <div class="label">Password</div>
                            <div class="control">
                                <input class="input" type="password" placeholder="***********"
                                v-model="form.password">
                            </div>
                        </div>

                        <div class="field">
                            <p class="control">
                                <button class="button is-info is-outlined is-medium">
                                    Sign In
                                </button>
                            </p>
                        </div>
                    </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        async signin() {
            await this.$auth.loginWith('local', {
                data: this.form
            })

            this.$router.replace({
                name: 'index'
            })
        }
    },
}
</script>