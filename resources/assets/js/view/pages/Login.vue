<template>
    <div class="content-login">
      <div class="head-login">
        <h1>LOGIN</h1>  
      </div>
      <div class="body-login">
        <form @submit.prevent="checkLogin()">
          <div class="form-control">
            <label for="user">Usuario </label>
            <input v-model="user.email" v-bind:class="{ 'has-error': errors.hasError }" type="text">
            <transition name="slide-fade">  
              <p v-if="errors.userError" class="error-text">Usuario incorrecto</p>
            </transition>
          </div>
          <div class="form-control">
            <label for="password">Contraseña </label>
            <input v-model="user.password" v-bind:class="{ 'has-error': errors.hasError }" type="password">
            <transition name="slide-fade">  
              <p v-if="errors.userError" class="error-text">Contraseña incorrecta</p>
            </transition>
          </div>
          <div class="form-control">
            <input type="submit" class="blue " value="Ingresar">
          </div>
        </form>
      </div>
    </div>
</template>
<script>
  export default {
    name: 'Login',
    data () {
      return {
        errors: {
          userError: false,
          responseError: false,
          hasError: false 
        },
        user: {
          email: null,
          password: null
        }
      }
    },
    methods: {
      checkLogin() {
        this.userCheck(this.user.email) ? this.login() : this.errorUser()
      },
      userCheck(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      errorUser(){
        this.errors.userError = true
        this.errors.hasError = true
      },
      login() {
        this.$router.push({ name:'Home' })
      },
    }
  }
</script>
<style lang="stylus" scoped>
  .slide-fade-enter-active 
    transition all .3s ease
  
  .slide-fade-leave-active 
    transition all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
  
  .slide-fade-enter, .slide-fade-leave-to
    transform translateX(10px)
    opacity 0

  .content-login 
    width 480px
    margin 0 auto
    margin-top 10vh
    background-color #FFFFFF
    box-shadow 3px 4px 12px 0 rgba(128,128,128,0.78)
  .head-login
    background-color #116DEA 
    height 100px
    display flex
    align-items center
    justify-content left
    padding 20px
    box-sizing border-box
    h1 
      color #FFF
      font-size 20px
      font-family SourceSansPro-Bold
      letter-spacing .5px
  .body-login
    padding 50px 5px
    form 
      display flex
      flex-direction column
      justify-content center
      align-items center
      .form-control 
        input[type=submit]
          margin-top 20px

</style>
