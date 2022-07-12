### Button

The `su-btn` component replaces a standard HTML button with a customized button.

<su-divider class="mb-8" />

#### Usage

The simplest button contains uppercase text and a hover effect.

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
|disabled|boolean|false|Disable the button. |
|icon|boolean|false|Buttons will have a round design. |
|large|boolean|false|Set the **Width** and **Height** of the component to "28px". |
|loading|boolean|false|Tell the user that processing is in progress. |
|outlined|boolean|false|Adds a border in the default color or the color specified in the color prop, makes the background transparent, and removes the shadow. |
|rounded|string|'normal'||
|small|boolean|false|Set the **Width** and **Height** of the component to "44px". |
|tag|string|'button'||
|text|boolean|false|Remove background and apply color to text. ||

##### Mixins

This component has the following common properties

- [Colorable](../internals/mixins#Colorable)
- [Dimensionable](../internals/mixins#Dimensionable)
- [Elevatable](../internals/mixins#Elevatable)
- [Roundable](../internals/mixins#Roundable)
- [Themeable](../internals/mixins#Themeable)