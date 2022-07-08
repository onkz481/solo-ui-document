### Progress

`su-progress`コンポーネントは、処理の進捗状況をユーザに伝える機能の作成に使用できます。

<su-divider class="mb-8" />

#### 使い方

<sample />

#### Options

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|background-color|string|undefined|背景の色を指定します。|
|background-opacity|string, number|0.3|背景の透過度を指定します。|
|color|string|'primary'|指定された色を適用します。|
|indeterminate|boolean|false|`true`の場合、default スロットで渡される`value`の値が、文字列 '*indeterminate*' に固定されます。|

##### Slots

|Name|Props|Description|
|----|-----|-----------|
|default|&#123; value, color &#125;|`value`の値は、`v-model`に指定された変数の値を受け取ります。`indeterminate`propが有効の場合は、常に'*indeterminate*'文字列を返します。|