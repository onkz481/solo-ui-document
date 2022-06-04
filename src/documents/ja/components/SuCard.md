### Card

`su-card`コンポーネントは、複数のコンテンツをラッピングできる汎用性の高いコンポーネントです。

<su-divider class="mb-8" />

#### 使い方

`su-card-title`、`su-card-subtitle`、`su-card-content`、`su-card-actions`は、**su-card**の基本的なサブコンポーネントです。

<example file='SuCard/uses' />

#### サンプル

##### プロパティ

###### Color

**color**を指定すると、テーマの色または任意の色でコンポーネントに色を付けることができます。

<example file='SuCard/props/color' />

###### Outlined

**outlined**を指定すると、デフォルトの色、もしくはcolor propで指定された色の境界線が追加され、背景が透明になります。

<example file='SuCard/props/outlined' />

###### Text

**text**を指定すると、**color prop**で指定された色がカードのテキストに適用されます。**outlined prop**と組み合わせることもできます。

<example file='SuCard/props/text' />