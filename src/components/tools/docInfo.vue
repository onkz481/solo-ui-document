<template>
  <div class="mt-16 mb-8">
    <su-row
      class="mb-2"
    >
      <router-link
        v-if="prev"
        :to="`/${prev.category}/${prev.name}`"
        class="prev text-decoration--none"
      >
        <su-icon>mdi-arrow-left</su-icon>

        <span
          class="pl-1"
        >
          {{ $soloui.lang.t(`doc-titles.${prev.category}.documents.${prev.name}`) }}
        </span>
      </router-link>

      <router-link
        v-if="next"
        :to="`/${next.category}/${next.name}`"
        class="next text-decoration--none"
      >
        <su-icon>mdi-arrow-right</su-icon>

        <span
          class="pr-1"
        >
          {{ $soloui.lang.t(`doc-titles.${next.category}.documents.${next.name}`) }}
        </span>
      </router-link>
    </su-row>

    <su-divider />

    <su-row
      class="mt-2"
      justify="space-between"
    >
      <div>
        <a
          class="d-flex align-center text-decoration--none"
          :href="href"
          target="_blank"
        >
          <span>
            {{ $soloui.lang.t('common.suggestGithub') }}
          </span>

          <su-icon
            class="pl-2"
            small
            color="primary"
          >
            mdi-open-in-new
          </su-icon>
        </a>
      </div>

      <div
        v-if="lastModified"
      >
        {{ `${$soloui.lang.t('common.lastModified')}: ${lastModified}` }}
      </div>
    </su-row>
  </div>
</template>

<script>
import modified from '../../data/docsModified.json'

export default {
  name: 'DocumentInfo',
  data: () => ({
    prev: undefined,
    next: undefined,
    href: undefined,
    lastModified: undefined,
  }),
  watch: {
    '$route'(){
      this.setUrl('prev')
      this.setUrl('next')
      this.setHref()
    }
  },
  mounted(){
    this.setUrl('prev')
    this.setUrl('next')
    this.setHref()
  },
  methods: {
    setUrl(type){
      const doc = this.$docs[type]
      
      if( !doc ) return

      this[type] = doc
      this.lastModified = modified[this.$docs.locale][doc.category][doc.name]
    },
    setHref(){
      const latestDoc = this.$docs.latestDoc

      this.href = `https://github.com/onkz481/solo-ui/src/documents/${this.$docs.locale}/${latestDoc.category}/${latestDoc.name}.md`
    }
  }
}
</script>

<style scoped>
  .prev, .next {
    display: flex;
  }
  .prev {
    margin-right: auto;
  }
  .next {
    flex-flow: row-reverse;
    margin-left: auto;
  }
</style>