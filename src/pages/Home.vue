<template>
	<div>
    <HomeAppBar />
    <div class="background-bar" />
    <v-row class="d-flex justify-center">
      <div class="search-box mx-6">
        <v-text-field
          v-model="searchInput"
          prepend-inner-icon="mdi-magnify"
          class="transition-swing ma-0 pa-0"
          label="Search..."
          hide-details
          single-line
          justify-sm
          rounded
          clearable
        />
      </div>
    </v-row>
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

<style lang="scss" scoped>
.background-bar {
  max-width: 100%;
  min-width: 0px;
  width: 100%;
  height: 80px;
  background: #f3f3f4;
  display: block;
}

.search-box {
  display: flex;
  width: 630px;
  height: 64px;
  position: relative;
  background-color: white;
  transform: translateY(-20px);
  z-index: 2;
  align-items: center;
  box-shadow: 0px 8px 20px rgb(0 0 0 / 6%);
  border-radius: 8px;
}
</style>