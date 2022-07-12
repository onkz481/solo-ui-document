### Radio Button

`su-radio`コンポーネントは、単純なラジオボタンとしての機能を提供します。

<su-divider class="mb-8" />

#### Usage

通常、`su-radio` は `su-radio-group` と組み合わせて使用します。

- [SuRadioGroup](./SuRadioGroup)

#### Options

<sample class="mb-4" />

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

- [Colorable](../internals/mixins#Colorable)