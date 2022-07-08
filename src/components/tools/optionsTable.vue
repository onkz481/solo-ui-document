<template>
  <su-card
    elevation="0"
    outlined
  >
    <su-table
      :headers="headers"
      :items="items"
      :items-per-page="-1"
      hide-footer
    />
  </su-card>
</template>

<script>
import { convertTableToObject } from '../../util/markdown'

export default {
  name: 'OptionsTable',
  props: {
    html: {
      type: String,
      default: undefined
    }
  },
  data: () => ({
    headers: [],
    items: []
  }),
  mounted(){
    const tableState = convertTableToObject(this.html)

    this.headers = tableState.headers
    this.items = tableState.items
  },
  methods: {
    convertTableToObject
  }
}
</script>