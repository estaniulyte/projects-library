<template>
  <div class="field">
    <div class="d-flex justify-space-between">
      <div class="caption d-flex align-end">{{ title }}<span v-if="required" class="red--text"> *</span></div>
      <div class=" pb-1 caption grey--text text--darken-1" v-if="additionalInfo">
        <v-btn
          v-for="button in buttons"
          :key="button.name"
          fab
          x-small
          height="25px"
          width="25px"
          elevation="0"
          text
          @click="button.action ? button.action() : () => {}"
        >
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                size="17px"
                color="primary"
                v-bind="attrs"
                v-on="on">
                {{ button.icon }}
              </v-icon>
            </template>
            <span> {{ button.tooltip }} </span>
          </v-tooltip>
        </v-btn>
      </div>
    </div>
    <v-textarea
      v-model="item"
      class="ma-0 pa-1 input px-0"
      :label="label"
      :placeholder="label"
      :rules="rules"
      :required="required"
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
    },
    value: null
  },
  data: function () {
    return {
      buttons: [
        {
          name: 'Markdown Editor',
          icon: 'mdi-text-box-edit-outline',
          tooltip: 'Open Markdown Editor',
          action: () => {
            window.open('https://markdown-it.github.io/', '_blank');
          }
        },
        {
          name: 'Desciption template',
          icon: 'mdi-text-box-plus-outline',
          tooltip: 'Paste Description Template',
          action: () => {
            if (this.item != null)
              this.item = this.item + '\n\n---- Description Template ----' +"\n"+this.template
            else this.item = this.template
          }
        }
      ],
      template: '## Summary \n The project provides a good test environment for evaluating ... \n ## Setup \n To setup project in Unity, open the CornellBox scene... \n ## Use cases: \n * Can be used to test the general game loop... \n * Can be used to verify that... \n ## Manual Testing Scenarios: \n 1. Build the project for any of target... \n 2. Use Main, TextTest scenes... \n ## Automated Testing Scenarios: \n 1. Run builds with: ``` {EDITOR PATH} -projectPath ... ``` \n ## Yamato CI: \n (Is project integrated in any Yamato CI?) If yes: Provide links \n ## Project showcase: \n Screenshots/videos links that showcase the project and its features'
    }
  },
  computed: {
    item: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    },
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

::v-deep .v-textarea textarea{
  line-height: 1rem!important;
}

::v-deep .v-field--error, ::v-deep .error--text {
  background-color: rgb(251, 192, 192);
}
</style>