### Progress

`su-progress-line`コンポーネントは、処理の進捗状況をユーザに視覚的に伝えることのできる、水平方向のプログレスバーです。

<su-divider class="mb-8" />

#### 使い方

<sample />

#### Options

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|absolute|boolean|false|コンポーネントに **position: absolute** を追加します。|
|active|boolean|true|コンポーネントの表示・非表示を切り替えます。|
|background-color|string|undefined|背景の色を指定します。|
|background-opacity|number|0.3|背景の透過度を指定します。|
|bottom|boolean|false|コンポーネントを下部に配置します。これは、**absolute** プロパティが`true`の場合に有効です。|
|color|string|'primary'|指定された色を適用します。|
|height|number|4|コンポーネントの高さを指定します。|
|indeterminate|boolean|false|常にアニメーションを行うようになります。進捗状況が不明な場合などに使用します。|
|reverse|boolean|false|バーの進行方向を逆に表示します。|
|rounded|string|undefined|コンポーネントに **border-radius** を追加します。|
|tile|boolean|false|コンポーネントに **border-radius: 0px** を追加します。これは、**rounded** プロパティに指定された値よりも優先されます。|

##### Slots

|Name|Props|Description|
|----|-----|-----------|
|default|&#123; value, color &#125;|`value`の値は、`v-model`に指定された変数の値を受け取ります。`indeterminate`propが有効の場合は、常に'*indeterminate*'文字列を返します。|