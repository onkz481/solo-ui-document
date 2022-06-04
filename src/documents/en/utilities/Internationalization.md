### Internationalization (i18n)

The components implemented in SoloUI support language internationalization (i18n). When instantiating, you can specify the active locale with the `current` option.

<su-divider class="mb-8" />

#### How to Use

To set the current locale, specify the `lang` option when installing SoloUI. If not specified, the browser default settings will be used.

SoloUI currently offers translations in the following languages:

- en - English {.ml-4}
- ja - Japanese (日本語) {.ml-4}

<br>

```js
// src/plugins/soloui.js

import Vue from 'vue'
import SoloUi from 'solo-ui'
import 'solo-ui/dist/solo-ui.min.css'

Vue.use(SoloUi)

const opts = {}

export default new SoloUi(opts)
```

#### Creating a translation

If you want to add your own translation to SoloUI, use the code below. Also, SoloUI translations are automatically inherited, but you can overwrite them with your own translations.

```js
// src/locales/en/index.js

export default {
  'key-1': 'key 1 text',
  'key-2': 'key 2 text',
  'key-3': {
    'deep-1': 'deep 1 text'
  }
}
```

```js
// src/plugins/soloui.js

import Vue from 'vue'
import SoloUi from 'solo-ui'

Vue.use(SoloUi)

import en from 'src/locales/en'

const opts = {
  ...
  lang: {
    ...
    locales: {
      en: en
    }
  }
}

export default new SoloUi(opts)
```

#### Instance method

An instance method `$soloui.lang.t` is provided to use the created translation.

```html
<!-- src/components/my-component.vue -->

<template>
  <p v-text="$soloui.lang.t('key-1')">
  <p v-text="$soloui.lang.t('key-3.deep-1')">
</template>
```