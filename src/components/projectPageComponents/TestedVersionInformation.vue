<template>
  <v-dialog v-model="show" max-width="500">
    <v-card
      class="mx-auto pa-0 pa-sm-2"
      :class="{ pass: item.status === 'PASS', fail: item.status === 'ISSUES',  partly: item.status === 'WORKS_PARTLY'}"
      dark
      max-width="500"
    >
    <v-card-title class="px-4">
      <v-icon
        large
        left
      >
        mdi-unity
      </v-icon>
      <span class="text-h6 font-weight-light">{{item.fullVersion}}</span>
    </v-card-title>
    <v-card-text class="text-h5 font-weight-bold py-3">
      <span v-if="item.notes">{{ item.notes }}</span>
      <span v-else> {{ setMessage(item.status)}} </span>
    </v-card-text>


    <v-card-actions v-if="item.user">
      <v-list-item class="px-0">
        <v-list-item-avatar color="grey darken-3" v-if="item.user.slackPicture">
          <v-img
            class="elevation-6"
            alt=""
            :src="item.user.slackPicture"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ item.user.name }}</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
          class="px-0 mx-0"
        >
          {{ item.created | moment('from', 'now') }}
        </v-row>
      </v-list-item>
    </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "TestedVersionInformation",
  props: {
    value: Boolean,
    item: {}
  },
  data: () => ({
  }),
  computed: {
    show: {
      get () {
        return this.value
      },
      set (value) {
         this.$emit('input', value)
      }
    }
  },
  methods: {
    setMessage (status) {
      switch (status) {
        case 'PASS':
          return "No issues observed."
        case 'ISSUES':
          return "Has troubling issues."
        case 'WORKS_PARTLY':
          return "Some issues observed."
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pass {
  background-color:#388E3C!important;
}

.fail {
  background-color:#C62828!important;
}

.partly {
  background-color: #f0a000!important;
}
</style>