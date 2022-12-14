<template>
  <v-dialog
    v-model="show"
    max-width="650"
  >
    <v-card
      shaped
    >
      <v-container>
        hello
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
    name: "CreateProjectDialog",
    data: () => ({
      
    }),
    props: {
      value: Boolean
    },
    computed: {
      show: {
        get () {
          return this.value
        },
        set (value) {
          this.$emit('input', value)
        }
      },
  }
}
</script>