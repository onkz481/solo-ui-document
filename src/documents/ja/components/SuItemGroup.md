### ItemGroup

`su-item-group`は、選択可能なアイテムのグループを作成します。

<su-divider class="mb-8" />

#### 使い方

`su-item-group`は、子コンポーネントに `su-item` を使用して、選択したアイテムを監視できます。

<sample />

#### Options

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|active-class|string|'su-item--active'|アクティブなアイテムに適用されるCSSクラスを設定します。|
|mandatory|boolean|false|アイテムの選択を強制します。|
|multiple|boolean|false|複数アイテムの選択を許可します。|