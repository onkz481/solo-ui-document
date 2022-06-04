import Vue from 'vue'

export default Vue.extend({
  name: 'RLink',
  props: {
    to: {
      type: String,
      default: undefined
    }
  },
  computed: {
    computedTo(){
      if( !this.to ) return
      
      let to = this.to

      if( to.startsWith('/') ) to = to.slice(1)

      return `/${this.$soloui.lang.current}/${to}`
    }
  },
  render(h){
    return h('router-link', {
      props: {
        to: this.computedTo
      },
      class: [
        'text-decoration--none'
      ]
    }, [
      this.$slots.default
    ])
  }
})