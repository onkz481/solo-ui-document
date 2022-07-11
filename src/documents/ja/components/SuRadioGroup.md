### Radio Button

`su-radio-group`コンポーネントは、`su-radio`コンポーネントと組み合わせて使用します。

<su-divider class="mb-8" />

#### 使い方

`su-radio-group`の**v-model**を使用して、グループ内の選択したラジオボタンにアクセスできます。

<sample />

#### Options

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|column|boolean|true|ラジオグループの方向を垂直に設定します。|
|row|string|false|ラジオグループの方向を水平に設定します。|

##### Extends

このコンポーネントは、以下コンポーネントによって拡張されています。これにより、拡張元コンポーネントで使用されているオプションが継承されます。

- [Input](/components/SuInput)
- [ItemGroup](/components/SuItemGroup)