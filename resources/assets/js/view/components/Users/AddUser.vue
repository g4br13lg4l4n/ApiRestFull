<template>
  <div>
      <SlotHeadMain>
        <h2 slot="MainTitle"> 
          Agregar Usuario
        </h2>
      </SlotHeadMain> 
      <SlotFormMain>
        <div slot="SlotFormGroup" class="form-group">
          <div class="group">
            <label for="name">Nombre</label>
            <input type="text" v-model="user.name" id="name" placeholder="Nombre">
          </div>
          <div class="group">
            <label for="user">Usuario</label>
            <input type="text" v-model="user.user" id="user" placeholder="Usuario">
          </div>
          <div class="group">
            <label for="email">Email</label>
            <input type="text" v-model="user.email" id="email" placeholder="Email">
          </div>
          <div class="group">
            <label for="password">Contraseña</label>
            <input type="text" v-model="user.password" id="password" placeholder="Contraseña">
          </div>
          <div class="group">
            <label for="password_confirmate">Confirmar Contraseña</label>
            <input type="text" v-model="user.password_confirmation" id="password_confirmate" placeholder="Confirma tu contraseña">
          </div>
          <div class="group">
            <label for="phone">Teléfono</label>
            <input type="text" v-model="user.phone" id="phone" placeholder="Teléfono">
          </div>
          <div class="group">
            <label for="curp">CURP</label>
            <input type="text" v-model="user.curp" id="curp" placeholder="CURP">
          </div>
          <div class="group">
            <label for="address">Dirección</label>
            <input type="text" v-model="user.address" id="address" placeholder="Dirección">
          </div>
          <input type="submit" value="Guardar" class="blue" v-on:click="AddUser">
        </div>
      </SlotFormMain>
  </div>
</template>
<script>
  import SlotFormMain from '../../slots/Slot-Form-Main'
  import SlotHeadMain from '../../slots/Slot-Head-Main'

  export default {
    name:'AddUser',
    components: { SlotFormMain, SlotHeadMain },
    data: function() {
      return {
        user: {
          name: '',
          user: '',
          email: '',
          password:'',
          password_confirmation: '',
          phone:'',
          curp: '',
          address:''
        }
      }
    },
    methods: {
      AddUser() {
          Request.addCostumer(this.user)
          .then( res => {
            console.log(res.data)
          })
          .catch( error =>{
            console.log(error.data)
          })
      }
    }

  }
</script>
