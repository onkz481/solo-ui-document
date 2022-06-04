<template>
  <section>
    <su-row
      justify="center"
    >
      <su-btn
        class="mr-4 text-decoration--none"
        color="primary"
        width="250"
        large
        :to="`/introductions/Install`"
      >
        <su-icon>mdi-flag</su-icon>
        {{ $soloui.lang.t('doc-titles.introductions.documents.Install') }}
      </su-btn>

      <su-btn
        class="text-decoration--none"
        color="secondary"
        width="250"
        large
        to="https://github.com/onkz481/solo-ui"
        target="_blank"
      >
        <su-icon>mdi-github</su-icon>
        GitHub
      </su-btn>
    </su-row>
  </section>
</template>

<script>
export default {
  name: 'ActionButtons'
}
</script>