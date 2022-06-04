import Vue from 'vue'

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

    token.attrs = tmpAttrs

    return render(tokens, idx, options, env, self)
  }
}

// code要素を独自コンポーネントに変更
function mdCode(md){
  md.renderer.rules.fence = (tokens, idx) => {
    let token = tokens[idx],
        content = escapeHtml(token.content)

    return `<su-code class="mb-4" code="${content}" :languages="['${token.info}']" lang="${token.info}" rounded="normal" />`
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
  const mdText = md.render(str)
  const res = Vue.compile(`<div>${mdText}</div>`)

  return Vue.component('vueMarkdownBody', {
    components,
    render: res.render,
    staticRenderFns: res.staticRenderFns
  })
}