### Window

You can use the `su-window` component to switch between multiple wrapped `su-window-item` components.

<su-divider class = "mb-8" />

#### How to use

<sample />

#### Options

##### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| continuing | boolean | false | Transitions from the first item to the last item and from the last item to the first item. |
| next-icon | string | undefined | Sets the pagetion icon. |
| prev-icon | string | undefined | Sets the pagetion icon. |
| show-arrows | boolean | false | Shows / hides the pagetion icon. |
| vertical | boolean | false | Makes the transition direction vertical. |

##### Extends

This component has been extended by the following components: This inherits the options used by the source component.

- [ItemGroup](/components/SuItemGroup)