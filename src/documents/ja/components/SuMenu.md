### Menu

`su-menu`コンポーネントは、指定された要素位置にメニューを表示します。

<su-divider class="mb-8" />

#### 使い方

これは、**activator**と**default**スロットで構成されています。トリガー要素を**activator**スロットに配置します。

<example file='SuMenu/uses' />

#### サンプル

##### プロパティ

###### OffsetX

メニューをX軸でオフセットします。**left**、**right**プロパティを使用して、オフセット方向を指定できます。

<example file='SuMenu/props/offsetX' />

###### OffsetY

メニューをY軸でオフセットします。**top**、**bottom**プロパティを使用して、オフセット方向を指定できます。

<example file='SuMenu/props/offsetY' />

###### CloseOnContentClick

**close-on-content-click**プロパティは、コンテンツがクリックされたときにメニューを閉じるかどうかを指定します。デフォルト値は`true`です。

<example file='SuMenu/props/closeOnContentClick' />