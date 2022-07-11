### Tabs

The `su-tabs` component can be used as a navigation to switch the contents of the display area.

<su-divider class = "mb-8" />

#### How to use

<sample />

#### Options

##### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| active-class | string |'su-tab--active' | Sets the class name applied when the component is active. |
| color | string |'primary' | Applies the specified color to the component. |
| hide-slider | boolean | false | Hides the slider. |
| shrink | boolean | false | Reduces the width of `su-tab`. |
| slider-color | string |'primary' | Sets the color of the slider. |
| slider-size | number | 2 | Sets the height of the slider. |

##### Mixins

This component has the following common properties:

- [Colorable](/internals/mixins#Colorable)
- [Roundable](/internals/mixins#Roundable)