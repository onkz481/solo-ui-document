<template>
  <su-header>
    <su-btn
      v-if="hasNav && $soloui.layout.mobile"
      icon
      text
      @click.stop="onClick"
    >
      <su-icon>mdi-menu</su-icon>
    </su-btn>

    <su-header-title
      to="/"
    >
      <su-icon
        :src="require('@/assets/img/logo.png')"
      />

      Solo UI
    </su-header-title>

    <su-spacer />

    <su-btn
      icon
      text
      to="https://github.com/onkz481/solo-ui"
      target="_blank"
    >
      <su-icon>mdi-github</su-icon>
    </su-btn>

    <su-menu
      offset-y
    >
      <template v-slot:activator="{ on }">
        <su-btn
          icon
          text
          v-on="on"
        >
          <su-icon>mdi-translate</su-icon>
        </su-btn>
      </template>

      <su-card>
        <su-list>
          <su-list-item
            link
            @click="$soloui.lang.current = 'en'"
          >
            <su-list-item-content>
              <su-list-item-title>
                English
              </su-list-item-title>
            </su-list-item-content>
          </su-list-item>

          <su-list-item
            link
            @click="$soloui.lang.current = 'ja'"
          >
            <su-list-item-content>
              <su-list-item-title>
                日本語
              </su-list-item-title>
            </su-list-item-content>
          </su-list-item>
        </su-list>
      </su-card>
    </su-menu>
  </su-header>
</template>

<script>
export default {
  name: 'Header',
  inject: ['hasNav'],
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick(){
      this.$emit('input', !this.value)
    }
  }
}
</script>