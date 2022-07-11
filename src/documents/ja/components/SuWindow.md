### Window

`su-window`コンポーネントを使用して、ラップされた複数の`su-window-item`コンポーネントを切り替えることが出来ます。

<su-divider class="mb-8" />

#### 使い方

<sample />

#### Options

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|continuing|boolean|false|最初のアイテムから最後のアイテムに、また最後のアイテムから最初のアイテムに遷移します。|
|next-icon|string|undefined|ペジネーションアイコンを設定します。|
|prev-icon|string|undefined|ペジネーションアイコンを設定します。|
|show-arrows|boolean|false|ペジネーションアイコンの表示・非表示を切り替えます。|
|vertical|boolean|false|遷移する方向を縦にします。|

##### Extends

このコンポーネントは、以下コンポーネントによって拡張されています。これにより、拡張元コンポーネントで使用されているオプションが継承されます。

- [ItemGroup](/components/SuItemGroup)