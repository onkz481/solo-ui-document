### Banner

`su-banner`コンポーネントは、重要で簡潔なメッセージを表示し、ユーザーがアクションを実行できるようにします。

<su-divider class="mb-8" />

#### Usage

**icon** スロットは、バナーに任意のアイコンを表示できます。
**actions** スロットは、ボタンを表示して何らかのアクションをユーザに促す際に使用できます。

```html
<template>
  <su-banner>
    <template #icon>
      <su-icon>
        mdi-information-outline
      </su-icon>
    </template>

    This sentence is a dummy. It is included to check the size, amount, character spacing, line spacing, etc. of characters.

    <template #actions>
      <su-btn
        text
      >
        action1
      </su-btn>
      
      <su-btn
        text
      >
        action2
      </su-btn>
    </template>
  </su-banner>
</template>
```

#### Options

<sample class="mb-4" />

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|single-line|boolean|false|1行より長いメッセージを省略します。|

##### Extends

このコンポーネントは、以下コンポーネントによって拡張されています。これにより、拡張元コンポーネントで使用されているオプションが継承されます。

- [Sheet](../components/SuSheet)

#### Slots

|Name|Description|
|----|-----------|
|icon|`su-icon`コンポーネントを使用して、任意のアイコンを追加できます。|
|actions|`su-btn`コンポーネントを使用して、任意のボタンを追加できます。|