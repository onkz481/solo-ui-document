### Icon

`su-icon`コンポーネントは、ページに単一のアイコンを追加する機能を提供します。使用可能なすべてのアイコンについては、公式の [Material Design Icons](https://materialdesignicons.com/) ページをご覧ください。

<su-divider class="mb-8" />

#### 使い方

`su-icon`コンポーネントのデフォルトスロットは、アイコン名を記述します。

<sample />

#### Options

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|disabled|boolean|false|アイコンを無効にします。|
|large|boolean|false|コンポーネントの **Width**、**Height** を「32px」に設定します。|
|small|boolean|false|コンポーネントの **Width**、**Height** を「16px」に設定します。|
|src|string|undefined|イメージファイルのURLを設定することもできます。|

##### Mixins

このコンポーネントには、以下の共通プロパティがあります。

- [Colorable](/internals/mixins#Colorable)
- [Themeable](/internals/mixins#Themeable)