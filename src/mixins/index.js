export default {
  watch: {
    '$soloui.lang.current'(val){
      this.$docs.locale = val
    }
  }
}