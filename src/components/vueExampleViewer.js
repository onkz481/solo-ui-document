import Vue from 'vue'

// components
import { 
  SuSheet, SuCard, SuCardContent, SuAppbar, SuSpacer, SuBtn, SuIcon, 
  SuExpandTransition, SuDivider, SuTabs, SuTab, SuTabsItems, SuTabItem } from '@onkz481/solo-ui'
import { CodeViewer } from './tools'

import * as examples from '../examples'

// helpers
import { genExtractWithChar, extractWithWord } from '../util/helpers'

export default Vue.extend({
  props: {
    file: {
      type: String,
      default: undefined
    },
    text: {
      type: String,
      default: undefined
    }
  },
  data: () => ({
    internalText: undefined,
    tab: 0,
    showCodes: false
  }),
  computed: {
    template(){
      return this.getExtractWithWord(this.internalText, 'template')
    },
    script(){
      return this.getExtractWithWord(this.internalText, 'script')
    },
    style(){
      return this.getExtractWithWord(this.internalText, 'style')
    },
    codes(){
      const codes = {}

      if( this.template ) codes.template = this.getExtractWithWord(this.internalText, 'template', true)
      if( this.script ) codes.script = this.getExtractWithWord(this.internalText, 'script', true)
      if( this.style ) codes.script = this.getExtractWithWord(this.internalText, 'style', true)

      return codes
    }
  },
  mounted(){
    if( this.file ){
      const file = this.file.split('/')
  
      let text = examples
      file.forEach(path => {
        text = text[path]
      })
  
      this.internalText = text
    } else {
      this.internalText = this.text
    }
  },
  methods: {
    getExtractWithWord(text, word, inword = false){
      return extractWithWord(text, `<${word}>`, `</${word}>`, inword)
    },
    getCodeLang(name){
      switch(name){
        case 'template':
          return 'html'
        case 'script':
          return 'js'
        default:
          return 'js'
      }
    },
    genBtn(options = {}, child = []){
      return this.$createElement(SuBtn, options, child)
    },
    genIcon(options = {}, child = []){
      return this.$createElement(SuIcon, options, child)
    },
    genDivider(options = {}, child = []){
      return this.$createElement(SuDivider, options, child)
    },
    genAppbar(){
      return this.$createElement(SuAppbar, {
        props: {
          dense: true
        }
      }, [
        this.$createElement(SuSpacer),
        this.genBtn({
          props: {
            icon: true,
            text: true
          },
          on: {
            click: () => {
              this.showCodes = !this.showCodes
            }
          }
        }, [
          this.genIcon({}, ['mdi-code-tags'])
        ])
      ])
    },
    genCodes(){
      if( !Object.keys(this.codes).length ) return

      var self = this

      const tabs = this.$createElement(SuTabs, {
        props: {
          value: self.tab
        },
        on: {
          input: function(event){
            self.tab = event
          }
        }
      }, Object.keys(this.codes).map(key => {
        return this.$createElement(SuTab, {}, [key])
      }))

      const tabsItems = this.$createElement(SuTabsItems, {
        props: {
          value: this.tab
        }
      }, Object.keys(this.codes).map(key => {
        const code = this.$createElement(CodeViewer, {
          props: {
            lang: this.getCodeLang(key),
            code: this.codes[key]
          }
        })
        const sheet = this.$createElement(SuSheet, {
          props: {
            color: 'transparent'
          }
        }, [code])

        return this.$createElement(SuTabItem, {}, [sheet])
      }))

      const div = this.$createElement('div', {
        directives: [
          {
            name: 'show',
            value: this.showCodes
          }
        ]
      }, [
        tabs,
        this.genDivider(),
        tabsItems
      ])

      return this.$createElement(SuExpandTransition, {}, [div])
    },
    genVue(){
      if( !this.template ) return

      const res = Vue.compile(this.template)
      const options = new Function( `return ${genExtractWithChar(this.script)}` )()

      const component = Vue.component(`Example${this._uid}`, Object.assign({}, options, {
        render: res.render,
        staticRenderFns: res.staticRenderFns
      }))

      return this.$createElement(SuCardContent, {}, [this.$createElement(component)])
    },
  },
  render(h){
    return h(SuCard, {
      class: [
        'mb-4'
      ],
      props: {
        outlined: true,
        elevation: 0
      }
    }, [
      this.genAppbar(),
      this.genCodes(),
      this.genDivider(),
      this.genVue()
    ])
  }
})