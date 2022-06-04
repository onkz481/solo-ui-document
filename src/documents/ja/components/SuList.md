### List

`su-list`コンポーネントは、複数の情報をリスト形式で表示するのに適しています。

<su-divider class="mb-8" />

#### 使い方

全てのアイテムは`su-list-item`、`su-list-item-content`コンポーネントでラッピングされる必要があります。

<example file='SuList/uses1' />

`su-list-item-icon`コンポーネントは、アイテムに[アイコン](https://materialdesignicons.com/)を追加します。

<example file='SuList/uses2' />

#### サンプル

##### プロパティ

###### Link

アイテムがリンクであることを指定します。これは、**to prop**を指定すると自動的に適用されます。

<example file='SuList/props/link' />

###### Shrink

**shrink**を指定すると、`su-list-item`の幅を縮小します。

<example file='SuList/props/shrink' />

#### その他

##### Multiline

`su-list-item`コンポーネントは、**two-line**および**three-line**プロパティを指定することにより、最大3行のレイアウトをサポートします。

<example file='SuList/others/multiline' />

##### Subgroup

`su-list-group`コンポーネントを使用すると、クリックしたときに表示されるアイテムグループを含めることができます。 親アイテムは、**activator**スロットで指定されます。

<example file='SuList/others/subgroup' />