<template>
  <div class="field">
    <div class="caption">{{ title }}<span v-if="required" class="red--text"> *</span></div>
    <v-text-field
      v-model="name"
      class="ma-0 pa-1 input px-0"
      :label="label"
      :placeholder="label"
      :rules="nameRules"
      required
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
    label: String,
    required: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      name: "",
      nameRules: [
        v => !!v || 'E-mail is required',
      ]
    }
  }
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

.field {
  width: 100%;
}

</style>