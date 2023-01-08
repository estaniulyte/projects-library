<template>
  <div>
    <HomeAppBar />
  </div>
</template>

<script>
import HomeAppBar from '@/components/HomeAppBar.vue';
import projectsData from "@/assets/data/projects_detailed.json"

export default {
    name: "ProjectPage",
    components: { HomeAppBar }
    data: () => ({
      project: {},
      projects: projectsData
    }),
    created () {
      this.project = this.projects.find((e) => e.id === this.$route.params.id)
    },
}
</script>

<style scoped lang="scss">

</style>