### TextField

`su-text-field`コンポーネントは、ユーザーが編集可能なテキスト入力フォームを提供します。また、内部で`su-input`コンポーネントを使用しているため、<r-link to="components/SuInput">SuInput</r-link>ドキュメントのプロパティを使用できます。

<su-divider class="mb-8" />

#### 使い方

**label**プロパティは、入力フィールドの役割をユーザーに説明するための良い方法です。

<example file='SuTextField/uses' />

#### サンプル

##### プロパティ

###### Clearable

**clearable**が指定されている場合、すべての入力値を削除するボタンが追加されます。

<example file='SuTextField/props/clearable' />

###### Icon

**prepend-icon**、**append-icon**、**prepend-inner-icon**、および**append-inner-icon**プロパティを使用して、入力フィールドの外側と内側にアイコンを配置できます。

<example file='SuTextField/props/icon' />

###### Label

**label**プロパティを使用して、入力フィールドにラベルを追加できます。

<example file='SuTextField/props/label' />

##### イベント

###### Icon

`click:prepend-inner`、`click:append-inner`、`click:prepend-outer`、`click:append-outer`を使用して、各アイコンのクリックイベントを設定できます。

<example file='SuTextField/events/icon' />