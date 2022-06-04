### Radio Button

`su-radio`コンポーネントは、単純なラジオボタンとしての機能を提供します。

<su-divider class="mb-8" />

#### 使い方

`su-radio`は、`su-radio-group`と組み合わせて使用できます。`su-radio-group`の**v-model**を使用して、グループ内の選択したラジオボタンにアクセスできます。

<example file='SuRadio/uses' />

#### サンプル

##### プロパティ

###### Row

**row**または**column**プロパティを使用して、ラジオグループの方向を制御できます。デフォルト値は**column**です。

<example file='SuRadio/props/row' />

###### Icon

**on-icon**および**off-icon**を使用して、ラジオボタンのアイコンをカスタマイズできます。

<example file='SuRadio/props/icon' />