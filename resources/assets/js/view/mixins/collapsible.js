
const collapsibleMixin = {
	data () {
		return {
			isActive: false 
		}
	},
	methods: {
		collapsible (a) {
			this.isActive = this.isActive ? false : true   
			this.$bus.$emit('active', this.isActive)
			this.$emit('active', this.isActive)

		}
	}
}

export default collapsibleMixin