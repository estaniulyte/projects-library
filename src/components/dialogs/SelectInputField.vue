<template>
  <div class="field">
    <div class="caption">{{ title }}<span v-if="required" class="red--text"> *</span></div>
    <v-autocomplete
      class="ma-0 pa-1 input px-0"
      v-model="selectedItems"
      :label="label"
      :items="items"
      :placeholder="label"
      :required="required"
      :rules="rules"
      :loading="loading"
      item-value="id"
      item-text="name"
      hide-details
      single-line
      justify-sm
      rounded
      dense
      clearable
      chips
      deletable-chips
      small
      :multiple="multiple"
    >
      <template v-slot:selection="data">
        <v-chip
          class="--spacing"
          color="primary lighten-3"
          :small="!data.item.slackPicture"
          close
          @click:close="remove(data.item)"
        >
          <v-avatar v-if="data.item.slackPicture" left>
            <v-img :src="data.item.slackPicture"></v-img>
          </v-avatar>
          {{ data.item.name }}
        </v-chip>
      </template>
      <template v-slot:item="data">
          <v-list-item-avatar v-if="data.item.slackPicture">
            <img :src="data.item.slackPicture">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-html="data.item.name"></v-list-item-title>
          </v-list-item-content>
        </template> 
    </v-autocomplete>
  </div>
</template>

<script>
export default {
  name: "SelectInputField",
  props: {
    title: String,
    label: String,
    loading: Boolean,
    items: {
      type: Array,
      default:  () => ([])
    },
    required: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: true
    },
    rules: [],
    value: {
      type: [Array, Number, String],
      default:  () => ([])
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
  methods: {
    remove (item) {
      if (Array.isArray(this.selectedItems)) {
        const index = this.selectedItems.indexOf(item.id)
        if (index >= 0) this.selectedItems.splice(index, 1)
      }
      else this.selectedItems = null
    },
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

.--spacing {
  margin: 2px!important;
}

::v-deep .v-select.v-select--chips.v-input--dense .v-select__selections {
  min-height: 32px;
}

::v-deep .v-field--error, ::v-deep .error--text {
  background-color: rgb(251, 192, 192);
}

</style>