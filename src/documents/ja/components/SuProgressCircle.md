### ProgressCircle

`su-progress-circle`コンポーネントは、処理の進捗状況をユーザに視覚的に伝えることのできる、環状のプログレスバーです。

<su-divider class="mb-8" />

#### 使い方

<sample />

#### Options

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|background-color|string|undefined|背景の色を指定します。|
|background-opacity|number|0.3|背景の透過度を指定します。|
|color|string|'primary'|指定された色を適用します。|
|indeterminate|boolean|false|常にアニメーションを行うようになります。進捗状況が不明な場合などに使用します。|
|indeterminate-bezier|string|'cubic-bezier(0.65, 0, 0.35, 1)'|アニメーションの動きを3次ベジェ曲線で指定できます。**indeterminate** propが有効の場合に反映されます。|
|indeterminate-dasharray|number|undefined|バーの最小サイズを指定します。**indeterminate** propが有効の場合に反映されます。|
|indeterminate-duration|number|2|バーの回転速度を指定します。**indeterminate** propが有効の場合に反映されます。|
|linecap|string|undefined|コンポーネントに、**stroke-linecap: round** を追加します。**indeterminate** propが有効の場合に反映されます。|
|rotate|number|0|バーの始点を指定します。|
|size|number|36|コンポーネントのサイズを指定します。|
|width|number|4|バーの幅を指定します。|

##### Slots

|Name|Props|Description|
|----|-----|-----------|
|default|&#123; value, color &#125;|`value`の値は、`v-model`に指定された変数の値を受け取ります。**indeterminate** propが有効の場合は、常に'*indeterminate*'文字列を返します。|