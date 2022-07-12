### Image

You can use the `su-img` component to display responsive images.

<su-divider class = "mb-8" />

#### Usage

Displays the image specified by **src** responsively.

```html
<template>
  <su-img
    src="https://cdn.pixabay.com/photo/2022/06/22/16/00/cap-7278216_960_720.jpg"
  />
</template>
```

#### Options

<sample class="mb-4" />

##### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| aspect-ratio | string, number | undefined | Set the aspect ratio with the formula (1920/1080) or numerical value (1.7778). |
| contain | boolean | false | Prevents cropping if the image does not fit within the frame. |
| gradient | string | undefined | Use the **linear-gradient** syntax to set a gradient over the image.|
| position | string |'center center' | Sets the initial position of the background image. |
| src | string | undefined | Set the URL of the image file. |

##### Mixins

This component has the following common properties:

- [Dimensionable](../internals/mixins#Dimensionable)