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
        v-model="selectedProperties"
        :items="properties"
        class="transition-swing py-2 lol"
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
    }
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
</style>