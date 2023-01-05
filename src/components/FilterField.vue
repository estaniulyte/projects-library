<template>
  <v-col
    class="px-3 px-sm-7"
    cols="12"
    xl="3"
    lg="3"
    md="6"
    sm="6"
  >
    <v-row class="font-weight-medium">
      {{ title }}
    </v-row>
    <v-row>
      <v-autocomplete
        :items="properties"
        v-model="selectedItems"
        class="transition-swing py-2 field"
        filled
        item-value="id"
        item-text="name"
        multiple
        small-chips
        return-object
        hide-selected
        deletable-chips
        outlined
        dense
        hide-details
      />
    </v-row>
  </v-col>
</template>

<script>

export default {
	name: "FilterField",
  props: {
    properties: {
      type: Array,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    value: {
      type: Array,
      default: () => ([])
    },
  },
  computed: {
    selectedItems: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    },
  },
	data: () => ({
	})
}
</script>

<style lang="scss" scoped>
::v-deep .theme--light.v-text-field--filled > .v-input__control > .v-input__slot{
  background: rgba(0, 0, 0, 0.03);
  padding: 4px 0x;
}

::v-deep .theme--light.v-chip:not(.v-chip--active) {
  background: #e1e8e5;
  margin: 4px;
}

::v-deep.v-responsive__sizer {
  display: grid;
  column-gap: 2rem !important;
}

.field {
  z-index: 20;
}
</style>