<template>
  <div class="">
    <div class="caption">{{ title }}</div>
    <v-text-field
      class="ma-0 pa-1 input px-0"
      :label="label"
      hide-details
      single-line
      justify-sm
      rounded
      clearable
    />
  </div>
</template>

<script>
export default {
  name: "TextInputField",
  props: {
    title: String,
    label: String
  },
}
</script>

<style lang="scss" scoped>

.input {
  background-color: rgba(231, 238, 233, 0.625);
  border-radius: 6px;
  font-size: small;
}

::v-deep .v-input__slot {
  padding: 2px 15px!important;
}

::v-deep .v-label {
  font-size: small!important;
}

</style>