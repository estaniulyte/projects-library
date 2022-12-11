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
    <div class="mx-1 mx-sm-2 mx-md-10 px-5">
      <v-row class="d-flex justify-center">
          <h1 class="mt-3">Projects</h1>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="4"
          md="3"
          lg="2"
          xl="1"
          class="px-0"
        >
          <v-autocomplete
            v-model="selected"
            :items="orderBy"
            outlined
            dense
          />
        </v-col>
        <v-spacer />
        <v-col
          cols="12"
          sm="3"
          md="3"
          lg="2"
          xl="1"
          class="d-flex justify-end px-0"
        >
          <v-btn
            outlined
            class="filter-btn"
            :class="{'grey lighten-3': expand}"
            @click="expand = !expand"

          >
          <v-icon class="pr-2" size="20">
            mdi-filter-variant
          </v-icon>
            Filters
          </v-btn>
        </v-col>
      </v-row>
      <v-expand-transition>
        <v-row v-show="expand">
          <FilterField title="Tags" :properties="tag" />
          <FilterField title="Render Pipeline" :properties="renderPipeline" />
          <FilterField title="Platform" :properties="platform" :selectedItems="selectedPlatforms"/>
          <FilterField title="Unity Tech Steam" :properties="unityStream" />
        </v-row>
      </v-expand-transition>
    </div>
	</div>
</template>

<script>
import HomeAppBar from "../components/HomeAppBar.vue";
import FilterField from "@/components/FilterField.vue"

export default {
    name: "HomePage",
    data: () => ({
      orderBy: ['Most recent', 'Oldest', 'My projects', 'Favorite', 'Popular', 'Recommended'],
      selected: 'Most recent',
      expand: false,
      searchInput:'',
    }),
    components: {
      HomeAppBar,
      FilterField
    }
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
  box-shadow: 0px 8px 20px rgb(0 0 0 / 10%);
  border-radius: 8px;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.2);
  }
}

.filter-btn {
  text-transform: capitalize;
  font-size: inherit;
  width: 115px;
  box-sizing: border-box;
  border:1px solid #9e9e9e;
  color: #212121;
  font-weight: 400;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
}
</style>