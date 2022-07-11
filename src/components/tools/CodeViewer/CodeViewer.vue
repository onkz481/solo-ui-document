<template>
  <su-sheet
    class="code-viewer"
    :data-theme="computedTheme"
    rounded="normal"
  >
    <pre><code v-html="highlightCode" /></pre>

    <div class="code-viewer__status">
      <su-btn
        icon
        text
        @click="onCopy"
      >
        <su-icon>mdi-content-copy</su-icon>
      </su-btn>

      <su-label
        small
      >
        {{ computedLang }}
      </su-label>
    </div>
  </su-sheet>
</template>

<script>
import Prism from 'prismjs'

// if you are intending to use Prism functions manually, you will need to set:
Prism.manual = true

export default {
  name: 'CodeViewer',
  props: {
    lang: {
      type: String,
      default: 'js'
    },
    code: {
      type: String,
      default: ''
    },
    languages: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    themes: ['dark', 'light'],
    highlightCode: null
  }),
  computed: {
    computedLang(){
      const { lang } = this

      return Prism.languages[lang] ? lang : 'js'
    },
    computedTheme(){
      if( !this.theme ) return this.$soloui.theme.current

      return this.themes.includes(this.theme) ? this.theme : this.$soloui.theme.systemTheme()
    },
  },
  mounted(){
    this.$nextTick(() => {
      this.genCode()
    })
  },
  methods: {
    genCode(){
      if( !Prism.languages[this.computedLang] ) return

      this.highlightCode = Prism.highlight(this.code, Prism.languages[this.computedLang])
    },
    onCopy(){
      if( !navigator.clipboard ) return

      navigator.clipboard.writeText(this.code)
    }
  }
}
</script>

<style lang="scss">
  @import './themes/light';
  @import './themes/dark';

  .code-viewer {
    display: flex;
    padding: 12px 8px 12px 16px;

    pre {
      flex: 1 1 auto;
      min-height: 24px;
      overflow: auto;
    }
    code {
      border-radius: 0;
      padding: 0;
      font-family: inherit;
      font-size: inherit;
      background-color: inherit !important;
    }
    pre, code {
      font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
      font-size: 1em;
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal;
      line-height: 1.5;

      -moz-tab-size: 4;
      -o-tab-size: 4;
      tab-size: 4;

      -webkit-hyphens: none;
      -moz-hyphens: none;
      -ms-hyphens: none;
      hyphens: none;
    }

    .code-viewer__status {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 8px;

      .su-btn {
        align-self: flex-end;
      }
      .su-label {
        flex: 0 0 auto;
        align-self: center;
        text-align: right;
      }
    }
  }
</style>