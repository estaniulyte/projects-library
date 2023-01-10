<template>
  <div>
    <v-row class="ma-2">
      <v-alert
        v-if="!bugs.length"
        class="my-2 py-3"
        width="100%"
        icon="mdi-information-variant"
        prominent
        dense
        text
        color="blue-grey darken-1"
      >
        <v-row class="d-flex justify-space-between mx-2">
          <v-col class="d-flex align-center">Project has no reported bugs.</v-col>
          <v-col class="d-flex justify-end">
            <v-btn
              class="px-7 py-5"
              color="primary lighten-1"
              elevation="0"
              small
            >
              Sumbit bug
            </v-btn>
          </v-col>
        </v-row>
      </v-alert>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: "ProjectBugs",
    props: {
      bugs: {}
    },
    data: () => ({
    })
  }
</script>