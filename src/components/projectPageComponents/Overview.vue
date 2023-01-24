<template>
  <div>
    <v-row class="ma-2 pb-4 d-flex justify-space-between">
      <v-col :cols="5">
        <v-row class="py-2 subtitle-1 grey--text text--darken-2">
          <v-col class="pa-0">Link</v-col>
        </v-row>
        <v-row>
          <v-col class="pa-0 pr-2">
            <a :href="project.link" target="_blank">Open in {{ setLinkName(project.link)}}</a>
            <v-icon class="ml-2" color="primary" small>
              mdi-open-in-new
            </v-icon>
          </v-col>
        </v-row>
      </v-col>
      <v-col :cols="5">
        <v-row class="py-2 subtitle-1 grey--text text--darken-2">
          Version
        </v-row>
        <v-row>
          <v-col class="pa-0 pr-1">
            {{ project.unityVersion }}
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="2">
        <div v-if="project.projectSize">
          <v-row class="py-2 subtitle-1 grey--text text--darken-2">
            Project size
          </v-row>
          <v-row>
            <v-col class="pa-0 pr-1">
              {{ project.projectSize }}
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ProjectOverview",
  props: {
    project: {}
  },
  methods: {
    setLinkName(link) {
      if (link.includes("github")) {
        return "GitHub";
      }
      else if (link.includes("assetstore")) {
        return "Asset Store";
      }
      else if (link.includes("drive.google")) {
        return "Google Drive";
      }
      else if (link.includes("ono.unity3d")) {
        return "Ono";
      }
      else
        return "Source page";
    },
  }
}
</script>