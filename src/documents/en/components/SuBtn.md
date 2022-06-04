### Button

The `su-btn` component replaces standard HTML buttons with customized buttons.

<su-divider class="mb-8" />

#### How to Use

The simplest buttons include uppercase text and hover effects.

<example file='SuBtn/uses' />

#### Sample

##### Props

###### Color

**color** allows you to color the component with the theme color or any color you like.

<example file='SuBtn/props/color' />

###### Outlined

Specifying **outlined** adds a border of the default color or the color specified by **color prop**, makes the background transparent, and removes shadows.

<example file='SuBtn/props/outlined' />

###### Text

You can specify **text** to implement a button without a background. When used with **color prop**, the specified color will be applied to the button text.

<example file='SuBtn/props/text' />

###### Loading

**loading prop** is great for letting users know that processing is in progress.

<example file='SuBtn/props/loading' />

###### Icon

If you specify **icon** prop, the button will have a round design.

<example file='SuBtn/props/icon' />