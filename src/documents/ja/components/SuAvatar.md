### Avatar

`su-avatar`コンポーネントは、円形の画像を表示するのに適しています。 アイコンやテキストを表示したり、提供されているプロパティを使用してサイズや形状を変更したりすることもできます。

<su-divider class="mb-8" />

#### 使い方

`su-avatar`コンポーネントは、デフォルトのスロットに`img`、`su-icon`、またはテキストを使用できます。

<sample />

#### Options

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|size|number|48|コンポーネントのサイズを指定します。|

##### Mixins

このコンポーネントには、以下の共通プロパティがあります。

- [Colorable](/internals/mixins#Colorable)
- [Roundable](/internals/mixins#Roundable)