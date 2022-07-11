### Menu

`su-menu`コンポーネントは、指定された要素位置にメニューを表示します。

<su-divider class="mb-8" />

#### 使い方

これは、**activator**と**default**スロットで構成されています。トリガー要素を**activator**スロットに配置します。

<sample />

#### Options

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|bottom|boolean|false|メニューをトリガー要素の下部に配置します。|
|close-on-content-click|boolean|true|コンテンツがクリックされたときにメニューを閉じるかどうかを指定します。|
|left|boolean|false|メニューをトリガー要素の左に配置します。|
|offset-x|boolean|false|メニューをX軸でオフセットします。|
|offset-y|boolean|false|メニューをY軸でオフセットします。|
|right|boolean|false|メニューをトリガー要素の右に配置します。|
|top|boolean|false|メニューをトリガー要素の上部に配置します。|

##### Mixins

このコンポーネントには、以下の共通プロパティがあります。

- [Elevatable](/internals/mixins#Elevatable)
- [Transitionable](/internals/mixins#Transitionable)