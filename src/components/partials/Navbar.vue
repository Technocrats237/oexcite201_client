<template>
    <header class="app-header"><router-link class="app-header__logo" :to="{name: 'dashboard'}">{{ appName }}</router-link>
        <!-- Sidebar toggle button--><a class="app-sidebar__toggle" href="#" data-toggle="sidebar"
                                        aria-label="Hide Sidebar"></a>
        <!-- Navbar Right Menu-->
        <ul class="app-nav">
            <!-- User Menu-->
            <li class="dropdown"><a class="app-nav__item" href="#" data-toggle="dropdown"
                                    aria-label="Open Profile Menu"><i class="fa fa-user fa-lg"></i></a>
                <ul class="dropdown-menu settings-menu dropdown-menu-right">
                    <li>
                        <router-link :to="{name: 'settings'}" class="dropdown-item" href="page-user.html"><i
                                class="fa fa-cog fa-lg"></i> {{ $t('button.settings') }}
                        </router-link>
                    </li>
                    <li>
                        <a @click.prevent="logout" class="dropdown-item" href="#">
                            <i class="fa fa-sign-out fa-lg"></i> {{ $t('button.logout') }}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </header>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {}
        },
        methods: {
            logout() {
                this.$authService.logout()
            }
        },
        mounted() {
            console.log(this)
        }
    }
</script>

<style scoped>

</style>
