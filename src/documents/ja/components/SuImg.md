### Image

`su-img`コンポーネントを使用すると、レスポンシブな画像を表示できます。

<su-divider class="mb-8" />

#### 使い方

<sample />

#### Options

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|aspect-ratio|string, number|undefined|アスペクト比を計算式（1920/1080）、又は数値（1.7778）で設定します。|
|contain|boolean|false|画像が枠内に収まらない場合に、トリミングされないようにします。|
|gradient|string|undefined|**linear-gradient** の構文を使用して、画像の上にグラデーションを設定します。|
|position|string|'center center'|背景画像の初期位置を設定します。|
|src|string|undefined|イメージファイルのURLを設定します。|

##### Mixins

このコンポーネントには、以下の共通プロパティがあります。

- [Dimensionable](/internals/mixins#Dimensionable)