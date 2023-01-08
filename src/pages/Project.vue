<template>
  <div>
    <HomeAppBar />
    <div v-if="project">
      <ProjectBanner :project="project" />
    </div>
  </div>
</template>

<script>
import HomeAppBar from '@/components/HomeAppBar.vue'
import ProjectBanner from '@/components/projectPageComponents/Banner.vue'

import projectsData from "@/assets/data/projects_detailed.json"

export default {
    name: "ProjectPage",
    data: () => ({
      project: {},
      projects: projectsData
    }),
    components: { 
      HomeAppBar,
      ProjectBanner
    },
    created () {
      this.project = this.projects.find((e) => e.id === this.$route.params.id)
    },
}
</script>

<style scoped lang="scss">

</style>