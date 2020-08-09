<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
    }
  },
  mounted() {
  }
}
</script>

<style>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */
  {
    transform: translateX(10px);
    opacity: 0;
  }

  .currency {
    font-size: 15px;
    color: #0011ff;
  }

  .f-w {
    width: 100%!important;
  }

  .f-24 {
    font-size: 23px !important;
  }

  .f-18 {
    font-size: 18px !important;
  }
</style>
