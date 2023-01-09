<template>
  <div>
    <v-row class="pt-5">
      <v-col>
        <v-tabs
          v-model="tab"
          class="d-flex project-tab"
        >
          <v-tab
            v-for="item of projectTabs"
            :key="item.link"
            class="project-tab"
            :href="item.link"
          >
            {{ item.name }}
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ProjectTabs",
  props: {
    project: {}
  },
  data: () => ({
    tab: "#overview",
    projectTabs: [
      {
        name: "Overview",
        link: "#overview"
      },
      {
        name: "Owners",
        link: "#owners"
      },
      {
        name: "Tested versions",
        link: "#tested-versions"
      },
      {
        name: "Project bugs",
        link: "#project-bugs"
      },
    ]
  })
}
</script>