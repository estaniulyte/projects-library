<template>
  <div>
    <div class="d-flex">
      <TestedVersionInformation v-model="showInformation" :item="clickedItem" />
      <NewTestedVersionDialog v-model="addVersion" :projectId="projectId" />
      <v-row class="ma-2 d-flex align-center">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-chip class="mr-2 my-2 py-5 px-3" v-if="sourceVersion" label v-bind="attrs" v-on="on">
              {{ sourceVersion }}
            </v-chip>
          </template>
          <span>Project version in source</span>
        </v-tooltip>
        <v-chip class="mr-2 my-2 py-5 px-3 white--text" :v-if="versions" v-for="item of sortedVersions" :key="item.id"
          @click="showItemInfo(item)"
          :class="{ pass: item.status === 'PASS', fail: item.status === 'ISSUES', partly: item.status === 'WORKS_PARTLY' }"
          label>
          {{ item.fullVersion }}
        </v-chip>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-btn @click="addVersion = true" fab elevation="0" small v-bind="attrs" v-on="on" color="primary"
              class="mx-2">
              <v-icon size="26" color="white">
                mdi-plus
              </v-icon>
            </v-btn>
          </template>
          <span>Add tested version</span>
        </v-tooltip>
      </v-row>
    </div>
  </div>
</template>

<script>
import TestedVersionInformation from '@/components/projectPageComponents/TestedVersionInformation.vue'
import NewTestedVersionDialog from "@/components/projectPageComponents/TestedVersionDialog.vue"

export default {
  name: "ProjectTestedVersions",
  components: {
    TestedVersionInformation,
    NewTestedVersionDialog
  },
  props: {
    versions: {},
    sourceVersion: {},
  },
  data: () => ({
    showInformation: false,
    clickedItem: {},
    addVersion: false,
  }),
  methods: {
    showItemInfo(item) {
      this.clickedItem = item
      this.showInformation = true
    }
  },
  computed: {
    sortedVersions: function () {
      let tempVersions = this.versions
        .map(
          (item) => ({
            ...item,
            metadata: item.fullVersion
              .split('.')
              .map(
                (number) => {
                  return parseInt(number)
                }
              )
          })
        )
        .sort(
          (a, b) => {
            return a.metadata[0] - b.metadata[0] || a.metadata[1] - b.metadata[1]
          }
        )
        .reverse()
      return tempVersions
    }
  }
}
</script>

<style lang="scss" scoped>
.pass {
  background-color: #68a76b !important;
}

.fail {
  background-color: #C62828 !important;
}

.partly {
  background-color: #f0a000 !important;
}
</style>