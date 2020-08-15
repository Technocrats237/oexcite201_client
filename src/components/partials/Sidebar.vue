<template>
    <!--<span>-->
    <!--<div class="app-sidebar__overlay" data-toggle="sidebar"></div>-->
    <aside class="app-sidebar">
        <div class="app-sidebar__user">
            <img class="app-sidebar__user-avatar" height="48" width="48" style="background: white"
                 src="/images/avatar.png" alt="User Image">
            <div>
                <p class="app-sidebar__user-name">{{ user.username }}</p>
            </div>
        </div>
        <ul class="app-menu">
            <li>
              <router-link :to="{name: 'home'}" class="app-menu__item" href="dashboard.html">
                <i class="app-menu__icon fa fa-dashboard"></i>
                <span class="app-menu__label">{{ $t('button.dashboard') }}</span>
              </router-link>
            </li>
            <li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview"><i
                    class="app-menu__icon fa fa-microchip"></i><span class="app-menu__label">{{ $t('button.sensors') }}</span><i
                    class="treeview-indicator fa fa-angle-right"></i></a>
                <ul class="treeview-menu">
                    <li>
                        <router-link class="treeview-item" :to="{name: ''}" rel="noopener">
                            <i class="icon fa fa-circle-o"></i> Temperature</router-link>
                    </li>
                    <li>
                        <router-link class="treeview-item" :to="{name: ''}" rel="noopener">
                            <i class="icon fa fa-circle-o"></i> pH</router-link>
                    </li>
                    <li>
                        <router-link class="treeview-item" :to="{name: ''}" rel="noopener">
                            <i class="icon fa fa-circle-o"></i> Turbidity</router-link>
                    </li>
                    <li>
                        <router-link class="treeview-item" :to="{name: ''}" rel="noopener">
                            <i class="icon fa fa-circle-o"></i> Dissolve Oxygen</router-link>
                    </li>
                </ul>
            </li>
            <li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview"><i
                    class="app-menu__icon fa fa-microchip"></i>
                <span class="app-menu__label">{{ $t('button.levels') }}</span><i
                    class="treeview-indicator fa fa-angle-right"></i></a>
                <ul class="treeview-menu">
                    <li>
                        <router-link class="treeview-item" :to="{name: ''}" rel="noopener">
                            <i class="icon fa fa-circle-o"></i>Fish Tank Water</router-link>
                    </li>
                    <li>
                        <router-link class="treeview-item" :to="{name: ''}" rel="noopener">
                            <i class="icon fa fa-circle-o"></i>Sensor Tank Water</router-link>
                    </li>
                    <li>
                        <router-link class="treeview-item" :to="{name: ''}" rel="noopener">
                            <i class="icon fa fa-circle-o"></i>Feeder Food Level</router-link>
                    </li>
                </ul>
            </li>
            <li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview"><i
                    class="app-menu__icon fa fa-microchip"></i><span class="app-menu__label">{{ $t('button.actuators') }}</span><i
                    class="treeview-indicator fa fa-angle-right"></i></a>
                <ul class="treeview-menu">
                    <li>
                        <router-link class="treeview-item" :to="{name: ''}" rel="noopener">
                            <i class="icon fa fa-circle-o"></i> HEATER</router-link>
                    </li>
                    <li>
                        <router-link class="treeview-item" :to="{name: ''}" rel="noopener">
                            <i class="icon fa fa-circle-o"></i> PUMP</router-link>
                    </li>
                    <li>
                        <router-link class="treeview-item" :to="{name: ''}" rel="noopener">
                            <i class="icon fa fa-circle-o"></i> AREATOR</router-link>
                    </li>
                    <li>
                        <router-link class="treeview-item" :to="{name: ''}" rel="noopener">
                            <i class="icon fa fa-circle-o"></i> FISH TANK ELECTROVALVE</router-link>
                    </li>
                    <li>
                        <router-link class="treeview-item" :to="{name: ''}" rel="noopener">
                            <i class="icon fa fa-circle-o"></i> RESERVOIR TANK ELECTROVALVE</router-link>
                    </li>
                </ul>
            </li>
            <li>
                <router-link :to="{name: 'settings'}" class="app-menu__item" href="charts.html">
                    <i class="app-menu__icon fa fa-wrench"></i>
                    <span class="app-menu__label">{{ $t('button.settings') }}</span>
                </router-link>
            </li>
        </ul>
    </aside>
    <!--</span>-->
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "Sidebar",
        data() {
            return {
                baseUrl: process.env.BASE_URL
            }
        },
        computed: {
            ...mapState({
                user: state => state.Auth.user
            })
        },
        methods: {},
        mounted() {
        }
    }
</script>

<style scoped>
  .app-menu__item.router-link-exact-active, .app-menu__item:hover, .app-menu__item:focus {
    background: #0d1214;
    border-left-color: #2196F3;
    text-decoration: none;
    color: #fff;
  }
</style>
