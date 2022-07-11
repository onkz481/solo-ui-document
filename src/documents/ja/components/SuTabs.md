### Tabs

`su-tabs`コンポーネントは、表示領域の内容を切り替えるためのナビゲーションとして使用できます。

<su-divider class="mb-8" />

#### 使い方

<sample />

#### Options

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|active-class|string|'su-tab--active'|コンポーネントがアクティブ時に適用されるクラス名を設定します。|
|color|string|'primary'|指定された色をコンポーネントに適用します。|
|hide-slider|boolean|false|スライダーを非表示にします。|
|shrink|boolean|false|`su-tab`の幅を縮小します。|
|slider-color|string|'primary'|スライダーの色を設定します。|
|slider-size|number|2|スライダーの高さを設定します。|

##### Mixins

このコンポーネントには、以下の共通プロパティがあります。

- [Colorable](/internals/mixins#Colorable)
- [Roundable](/internals/mixins#Roundable)