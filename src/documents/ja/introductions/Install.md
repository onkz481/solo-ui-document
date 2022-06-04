### インストール

##### Vue CLI インストール

プロジェクトがまだ作成されていない場合は、次のコマンドを実行してプロジェクトを作成します。 コマンドを実行した後、画面の指示に従ってください。

```shell-session
$ vue create project-name
```

プロジェクトを作成したら、`npm`を使用してSoloUIをインストールします。

```shell-session
$ npm i @onkz481/solo-ui
```

以下の内容でSoloUIプラグインファイルを作成します（ファイルの作成場所は一例です）。

```js
// src/plugins/soloui.js

import Vue from 'vue'
import SoloUi from '@onkz481/solo-ui'
import '@onkz481/solo-ui/dist/solo-ui.min.css'

Vue.use(SoloUi)

const opts = {}

export default new SoloUi(opts)
```

メインのエントリポイントに移動し、Vueをインスタンス化するときにオプションとしてSoloUIオブジェクトを渡します。

```js
// src/main.js

import Vue from 'vue'
import soloui from './plugins/soloui'

...

new Vue({
  soloui,
  ...
}).$mount('#app')
```