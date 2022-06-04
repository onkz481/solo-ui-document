### Transition

It uses Vue's `transition` system to provide the ability to control the behavior of your application.

<su-divider class="mb-8" />

#### How to Use

To apply a custom transition, you need to wrap it with `su-transition` or `su-expand-transition`.

<example file='Transition/uses' />

#### Sample

##### Props

###### Transition

The **transition** property is used to specify the animation.

<example file='Transition/props/transition' />

###### Origin

The **origin** property can be combined with **scale** transitions.

<example file='Transition/props/origin' />

##### Others

###### ExpandX

`su-expand-transition` can be changed to a horizontal animation by specifying the **x** property.

<example file='Transition/others/expandX' />

###### SlideSwitch

`su-slide-switch-transition` is a custom transition that slides multiple contents. It is used for the core of the `su-window` component and is usually recommended to use **su-window**.

<example file='Transition/others/slideSwitch' />