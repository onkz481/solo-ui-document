<template>
  <su-app>
    <Header
      v-model="drawer"
    />

    <Nav
      v-model="drawer"
    />

    <su-transition
      transition="fade"
      appear
    >
      <su-main>
        <su-container>
          <component :is="component" />

          <docInfo />
        </su-container>
      </su-main>
    </su-transition>
  </su-app>
</template>

<script>
// components
import Header from  '../components/app/Header.vue'
import Nav from '../components/app/Nav.vue'
import example from '../components/vueExampleViewer'
// - tools
import rLink from '../components/tools/rLink'
import docInfo from '../components/tools/docInfo.vue'
import { CodeViewer, optionsTable } from '../components/tools'
// - error
import doc404 from './errors/404.vue'

import { examples } from '@onkz481/solo-ui'

// markdowns
import { genMarkdownBody } from '../util/markdown'

function onRouteChange( params ){
  if( !this ) return

  const { categories, document } = params

  if( !(categories && document) ) return

  let component

  let doc = this.$docs.doc(categories, document)

  if( !doc ){
    component = doc404
  } else {
    component = genMarkdownBody(doc, {
      CodeViewer, example, rLink, optionsTable,
      sample: examples[document]
    })
  }

  this.component = component
}

export default {
  name: 'ViewDocument',
  components: { Header, Nav, docInfo },
  provide(){
    return {
      hasNav: true
    }
  },
  beforeRouteEnter( to, from, next ){
    next(async (vm) => {
      await vm.onRouteChange(to.params)

      next()
    })
  },
  beforeRouteUpdate( to, from, next ){
    this.onRouteChange(to.params)

    next()
  },
  props: {
    categories: {
      type: String,
      default: undefined
    },
    document: {
      type: String,
      default: undefined
    },
  },
  data: () => ({
    drawer: false,
    component: undefined
  }),
  watch: {
    '$soloui.lang.current'(){
      this.onRouteChange(this)
    }
  },
  methods: {
    onRouteChange
  },
}
</script>