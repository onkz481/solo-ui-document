### Card

`su-card`コンポーネントは、複数のコンテンツをラッピングできる汎用性の高いコンポーネントです。

<su-divider class="mb-8" />

#### Usage

`su-card-title`、`su-card-subtitle`、`su-card-content`、`su-card-actions`は、**su-card**の基本的なサブコンポーネントです。

```html
<template>
  <su-card>
    <su-card-title>Card Title</su-card-title>

    <su-card-subtitle>Card Sub Title</su-card-subtitle>

    <su-card-content>Card Content</su-card-content>

    <su-card-actions>
      <su-btn>
        action 1
      </su-btn>
    </su-card-actions>
  </su-card>
</template>
```

<sample class="mb-4" />

#### Options

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|rounded|string|'normal'||

##### Extends

このコンポーネントは、以下コンポーネントによって拡張されています。これにより、拡張元コンポーネントで使用されているオプションが継承されます。

- [Sheet](../components/SuSheet)