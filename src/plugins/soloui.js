import Vue from 'vue'
import SoloUi from '@onkz481/solo-ui'
import '@onkz481/solo-ui/dist/solo-ui.min.css'

import locales from '/src/locales'

Vue.use(SoloUi)

const opts = {
  lang: {
    current: 'ja',
    locales: locales
  }
}

export default new SoloUi(opts)