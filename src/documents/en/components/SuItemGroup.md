### ItemGroup

`su-item-group` creates a group of selectable items.

<su-divider class = "mb-8" />

#### How to use

`su-item-group` can use` su-item` on its child components to monitor selected items.

<sample />

#### Options

##### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| active-class | string |'su-item--active' | Sets the CSS class applied to the active item. |
| mandatory | boolean | false | Forces item selection. |
| multiple | boolean | false | Allows selection of multiple items. |