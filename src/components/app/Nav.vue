<template>
  <su-nav
    v-model="internalValue"
  >
    <template
      v-if="!$soloui.layout.narrow"
    >
      <su-card-title>
        <div>Document</div>
      </su-card-title>

      <su-divider />
    </template>

    <su-list
      shrink
      nav
    >
      <su-list-group
        v-for="route, category in genRoutes"
        :key="category"
        :prepend-icon="route.icon"
        :group="`/${category}/`"
      >
        <template #activator>
          <su-list-item-content>
            <su-list-item-title>{{ route.title }}</su-list-item-title>
          </su-list-item-content>
        </template>

        <su-list-item
          v-for="doc in route.documents"
          :key="doc.name"
          :to="`/${category}/${doc.name}`"
        >
          <su-list-item-content>
            <su-list-item-title>{{ doc.title }}</su-list-item-title>
          </su-list-item-content>
        </su-list-item>
      </su-list-group>
    </su-list>
  </su-nav>
</template>

<script>
export default {
  name: 'AppNav',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    routes: {},
    icons: {
      introductions: 'mdi-flag',
      utilities: 'mdi-apps',
      styles: 'mdi-transition',
      components: 'mdi-view-quilt'
    },
    internalValue: false
  }),
  computed: {
    genRoutes(){
      const docs = this.$docs.docs
      if( !docs ) return {}

      let routes = {}

      Object.keys(docs).forEach(category => {
        if( typeof docs[category] !== 'object' ) return

        if( !routes[category] || typeof routes[category] !== 'object' ) routes[category] = {}

        routes[category] = Object.assign(routes[category], {
          title: this.$soloui.lang.t(`doc-titles.${category}.title`),
          icon: this.icons[category]
        })

        if( !routes[category].documents || typeof routes[category].documents !== 'object' ) routes[category].documents = {}

        Object.keys(docs[category]).forEach(name => {
          let title = this.$soloui.lang.t(`doc-titles.${category}.documents.${name}`)

          routes[category].documents[name] = {
            name: name,
            title: title ? title : name
          }
        })
      })

      return routes
    }
  },
  watch: {
    value(val){
      this.internalValue = val
    },
    internalValue(val){
      this.$emit('input', val)
    }
  }
}
</script>