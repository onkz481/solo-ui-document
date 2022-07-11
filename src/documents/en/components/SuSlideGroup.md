### SlideGroup

The `su-slide-group` component sets the scrollable area according to the` su-slide-item`.

<su-divider class = "mb-8" />

#### How to use

The `su-slide-group` component references the` su-slide-item` component and automatically sets the area required for scrolling. The user can move the set area left or right.

<sample />

#### Options

##### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| active-class | string |'su-slide-item--active' | Sets the class name applied when the component is active. |
| next-icon | string |'mdi-chevron-right' | Set the pagetion icon. |
| prev-icon | string |'mdi-chevron-right' | Set the pagination icon. |
| show-arrows | boolean | false | Shows / hides the pagetion icon. |

##### Extends

This component has been extended by the following components: This inherits the options used by the source component.

- [ItemGroup](/components/SuItemGroup)