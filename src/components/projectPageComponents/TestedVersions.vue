<template>
  <div>
    <div class="d-flex">
      <v-row class="ma-2 d-flex align-center">
        <v-chip
          class="mr-2 my-2 py-5 px-3 white--text"
          :v-if="versions"
          v-for="item of sortedVersions"
          :key="item.id"
          @click="showItemInfo(item)"
          :class="{ pass: item.status === 'PASS', fail: item.status === 'ISSUES',  partly: item.status === 'WORKS_PARTLY'}"
          label
        >
          {{ item.fullVersion }}
        </v-chip>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-btn fab elevation="0" small v-bind="attrs" v-on="on" color="primary" class="mx-2">
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
export default {
  name: "ProjectTestedVersions",
  props: {
    versions: {},
    sourceVersion: {},
  },
  computed: {
    sortedVersions: function() {
      let tempVersions = this.versions
        .map(
          (item) =>({
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
  background-color:#68a76b!important;
}

.fail {
  background-color:#C62828!important;
}

.partly {
  background-color: #f0a000!important;
}
</style>