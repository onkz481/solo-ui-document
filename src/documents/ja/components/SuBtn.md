### Button

`su-btn`コンポーネントは、標準HTMLのボタンを、カスタマイズされたボタンに置き換えます。

<su-divider class="mb-8" />

#### 使い方

最も単純なボタンには、大文字のテキストとホバー効果が含まれます。

<example file='SuBtn/uses' />

#### サンプル

##### プロパティ

###### Color

**color**を指定すると、テーマの色または任意の色でコンポーネントに色を付けることができます。

<example file='SuBtn/props/color' />

###### Outlined

**outlined**を指定すると、デフォルトの色、もしくはcolor propで指定された色の境界線が追加され、背景が透明になり、影が削除されます。

<example file='SuBtn/props/outlined' />

###### Text

**text**を指定すると、背景のないボタンを実装できます。**color prop**と一緒に使用すると、指定した色がボタンのテキストに適用されます。

<example file='SuBtn/props/text' />

###### Loading

**loading prop**は、処理が進行中であることをユーザーへ知らせるのに最適です。

<example file='SuBtn/props/loading' />

###### Icon

**icon prop**を指定すると、ボタンが丸いデザインになります。

<example file='SuBtn/props/icon' />