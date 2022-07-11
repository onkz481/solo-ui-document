### Radio Button

`su-radio`コンポーネントは、単純なラジオボタンとしての機能を提供します。

<su-divider class="mb-8" />

#### 使い方

<sample />

#### Options

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|active-class|string|'su-item--active'|コンポーネントがアクティブ時に適用されるクラス名を設定します。|
|color|string|'primary'||
|label|string|undefined|アイコンの横に表示されるラベルを設定します。|
|off-icon|string|'mdi-radiobox-blank'|非アクティブ時のアイコンを設定します。|
|on-icon|string|'mdi-radiobox-marked'|アクティブ時のアイコンを設定します。|

##### Mixins

このコンポーネントには、以下の共通プロパティがあります。

- [Colorable](/internals/mixins#Colorable)