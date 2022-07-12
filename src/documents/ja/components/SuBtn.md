### Button

`su-btn`コンポーネントは、標準HTMLのボタンを、カスタマイズされたボタンに置き換えます。

<su-divider class="mb-8" />

#### Usage

最も単純なボタンには、大文字のテキストとホバー効果が含まれます。

```html
<template>
  <su-btn>
    Button
  </su-btn>
</template>
```

#### Options

<sample class="mb-4" />

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|disabled|boolean|false|ボタンを無効にします。|
|icon|boolean|false|ボタンが丸いデザインになります。|
|large|boolean|false|コンポーネントの **Width**、**Height** を「28px」に設定します。|
|loading|boolean|false|処理が進行中であることをユーザに知らせます。|
|outlined|boolean|false|デフォルトの色、もしくはcolor propで指定された色の境界線が追加され、背景が透明になり、影が削除されます。|
|rounded|string|'normal'||
|small|boolean|false|コンポーネントの **Width**、**Height** を「44px」に設定します。|
|tag|string|'button'||
|text|boolean|false|背景を削除して、文字に色を適用します。|

##### Mixins

このコンポーネントには、以下の共通プロパティがあります。

- [Colorable](../internals/mixins#Colorable)
- [Dimensionable](../internals/mixins#Dimensionable)
- [Elevatable](../internals/mixins#Elevatable)
- [Roundable](../internals/mixins#Roundable)
- [Themeable](../internals/mixins#Themeable)