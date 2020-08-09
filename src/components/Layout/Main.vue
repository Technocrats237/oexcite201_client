<template>
    <span>
        <sidebar></sidebar>
        <navbar></navbar>
        <main class="app-content">
            <transition name="slide-fade">
            <router-view></router-view>
        </transition>
        </main>
    </span>
</template>

<script>
    import Sidebar from "../partials/Sidebar";
    import Navbar from "../partials/Navbar";
    import $ from "jquery"
    export default {
        name: "Main",
        components: {Navbar, Sidebar},
        data() {
            return {}
        },
        methods: {},
        mounted() {
            $("body").addClass("app sidebar-mini")
            var treeviewMenu = $('.app-menu');

            // Toggle Sidebar
            $('[data-toggle="sidebar"]').click(function(event) {
                event.preventDefault();
                $('.app').toggleClass('sidenav-toggled');
            });

            // Activate sidebar treeview toggle
            $("[data-toggle='treeview']").click(function(event) {
                event.preventDefault();
                if(!$(this).parent().hasClass('is-expanded')) {
                    treeviewMenu.find("[data-toggle='treeview']").parent().removeClass('is-expanded');
                }
                $(this).parent().toggleClass('is-expanded');
            });

            // Set initial active toggle
            $("[data-toggle='treeview.'].is-expanded").parent().toggleClass('is-expanded');

            //Activate bootstrip tooltips
            // $("[data-toggle='tooltip']").tooltip();
        }
    }
</script>

<style scoped>

</style>
