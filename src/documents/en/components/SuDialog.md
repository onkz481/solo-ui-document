### Dialog

The `su-dialog` component provides a pop-up window feature that appears at the front of the page.

<su-divider class = "mb-8" />

#### How to use

It consists of **activator** and **default** slots. Place the trigger element in the **activator** slot.

<sample />

#### Options

##### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| fullscreen | boolean | false | The pop-up window expands to fill the entire display area of the browser. |
| max-width | number | undefined | Sets the maximum width of the dialog. |
| value | boolean | false | Shows / hides the dialog. |
| width | number | undefined | Sets the width of the dialog. |

##### Mixins

This component has the following common properties:

- [Overlayable](/internals/mixins#Overlayable)
- [Transitionable](/internals/mixins#Transitionable)