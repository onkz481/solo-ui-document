### Radio Button

The `su-radio` component provides the function as a simple radio button.

<su-divider class = "mb-8" />

#### How to use

<sample />

#### Options

##### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| active-class | string |'su-item--active' | Sets the class name applied when the component is active. |
| color | string |'primary' ||
| label | string | undefined | Sets the label that appears next to the icon. |
| off-icon | string |'mdi-radiobox-blank' | Set the inactive icon. |
| on-icon | string |'mdi-radiobox-marked' | Set the active icon. |

##### Mixins

This component has the following common properties:

- [Colorable](/internals/mixins#Colorable)