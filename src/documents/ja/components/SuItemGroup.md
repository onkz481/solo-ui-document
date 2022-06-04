### ItemGroup

`su-item-group`は、選択可能なアイテムのグループを作成します。

<su-divider class="mb-8" />

#### 使い方

`su-item-group`は、子コンポーネントに `su-item`を使用して、選択したアイテムを監視できます。

<example file='SuItemGroup/uses' />

#### サンプル

##### プロパティ

###### ActiveClass

**active-class**プロパティを使用すると、アクティブなアイテムに適用されるCSSクラスを指定できます。

<example file='SuItemGroup/props/activeClass' />

###### Multiple

**multiple**プロパティを使用すると、複数のアイテムを選択できます。

<example file='SuItemGroup/props/multiple' />

###### Mandatory

**mandatory**プロパティを使用すると、アイテムの選択を強制します。

<example file='SuItemGroup/props/mandatory' />