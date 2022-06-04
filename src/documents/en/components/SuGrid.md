### Grid layout

Provides a grid layout using **flex-box**.

<su-divider class="mb-8" />

#### How to Use

The SoloUI grid layout mainly consists of `su-container` `su-row` `su-col` components.

<example file='SuGrid/uses1' />

You can use the `su-spacer` component to distribute the remaining width between parent and child components. For example, you can place a `su-spacer` before or after a child component to move the child component to the left or right.

<example file='SuGrid/uses2' />

#### Components

##### SuContainer

`su-container` provides the ability to center the content.

##### SuRow

`su-row` is a wrapper component for `su-col`. This controls the layout of the columns inside.

##### SuCol

`su-col` is the element that holds the content of the layout consisting of flex-box. Must be a child element of `su-row`.

#### Sample

##### Props

###### Align

You can change the vertical alignment by using the **align** or **align-self** properties.

<example file='SuGrid/props/align' />

###### Justify

You can change the horizontal alignment using the **justify** property.

<example file='SuGrid/props/justify' />

###### NoGutters

You can use the **no-gutters** property to remove the padding from the `su-col` component of the child element.

<example file='SuGrid/props/noGutters' />