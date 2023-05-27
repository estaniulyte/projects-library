<template>
  <div>
    <v-row class="ma-2">
      <v-chip
        v-for="item of owners"
        :key="item.name"
        class="black--text mr-2 my-2 py-5 pr-3 pl-5"
        pill
        color="primary"
        outlined
        label
      >
        <v-avatar v-if="item.image"  left size="18" class="mr-3">
          <v-img :src="item.image"></v-img>
        </v-avatar>
        <v-avatar v-else size="18" left class="">
          <v-icon size="35" dark>
            mdi-account-circle
          </v-icon>
        </v-avatar>
        {{ item.name }}
      </v-chip>
      <v-alert
        v-if="!owners.length"
        class="my-2 py-3"
        width="100%"
        icon="mdi-information-variant"
        prominent
        dense
        text
        color="blue-grey darken-1"
      >
        <v-row class="d-flex justify-space-between mx-2">
          <v-col class="d-flex align-center">Project has no owners.</v-col>
          <v-col class="d-flex justify-end">
            <v-btn
              class="px-7 py-5"
              color="primary lighten-1"
              elevation="0"
              small
              @click="setMeAsOwner()"
            >
              Set yourself owner
            </v-btn>
          </v-col>
        </v-row>
      </v-alert>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ProjectOwners",
  props: {
    owners: {
      type: Array,
      default:  () => ([])
    },
    project: {
      type: Object,
      default:  () => ({})
    },
  },
  data: () => ({
  }),
  methods: {
    async setMeAsOwner () {

    },
  }
}
</script>