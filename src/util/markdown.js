import Vue from 'vue'

// components
//import { SuTable } from '@onkz481/solo-ui'

// helpers
import { multiExtractWithWord } from './helpers'

const md = require('markdown-it')({
  html: true
})

function defaultRender(rule){
  return rule || function(tokens, idx, options, env, self){
    return self.renderToken(tokens, idx, options)
  }
}

/* utils */
const HTML_ESCAPE_TEST_RE = /[&<>"]/
const HTML_ESCAPE_REPLACE_RE = /[&<>"]/g
const HTML_REPLACEMENTS = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;'
}

function replaceUnsafeChar(ch) {
  return HTML_REPLACEMENTS[ch]
}

function escapeHtml(str) {
  if (HTML_ESCAPE_TEST_RE.test(str)) {
    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar)
  }
  return str
}

/* plugins */
md.use(require('markdown-it-attrs'))
md.use(require('markdown-it-header-sections'))

md.use(mdHead)
md.use(mdCode)
md.use(mdLink)

// header要素に独自Cssクラスを追加
function mdHead(md){
  let render = defaultRender(md.renderer.rules.heading_open)

  md.renderer.rules.heading_open = (tokens, idx, options, env, self) => {
    let token = tokens[idx]
    let i = token.attrIndex('class')
    let tmpAttrs = token.attrs ? token.attrs.slice() : []

    if( i < 0 ){
      tmpAttrs.push(['class', `text-${token.tag} mb-4`])
    } else {
      tmpAttrs[i] = tmpAttrs[i].slice()
      tmpAttrs[i][1] += ` text-${token.tag} mb-4`
    }

    if( tokens[idx + 1].content ) tmpAttrs.push(['id', tokens[idx + 1].content]) // idを追加

    token.attrs = tmpAttrs

    return render(tokens, idx, options, env, self)
  }
}

// code要素を独自コンポーネントに変更
function mdCode(md){
  md.renderer.rules.fence = (tokens, idx) => {
    let token = tokens[idx],
        content = escapeHtml(token.content)

    return `<code-viewer class="mb-4" code="${content}" :languages="['${token.info}']" lang="${token.info}" rounded="normal" />`
  }
}

// アンカー要素に「target="_blank"」を常に付与
function mdLink(md){
  let render = defaultRender(md.renderer.rules.link_open)

  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    let aIndex = tokens[idx].attrIndex("target")

    if (aIndex < 0) {
      tokens[idx].attrPush(["target", "_blank"])
    } else {
      tokens[idx].attrs[aIndex][1] = "_blank"
    }

    return render(tokens, idx, options, env, self)
  }
}

/* functions */
export function genMarkdownBody(str, components = {}){
  let mdText = md.render(str)

  mdText = genMarkdownText(mdText, multiExtractWithWord(mdText, '<table>', '</table>', true))

  const res = Vue.compile(`<div>${mdText}</div>`)

  return Vue.component('VueMarkdownBody', {
    components,
    render: res.render,
    staticRenderFns: res.staticRenderFns
  })
}

export function genMarkdownText(str, extracts){
  if( extracts.length <= 0 ) return str

  let forwardText = str.slice(0, extracts[0].startIndex)
  let backText = str.slice(extracts[extracts.length - 1].endIndex, str.length)

  let intermediateTexts = []
  for(let i = 0; i < extracts.length - 1; i++){
    if( extracts[i].endIndex > extracts[i + 1].startIndex ) return

    intermediateTexts.push(str.slice(extracts[i].endIndex, extracts[i + 1].startIndex))
  }

  let j = 0, mdText = '', table = ''
  extracts.forEach(({ text }) => {
    table = `<options-table html="${text}" />`

    mdText = `${mdText}${table}`

    if( intermediateTexts[j] ) mdText = `${mdText}${intermediateTexts[j]}`

    j++
  })

  return `${forwardText}${mdText}${backText}`
}

export function convertTableToObject(html){
  if( !html ) return

  const headers = multiExtractWithWord(html, '<th>', '</th>').map(({ text }) => {
    return {
      text,
      value: text.toLowerCase()
    }
  })

  
  const trLines = multiExtractWithWord(html, '<tr>', '</tr>')

  const items = []

  trLines.forEach(({ text }) => {
    var tds = multiExtractWithWord(text, '<td>', '</td>')

    if( tds.length <= 0 ) return

    var item = {}

    tds.forEach(({ text }, index) => {
      item[headers[index].value] = text
    })

    items.push(item)
  })

  return { headers, items }
}