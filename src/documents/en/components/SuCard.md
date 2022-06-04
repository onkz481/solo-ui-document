### Card

The `su-card` component is a versatile component that can wrap multiple contents.

<su-divider class="mb-8" />

#### How to Use

`su-card-title`, `su-card-subtitle`, `su-card-content`, `su-card-actions` >> A basic subcomponent of **su-card**.

<example file='SuCard/uses' />

#### Sample

##### Props

###### Color

**color** allows you to color the component with the theme color or any color you like.

<example file='SuCard/props/color' />

###### Outlined

Specifying **outlined** adds a border with the default color or the color specified by **color prop** and makes the background transparent.

<example file='SuCard/props/outlined' />

###### Text

If you specify **text**, the color specified by **color prop** will be applied to the text on the card. It can also be combined with **outlined prop**.

<example file='SuCard/props/text' />