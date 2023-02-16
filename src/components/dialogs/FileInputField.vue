<template>
  <div class="field">
    <div class="d-flex justify-space-between">
      <div class="caption">{{ title }}<span v-if="required" class="red--text"> *</span></div>
      <div class="caption grey--text text--darken-1">
       {{ additionalInfo }}
      </div>
    </div>
    <v-file-input
      class="ma-0 pa-1 input px-0"
      prepend-icon=""
      accept="image/png, image/jpeg"
      hide-details
      height="60px"
      single-line
      justify-sm
      rounded
      clearable
      show-size
    >
      <template v-slot:label>
        <div>
          <v-btn
            color="white"
            fab
            elevation="0"
            x-small
          >
            <v-icon color="primary">
              mdi-plus
            </v-icon>
          </v-btn>
        </div>
        <div class="pl-2 grey--text text--darken-2">Click to select image</div>
      </template>
      <!-- <template v-slot:selection="{ fileNames }">
        add chip
      </template> -->
    </v-file-input>
  </div>
</template>

<script>
export default {
  name: "FileInputField",
  props: {
    title: String,
    label: String,
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
}

::v-deep .v-label {
  font-size: small!important;
}

.field {
  width: 100%;
}
::v-deep .v-text-field__slot label {
  height: 40px!important;
  width: 100%;
  transform: translateY(-10px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>