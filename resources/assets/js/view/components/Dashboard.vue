<template>
  <div class="app">
    <div class="app-body">
      <Head/>
      <Menu/>
      <main class="main" v-bind:class="{ active: isActive }">
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
    <Footer/>  
  </div>
</template>
<script>
import Menu from './Menu'
import Head from './Head'
import Footer from './Footer'
import collapsibleMixin from '../mixins/collapsible'
  export default {
    name: 'Dashboard',
    mixins: [collapsibleMixin],
    components: { Menu, Head, Footer },
    created () {
      this.$bus.$on('active', (status) => {
        this.isActive = status
      })
    }
  }
</script>