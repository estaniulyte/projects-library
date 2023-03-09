<template>
  <div class="field">
    <div class="d-flex justify-space-between">
      <div class="caption d-flex align-end">{{ title }}<span v-if="required" class="red--text"> *</span></div>
      <div class=" pb-1 caption grey--text text--darken-1" v-if="additionalInfo">
       <!-- {{ additionalInfo }} -->
       <v-btn fab x-small height="25px" width="25px" elevation="0" text>
        <v-icon size="17px" color="primary">mdi-text-box-edit-outline</v-icon>
       </v-btn>
       <v-btn class="ml-1" fab x-small height="25px" width="25px" elevation="0" text>
        <v-icon size="17px" color="primary">mdi-text-box-plus-outline</v-icon>
       </v-btn>
      </div>
    </div>
    <v-textarea
      class="ma-0 pa-1 input px-0"
      :label="label"
      :placeholder="label"
      :rules="rules"
      rows="3"
      hide-details
      single-line
      justify-sm
      rounded
      auto-grow
      clearable
    />
  </div>
</template>

<script>
export default {
  name: "TextAreaField",
  props: {
    title: String,
    label: String,
    rules: [],
    additionalInfo: String,
    required: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style lang="scss" scoped>

.input {
  background-color: rgba(231, 238, 233, 0.625);
  border-radius: 6px;
  font-size: small;
  line-height: 0.1rem!important;
}

::v-deep .v-input__slot {
  padding: 2px 15px!important;
}

::v-deep .v-label {
  font-size: small!important;
}

.field {
  width: 100%;
}

::v-deep .v-textarea textarea{
  line-height: 1rem!important;
}
</style>