<template>
  <div>
    <HomeAppBar />
    <div v-if="project" class="project-content">
      <ProjectBanner :project="project" />
      <ProjectTabs :project="project" />
      <ProjectComments :comments="project.comments" />
    </div>
  </div>
</template>

<script>
import HomeAppBar from '@/components/HomeAppBar.vue'
import ProjectBanner from '@/components/projectPageComponents/Banner.vue'
import ProjectTabs from '@/components/projectPageComponents/Tabs.vue'
import ProjectComments from '@/components/projectPageComponents/Comments.vue'

import projectsData from "@/assets/data/projects_detailed.json"

export default {
  name: "ProjectPage",
  data: () => ({
    project: {},
    projects: projectsData
  }),
  components: {
    HomeAppBar,
    ProjectBanner,
    ProjectTabs,
    ProjectComments
  },
  created() {
    this.project = this.projects.find((e) => e.id === this.$route.params.id)
    this.project = {
      ...this.project,
      allTags: [
        ...this.project.primaryTags.map(
          (item) => ({
            ...item,
            type: "PrimaryTag"
          })
        ),
        ...this.project.tags]
    }
    console.log(this.project)
  },
}
</script>

<style scoped lang="scss">
.project-content {
  max-width: 1500px;
  // max-width: 1200px;
  margin: auto;
}
</style>