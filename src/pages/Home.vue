<template>
	<div>
    <HomeAppBar />
    <v-container>
      <v-row class="d-flex justify-space-between">
        <h1 class="pl-2">Projects</h1>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
	</div>
</template>

<script>
import HomeAppBar from "../components/HomeAppBar.vue";

export default {
    name: "HomePage",
    data: () => ({}),
    components: { HomeAppBar }
}
</script>

<style scoped>
</style>