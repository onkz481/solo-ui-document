### Menu

The `su-menu` component displays the menu at the specified element position.

<su-divider class = "mb-8" />

#### How to use

It consists of **activator** and **default** slots. Place the trigger element in the **activator** slot.

<sample />

#### Options

##### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| bottom | boolean | false | Places the menu at the bottom of the trigger element. |
| close-on-content-click | boolean | true | Specifies whether to close the menu when the content is clicked. |
| left | boolean | false | Places the menu to the left of the trigger element. |
| offset-x | boolean | false | Offsets the menu on the X-axis. |
| offset-y | boolean | false | Offsets the menu on the Y axis. |
| right | boolean | false | Places the menu to the right of the trigger element. |
| top | boolean | false | Places the menu at the top of the trigger element. |

##### Mixins

This component has the following common properties:

- [Elevatable](/internals/mixins#Elevatable)
- [Transitionable](/internals/mixins#Transitionable)