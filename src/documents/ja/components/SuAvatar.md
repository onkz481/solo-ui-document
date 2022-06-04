### Avatar

`su-avatar`コンポーネントは、円形の画像を表示するのに適しています。 アイコンやテキストを表示したり、提供されているプロパティを使用してサイズや形状を変更したりすることもできます。

<su-divider class="mb-8" />

#### 使い方

`su-avatar`コンポーネントは、デフォルトのスロットに`img`、`su-icon`、またはテキストを使用できます。

<example file='SuAvatar/uses' />

#### サンプル

##### プロパティ

###### Size

**size**プロパティを使用すると、`su-avatar`の高さと幅を設定できます。 これらは、**width**または**height**プロパティで上書きできます。

<example file='SuAvatar/props/size' />

###### Tile

**tile**プロパティを使用して、アバターから**border radius**を削除できます。

<example file='SuAvatar/props/tile' />

#### その他

##### Use

###### 他のコンポーネントと組み合わせる

`su-avatar`はいくつかのコンポーネントと組み合わせることができます。

<example file='SuAvatar/others/use' />