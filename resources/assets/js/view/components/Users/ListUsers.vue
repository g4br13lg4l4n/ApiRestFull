<template>
  <div class="container-list-users">
      <SlotHeadMain>
        <h2 slot="MainTitle"> 
          Usuarios
        </h2>
      </SlotHeadMain>  

     <SlotTable>
       <tr slot="thead">
          <th>Nombre</th>
          <th>Correo</th>
        <!--  <th>RFC</th>
          <th>Teléfono</th>-->
          <th>Acciones</th> 
       </tr>

       <tr slot="tbody" v-for="costumer in costumers">
          <td>{{ costumer.nombre }}</td>
          <td>{{ costumer.correo }}</td>
          <td class="cont-options">
            <button type="submit">
              <font-awesome-icon :icon="['fas', 'ellipsis-v']" />
            </button>
          </td>
       </tr>
       <div slot="tfoot">
          <div class="container-paginate">
              <button> 
                <font-awesome-icon :icon="['fas', 'chevron-left']" /> 
              </button>
                <span> 1 - 2 </span>
              <button> 
                <font-awesome-icon :icon="['fas', 'chevron-right']" /> 
              </button>
          </div>
       </div>
     </SlotTable>  
     
  </div>
</template>

<script>
  
  import SlotTable from '../../slots/Slot-Table'
  import SlotHeadMain from "../../slots/Slot-Head-Main"
  export default {
    name: 'ListUsers',
    components: { SlotTable, SlotHeadMain },
    data () {
      return {
        costumers: [],
      }
    },
    created () {
      Request.getCostumers()
        .then(res => {
          this.costumers = res.data
        })
        .catch(error => {
          console.log(error.data)
        })
    }
  }

</script>