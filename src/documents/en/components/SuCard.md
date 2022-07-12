### Card

The `su-card` component is a versatile component that can wrap multiple contents.

<su-divider class="mb-8" />

#### Usage

`su-card-title`, `su-card-subtitle`, `su-card-content`, and `su-card-actions` are the basic subcomponents of **su-card**.

```html
<template>
  <su-card>
    <su-card-title>Card Title</su-card-title>

    <su-card-subtitle>Card Sub Title</su-card-subtitle>

    <su-card-content>Card Content</su-card-content>

    <su-card-actions>
      <su-btn>
        action 1
      </su-btn>
    </su-card-actions>
  </su-card>
</template>
```

<sample class="mb-4" />

#### Options

##### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| rounded | string |'normal' ||

##### Extends

This component has been extended by the following components: This inherits the options used by the source component.

- [Sheet](../components/SuSheet)