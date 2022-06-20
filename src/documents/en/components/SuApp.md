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

      <template #narrow>
        <!-- -->
      </template>

      <template #mobile>
        <!-- -->
      </template>
    </su-nav>

    <su-main>
      <!-- -->

      <!-- vue-router -->
      <router-view />

      <template #right>
        <!-- -->
      </template>
    </su-main>
  </su-app>
</template>
```

#### Components

##### Header

Provides a header component that is always placed at the top of the application.

##### Nav

Place the navigation on the left side of the application. Switch between 3 slots according to screen size.

* If the width of the display area is greater than **1280px**: `default`
* If the width of the display area is greater than **720px** and less than **1280px**: `narrow`
* If the width of the display area is **720px** or less: `mobile`

※These are the thresholds when the Solo UI options are the default.{.error--text}

##### Main

Provides an area to display the main content. You can also use the `right` slot to create a widget area to the right of the display area.

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