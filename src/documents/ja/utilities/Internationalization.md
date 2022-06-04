### 国際化 (i18n)

SoloUIで実装されるコンポーネントは、言語国際化(i18n)をサポートします。インスタンス生成時、currentオプションでアクティブなロケールを指定できます。

<su-divider class="mb-8" />

#### 使い方

現在のロケールを設定するには、SoloUIをインストールするときにlangオプションを指定します。 指定しない場合、ブラウザのデフォルト設定が使用されます。

SoloUIは現在、次の言語での翻訳を提供しています。

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

#### 翻訳の作成

SoloUIに独自の翻訳を追加する場合は、以下のコードを使用してください。また、SoloUIの翻訳は自動的に継承されますが、独自の翻訳で上書きすることができます。

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

#### インスタンスメソッド

作成された翻訳を使用するために、インスタンスメソッド`$soloui.lang.t`が提供されています。

```html
<!-- src/components/my-component.vue -->

<template>
  <p v-text="$soloui.lang.t('key-1')">
  <p v-text="$soloui.lang.t('key-3.deep-1')">
</template>
```