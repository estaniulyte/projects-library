<template>
	<div class="mb-7">
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
      <v-row class="d-flex justify-center py-sm-4 title">
          <h1 class="mt-3">Projects</h1>
      </v-row>
      <v-row class="px-sm-4">
        <v-col
          cols="12"
          sm="4"
          md="3"
          lg="2"
          xl="1"
          class="px-0"
        >
          <v-autocomplete
            v-model="selectedOrder"
            class="sortField"
            :items="orderBy"
            outlined
            dense
          />
        </v-col>
        <v-spacer />
        <v-col
          cols="12"
          sm="5"
          md="5"
          lg="4"
          xl="2"
        >
          <v-tabs
            v-model="tab"
            class="d-flex justify-center"
          >
            <v-tab
              href="#card-view"
            >
              <v-icon size="19" class="mr-1">
                mdi-view-grid-outline
              </v-icon>
              Card view
            </v-tab>
            <v-tab
              href="#table-view"
            >
              <v-icon size="24" class="mr-1">
                mdi-view-list-outline
              </v-icon>
              Table view
            </v-tab>
          </v-tabs>
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
          <FilterField title="Tags" :properties="tags" v-model="selectedTags" />
          <FilterField title="Render Pipeline" :properties="renderPipelines" v-model="selectedRenderPipelines" />
          <FilterField title="Platform" :properties="platforms" v-model="selectedPlatforms" />
          <FilterField title="Unity Tech Steam" :properties="unityStreams" v-model="selectedStreams" />
        </v-row>
      </v-expand-transition>
      <v-tabs-items v-model="tab">
        <v-tab-item
          value="card-view"
        >
          <v-row class="pa-0 mt-5">
            <v-col
              v-for="project in filteredProjects"
              :key="project.id"
              class="pa-0 px-0 pa-sm-4 py-2"
              cols="12"
              xl="2"
              lg="3"
              md="6"
              sm="6"
            >
              <ProjectCard :project="project" @clickedTag="(i) => sortClickedTag(i)" />
            </v-col>
            <v-col
              class="d-flex flex-column justify-space-between align-center pt-10"
              v-if="filteredProjects.length === 0"
            >
              <v-img
                max-width="450"
                class="align-center"
                :src="require(`@/assets/images/notFound.svg`)"
              />
              <div
                class="message-text font-weight-light pt-9"
              >
                No matching projects found
              </div>
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item
          value="table-view"
        >
          <ProjectsTable :projects="filteredProjects" @filterBy="(i) => sortClickedTag(i)" />
        </v-tab-item>
      </v-tabs-items>
    </div>
	</div>
</template>

<script>
import HomeAppBar from "../components/HomeAppBar.vue"
import ProjectsTable from "../components/ProjectsTable.vue"
import FilterField from "@/components/FilterField.vue"
import ProjectCard from "@/components/ProjectCard.vue"

import tagsData from "@/assets/data/tags.json"
import platformsData from "@/assets/data/platforms.json"
import renderPipelinesData from "@/assets/data/renderPipelines.json"
import streamsData from "@/assets/data/streams.json"
import projectsData from "@/assets/data/projects_main.json"

export default {
  name: "HomePage",
  data: () => ({
    orderBy: ['Most recent', 'Oldest', 'My projects', 'Favorite', 'Popular', 'Recommended'],
    selectedOrder: 'Most recent',
    expand: false,
    searchInput:'',
    tab: 'card-view',
    tags: tagsData,
    platforms: platformsData,
    renderPipelines: renderPipelinesData,
    unityStreams: streamsData,
    projects: projectsData,
    selectedTags: [],
    selectedRenderPipelines: [],
    selectedPlatforms: [],
    selectedStreams: [],
  }),
  components: {
    HomeAppBar,
    FilterField,
    ProjectCard,
    ProjectsTable
  },
  computed: {
    filteredProjects: function() {
      let tempProjects = this.projects

      // add allTags and verifiedVersions properties, sort by most recent
      tempProjects = tempProjects
      .map(
        (item) => ({
          ...item,
          allTags: [
            ...item.renderPipelines.map(
              (item) => ({
                ...item,
                type: "RenderPipeline"
              })
            ),
            ...item.primaryTags.map(
              (item) => ({
                ...item,
                type: "PrimaryTag"
              })
            ),
            ...item.tags,
          ],
          verifiedVersions: [
            item.unityStreamVersion,
            ...item.testedVersions
              .filter (
                (prop) => {
                  if (prop.status === 'PASS')
                  return prop
                }
              )
              .map (
                (prop) => {
                  return prop.stream
                }
              )
          ]
          .map(
            (item) => ({
              ...item,
              metadata: item.name
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
        })
      )

      // Search input
      if (this.searchInput != '' && this.searchInput) {
        tempProjects = tempProjects
          .filter(project => {
            return Object.values(this._.pickBy(project, this._.isString)).some(prop => prop.toLowerCase().includes(this.searchInput.toLowerCase()))
        })
      }
      
      // Filter by tags
      return tempProjects
        .filter(project => {
          return this._.every(this.selectedTags, tag => {
            return (project.allTags || []).map(selectedTag => selectedTag.id).includes(tag.id)
          })
        })
        .filter(project => {
          return this._.every(this.selectedRenderPipelines, tag => {
            return (project.allTags || []).map(selectedTag => selectedTag.id).includes(tag.id)
          })
        })
        .filter(project => {
          return this._.every(this.selectedPlatforms, tag => {
            return (project.platforms || []).map(selectedTag => selectedTag.id).includes(tag.id)
          })
        })
        .filter(project => {
          return this._.every(this.selectedStreams, tag => {
            return (project.verifiedVersions || []).map(selectedTag => selectedTag.id).includes(tag.id)
          })
        })
    },
  },
  methods: {
    sortClickedTag(tag) {
      if(!this.expand) this.expand = true 

      switch (tag.__typename) {
        case 'Tag':
          if(!this._.some(this.selectedTags, tag)) this.selectedTags.push(tag)
          break;
        case 'Platform':
          if(!this._.some(this.selectedPlatforms, tag)) this.selectedPlatforms.push(tag)
          break;
        case 'RenderPipeline':
          if(!this._.some(this.selectedRenderPipelines, tag)) this.selectedRenderPipelines.push(tag)
          break;
        case 'UnityStream':
          if(!this._.some(this.selectedStreams, tag)) this.selectedStreams.push(tag)
          break;
      }
    }
  },
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

.v-tab {
  font-size: small;
}

.title {
  font-size: 20px;
}

.message-text {
  font-size: 1.5rem!important;
}
</style>