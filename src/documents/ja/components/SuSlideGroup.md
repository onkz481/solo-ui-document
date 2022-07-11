### SlideGroup

`su-slide-group`コンポーネントは、`su-slide-item`に応じて、スクロール可能な領域を設定します。

<su-divider class="mb-8" />

#### 使い方

`su-slide-group`コンポーネントは、`su-slide-item`コンポーネントを参照して、スクロールに必要な領域を自動的に設定します。ユーザーは、設定された領域を左右に移動できます。

<sample />

#### Options

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|active-class|string|'su-slide-item--active'|コンポーネントがアクティブ時に適用されるクラス名を設定します。|
|next-icon|string|'mdi-chevron-right'|ペジネーションアイコンを設定します。|
|prev-icon|string|'mdi-chevron-right'|ペジネーションアイコンを設定します。|
|show-arrows|boolean|false|ペジネーションアイコンの表示・非表示を切り替えます。|

##### Extends

このコンポーネントは、以下コンポーネントによって拡張されています。これにより、拡張元コンポーネントで使用されているオプションが継承されます。

- [ItemGroup](/components/SuItemGroup)