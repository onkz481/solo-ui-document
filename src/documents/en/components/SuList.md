### List

The `su-list` component is suitable for displaying multiple pieces of information in list format.

<su-divider class="mb-8" />

#### How to Use

All items must be wrapped in the `su-list-item`, `su-list-item-content` components.

<example file='SuList/uses1' />

The `su-list-item-icon` component adds a [icon](https://materialdesignicons.com/) to the item.

<example file='SuList/uses2' />

#### Sample

##### Props

###### Link

Specifies that the item is a link. This is automatically applied when you specify **to prop**.

<example file='SuList/props/link' />

###### Shrink

Specifying **shrink** reduces the width of `su-list-item`.

<example file='SuList/props/shrink' />

#### Others

##### Multiline

The `su-list-item` component supports layouts of up to 3 rows by specifying **two-line** and **three-line** properties.

<example file='SuList/others/multiline' />

##### Subgroup

You can use the `su-list-group` component to include the item group that is displayed when you click it. The parent item is specified in the `activator` slot.

<example file='SuList/others/subgroup' />