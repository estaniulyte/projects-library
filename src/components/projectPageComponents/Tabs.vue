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
    <v-tabs-items v-model="tab">
      <v-tab-item
        value="overview"
      >
        ProjectOverview
      </v-tab-item>
      <v-tab-item
        value="owners"
      >
        ProjectOwners
      </v-tab-item>
      <v-tab-item
        value="tested-versions"
      >
        <ProjectTestedVersions :versions="project.testedVersions" :sourceVersion="project.unityVersion"/>
      </v-tab-item>
      <v-tab-item value="project-bugs">
        ProjectBugs
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import ProjectTestedVersions from '@/components/projectPageComponents/TestedVersions.vue'

export default {
  name: "ProjectTabs",
  props: {
    project: {}
  },
  components: {
    ProjectTestedVersions
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