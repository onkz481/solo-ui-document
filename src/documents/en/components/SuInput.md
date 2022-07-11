### Input

`su-input` provides the basic components of a user-customizable input field. It is used as the basis for some components such as `su-text-field` and` su-textarea`.

<su-divider class = "mb-8" />

#### How to use

`su-input` has **prepare**, **append**, messages, and default slots.

<sample />

#### Options

##### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| append-icon | string | undefined | Adds an icon after the input field. |
| color | string |'primary' ||
| hide-details | boolean | false | Sets the icon when the component is active. |
| hint | string | undefined | Add a hint. This helps tell the user how to use the input field. |
| id | string | undefined | Specifies the DOM ID of the component. |
| label | string | undefined | Set the label. |
| prepare-icon | string | undefined | Adds an icon in front of the input field. |

##### Mixins

This component has the following common properties:

- [Colorable](/internals/mixins#Colorable)
- [Themeable](/internals/mixins#Themeable)
- [Validatable](/internals/mixins#Validatable)