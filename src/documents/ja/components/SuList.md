### List

`su-list`コンポーネントは、複数の情報をリスト形式で表示するのに適しています。

<su-divider class="mb-8" />

#### Usage

以下の関連コンポーネントを持ちます。

- su-list-item
- su-list-item-avatar
- su-list-item-content
- su-list-item-icon
- su-list-item-overline
- su-list-item-subtitle
- su-list-item-title

<br />

```html
<template>
  <su-list>
    <su-list-item
      three-line
    >
      <su-list-item-avatar
        color="primary"
      >
        TE
      </su-list-item-avatar>

      <su-list-item-content>
        <su-list-item-title>Title</su-list-item-title>

        <su-list-item-subtitle>SubTitle</su-list-item-subtitle>

        <su-list-item-subtitle>SubTitle</su-list-item-subtitle>
      </su-list-item-content>

      <su-list-item-icon>
        <su-icon>mdi-square</su-icon>
      </su-list-item-icon>
    </su-list-item>
  </su-list>
</template>
```

#### Options

<sample class="mb-4" />

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|shrink|boolean|false|`su-list-item`の幅を縮小します。|

##### Extends

このコンポーネントは、以下コンポーネントによって拡張されています。これにより、拡張元コンポーネントで使用されているオプションが継承されます。

- [Sheet](../components/SuSheet)