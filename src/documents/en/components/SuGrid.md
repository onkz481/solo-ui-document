### Grid layout

**flex-box**を使用したグリッドレイアウトを提供します。

<su-divider class="mb-8" />

#### 使い方

SoloUIグリッドレイアウトは、主に`su-container`、`su-row`、`su-col`コンポーネントで構成されています。

<example file='SuGrid/uses1' />

`su-spacer`コンポーネントを使用して、残りの幅を親コンポーネントと子コンポーネントの間で分散させることができます。 たとえば、子コンポーネントの前後に`su-spacer`を配置して、子コンポーネントを左または右に移動できます。

<example file='SuGrid/uses2' />

#### コンポーネント

##### SuContainer

`su-container`は、コンテンツを中央に配置する機能を提供します。

##### SuRow

`su-row`は、`su-col`のラッパーコンポーネントです。これは、内部の列のレイアウトを制御します。

##### SuCol

`su-col`は、flex-boxで構成されるレイアウトのコンテンツを保持する要素です。`su-row`の子要素である必要があります。

#### サンプル

##### プロパティ

###### Align

**align**または**align-self**プロパティを使用して、垂直方向の配置を変更できます。

<example file='SuGrid/props/align' />

###### Justify

**justify**プロパティを使用して、水平方向の配置を変更できます。

<example file='SuGrid/props/justify' />

###### NoGutters

**no-gutters**プロパティを使用して、子要素の`su-col`コンポーネントからパディングを削除できます。

<example file='SuGrid/props/noGutters' />