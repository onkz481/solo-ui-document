### Textarea

`su-textarea`コンポーネントは、大量のテキストデータを入力するのに役立ちます。 また、内部で`su-input`コンポーネントを使用しているため、<r-link to="components/SuInput">SuInput</r-link>ドキュメントのプロパティを使用できます。

<su-divider class="mb-8" />

#### 使い方

`su-textarea`コンポーネントは、独立して機能します。

<example file='SuTextarea/uses' />

#### サンプル

##### プロパティ

###### Clearable

**clearable**が指定されている場合、すべての入力値を削除するボタンが追加されます。

<example file='SuTextarea/props/clearable' />

###### Icon

**prepend-icon**、**append-icon**、**prepend-inner-icon**、および**append-inner-icon**プロパティを使用して、入力フィールドの外側と内側にアイコンを配置できます。

<example file='SuTextarea/props/icon' />

###### Label

**label**プロパティを使用して、入力フィールドにラベルを追加できます。

<example file='SuTextarea/props/label' />

##### イベント

###### Icon

`click:prepend-inner`、`click:append-inner`、`click:prepend-outer`、`click:append-outer`を使用して、各アイコンのクリックイベントを設定できます。

<example file='SuTextarea/events/icon' />