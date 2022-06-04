### Application

`su-app` is a component for loading the settings required for many components of SoloUI. Most SoloUI components need to be used inside the `su-app`.

<su-divider class="mb-8" />

#### How to Use

The `su-header`, `su-nav`, and `su-main` components are provided to make layout easier.

```html
<template>
  <su-app>
    <su-header>
      <!-- -->
    </su-header>

    <su-nav>
      <!-- -->
    </su-nav>

    <su-main>
      <!-- -->

      <!-- vue-router -->
      <router-view />
    </su-main>
  </su-app>
</template>
```

#### Components

##### Header

Provides a header component that is always placed at the top of the application.

##### Nav

Place the navigation on the left side of the application. The navigation drawer automatically switches depending on the screen size.

##### Main

Provides an area to display the main content.

#### Layout

The layout service is used to control the layout of SoloUI. Users can access the properties of the service as needed.

```js
{
  header: {
    width: Number
  },
  nav: {
    gutterWidth: Number,
    width: Number
  },
  main: {
    width: Number,
    centerWidth: Number,
    rightWidth: Number
  },
  mobile: Boolean,
  narrow: Boolean,
}
```

These values are accessed using the **$soloui.layout** property.

```js
console.log(this.$soloui.layout)
```