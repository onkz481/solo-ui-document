### Input

`su-input`は、ユーザーがカスタマイズ可能な入力フィールドの基本コンポーネントを提供します。 これは、`su-text-field`や`su-textarea`などの一部のコンポーネントの基礎として使用されます。

<su-divider class="mb-8" />

#### Usage

`su-input`には、**prepend**、**append**、メッセージ、およびデフォルトのスロットがあります。

```html
<template>
  <su-input
    prepend-icon="mdi-home"
    append-icon="mdi-home"
    hint="hint"
    :messages="['messages']"
  >
    Default Slot
  </su-input>
</template>
```

#### Options

<sample class="mb-4" />

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|append-icon|string|undefined|入力フィールドの後方にアイコンを追加します。|
|color|string|'primary'||
|hide-details|boolean|false|コンポーネントがアクティブ時のアイコンを設定します。|
|hint|string|undefined|ヒントを追加します。 これは、入力フィールドの使用方法をユーザーに伝えるのに役立ちます。|
|id|string|undefined|コンポーネントのDOM IDを指定します。|
|label|string|undefined|ラベルを設定します。|
|prepend-icon|string|undefined|入力フィールドの前方にアイコンを追加します。|

##### Mixins

このコンポーネントには、以下の共通プロパティがあります。

- [Colorable](../internals/mixins#Colorable)
- [Themeable](../internals/mixins#Themeable)
- [Validatable](../internals/mixins#Validatable)