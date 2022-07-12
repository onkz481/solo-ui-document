### Table

`su-table`コンポーネントは、表形式でデータを表示するために使用します。

<su-divider class="mb-8" />

#### Usage

**headers**、**items** プロパティに指定された値を元に、「table」要素を生成します。

```html
<template>
  <su-table
    :headers="headers"
    :items="items"
  />
</template>
```

```js
<script>
export default {
  data: () => ({
    headers: [
      {
        text: 'header name',
        value: 'name'
      },
      {
        text: 'header value',
        value: 'value'
      }
    ],
    items: [
      {
        name: 'item name 1 <code>code</code>',
        value: 'item value 1'
      },
      {
        name: 'item name 2',
        value: 'item value 2'
      }
    ]
}
</script>
```

#### Options

<sample class="mb-4" />

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|headers|array|[]|ヘッダーのカラムとなる配列のオブジェクトを指定します。|
|hide-footer|boolean|false|テーブルのデフォルトのフッターを非表示にします。|
|hide-table-header|boolean|false|テーブルのデフォルトのヘッダーを非表示にします|
|items|array|[]|テーブルに表示されるアイテムの配列オブジェクトを指定します。|
|itemsPerPage|number|5|ページごとに表示されるアイテムの個数を指定します。|
|options|object|\{\}|現在テーブルの表示に適用されているオプションの値を指定します。`.sync`修飾子を使用することで、常に同期させることが出来ます。|
|page|number|1|表示するページを指定します。|