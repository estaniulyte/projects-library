<template>
  <v-dialog
    v-model="show"
    :max-width="options.width"
    @keydown.esc="cancel"
  >
    <v-card>
      <v-container class="pa-4 px-4">
        <v-card-title class="pb-0">{{ title }}</v-card-title>
        <v-card-text
          v-show="!!message"
          class="pt-3 black--text"
          v-html="message"
        ></v-card-text>
        <div class="d-flex flex-row justify-end px-4 pb-2 pt-2">
          <v-btn
            v-if="!options.noconfirm"
            text
            small
            class="mr-3 px-6 py-5 grey--text text--darken-1"
            elevation="0"
            @click.native="cancel"
          >
            Cancel
          </v-btn>
          <v-btn
            color="red"
            small
            class="px-6 py-5 white--text"
            elevation="0"
            @click.native="agree"
          >
            Delete
          </v-btn>
        </div>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ConfirmDialog",
  data: () => ({
    show: false,
    resolve: null,
    reject: null,
    message: null,
    title: null,
    options: {
      width: 400,
      noconfirm: false,
    },
  }),
  methods: {
    open(title, message, options) {
      this.show = true;
      this.title = title;
      this.message = message;
      this.options = Object.assign(this.options, options);
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    agree() {
      this.resolve(true);
      this.show = false;
    },
    cancel() {
      this.resolve(false);
      this.show = false;
    },
  },
}
</script>