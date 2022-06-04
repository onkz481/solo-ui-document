<template>
  <su-app>
    <Header />

    <su-transition
      transition="fade"
      appear
    >
      <su-main>
        <su-container>
          <component :is="component" />
        </su-container>
      </su-main>
    </su-transition>
  </su-app>
</template>

<script>
// components
import Header from  '../components/app/Header.vue'
import HomeLogo from '../components/home/logo.vue'
import HomeActionButtons from '../components/home/actionButtons.vue'
// - error
import doc404 from './errors/404.vue'

// markdowns
import { genMarkdownBody } from '../util/markdown'

function onRouteChange(){
  if( !this ) return

  let docs = this.$docs.docs

  this.component = docs ? genMarkdownBody(docs.Home, {
    HomeLogo, HomeActionButtons
  }) : doc404
}

export default {
  name: 'Home',
  provide(){
    return {
      hasNav: false
    }
  },
  components: { Header },
  data: () => ({
    drawer: false,
    component: undefined
  }),
  watch: {
    '$soloui.lang.current'(){
      this.onRouteChange()
    }
  },
  methods: {
    onRouteChange
  },
  beforeRouteEnter( to, from, next ){
    next(async (vm) => {
      await vm.onRouteChange(to.params)

      next()
    })
  },
}
</script>