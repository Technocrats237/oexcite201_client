<template>
    <div>
        <section class="material-half-bg">
            <div class="cover"></div>
        </section>
        <section class="login-content">
            <div class="logo">
                <h1>{{ appName }}</h1>
            </div>
            <div class="login-box">
                <form class="login-form">
                    <h3 class="login-head"><i class="fa fa-lg fa-fw fa-coffee"></i>{{ $t('login.title') }}</h3>
                    <div class="form-group">
                        <label class="control-label">{{ $t('login.username') }}</label>
                        <input v-model="data.username" class="form-control" type="text" placeholder="Email" autofocus>
                        <div class="text-danger pl-1">
                            {{ auth_message }}
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">{{ $t('login.password') }}</label>
                        <input v-model="data.password" class="form-control" type="password" placeholder="Password">
                    </div>
                    <div class="form-group">
                        <div class="utility">
                            <!--<div class="animated-checkbox">
                                <label>
                                    <input type="checkbox"><span class="label-text">{{ $t('login.remember') }}</span>
                                </label>
                            </div>
                            <p class="semibold-text mb-2"><a href="#" data-toggle="flip">{{ $t('login.forgot') }}</a></p>
                        --></div>
                    </div>
                    <div class="form-group btn-container">
                        <button :disabled="loading" @click.prevent="login" class="btn btn-primary btn-block">
                            <i class="fa fa-spinner fa-spin" v-if="loading"></i>
                            <i class="fa fa-sign-in fa-lg fa-fw" v-else></i> {{ $t('button.login') }}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'Login',
        data() {
            return {
                data: {
                    username: 'admin',
                    password: 'password'
                },
                appName: process.env.APP_NAME || 'Oexcite201',
                loading: false,
                auth_message: ''
            }
        },
        computed: {
            ...mapState({})
        },
        watch: {
            auth_status(value) {
                if (value === 'error') {
                    this.auth_message = this.$t('login.error.message')
                }
            }
        },
        methods: {
            login() {
                this.loading = true
                this.auth_message = ''
                this.$authService.login(this.data)
                    .then(res => {
                        console.log(res)
                        this.$router.push({name: 'home'})
                    })
                    .catch(error => {
                        if (error.response && error.response.status === 401) {
                            this.auth_message = error.response.data.message
                        } else {
                            this.auth_message = this.$t('login.error.else')
                        }
                    })
                    .then(() => {
                        this.loading = false
                    })
            }
        },
        mounted() {
        },
        destroyed() {
        }
    }
</script>

<style scoped>

</style>
