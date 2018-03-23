<template>
  <div class="container-menu" v-bind:class="{ active: isActive }">
    <div class="head-menu">
      <router-link :to="{ name: 'Home' }" class="nav-link title-menu" > DASH ADMIN </router-link>
      <button @click="collapsible" class="color-white"> 
        <font-awesome-icon :icon="['fas', 'bars']"/> 
      </button> 
    </div>

    <div class="container-menu-nav">
      <nav>
        <ul>

          <router-link tag="li"  class="nav-item nav-dropdown" 
            v-bind:class="{open:menu}"
            :to="{ path: '/users'}" disabled>
            <div class="nav-link nav-dropdown-toggle"
              @click="handleClick"> 
              <font-awesome-icon :icon="['fas', 'user']" />  Usuarios 
              <font-awesome-icon :icon="['fas', 'angle-right']" />
            </div>
            <ul class="nav-dropdown-items">
              <li class="nav-item">
                <router-link :to="{ name: 'List Users' }" class="nav-link" exact> 
                  <font-awesome-icon :icon="['fas', 'users']" /> Todos 
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'Add User' }" class="nav-link" exact> 
                  <font-awesome-icon :icon="['fas', 'user-plus']" />  Agregar 
                </router-link>
              </li>
            </ul>
          </router-link>

        </ul>
      </nav>
    </div>
  </div>
</template>
<script>

import collapsibleMixin from '../mixins/collapsible'
  export default {
    name: 'Menu',
    mixins: [collapsibleMixin],
    data : function (){
      return {
        menu: false
      }
    },
    methods: {
      handleClick (e) {
        e.preventDefault()
          this.menu = !this.menu
      }, 
    }
  }
</script>