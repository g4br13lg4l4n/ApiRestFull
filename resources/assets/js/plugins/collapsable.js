const collapsable = {}

collapsable.install = function (Vue) {
    Vue.collapsable = function () {
        const boton = document.getElementById('botonaso')

       return boton.addEventListener('click',  () => {
            alert('botonaso')
       })
    }
}

export default collapsable
