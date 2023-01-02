<template>
  <v-data-table
    class="pt-6"
    :items="projects"
    :headers="headers"
    :items-per-page="15"
    :disable-sort="true"
  >
    <template
      v-slot:[`item.imageLink`]="{ item }"
    >
      <v-img
        class="table-img"
        :src="item.imageLink"
        max-width="140"
      />
    </template>
    <template
      v-slot:[`item.name`]="{ item }"
    >
      <router-link
        :to="`/project/${item.id}`"
      >
        {{ item.name }}
      </router-link>
    </template>
    <template
      v-slot:[`item.link`]="{ item }"
    >
      <a
        :href="item.link"
        target="_blank"
      >
        {{ setLinkName(item.link) }}
      </a>
    </template>
    <template
      v-slot:[`item.tags`]="{ item }"
    >
      <v-chip-group
        column
      >
        <v-chip
          class="defaultChip"
          v-for="tag, i in item.allTags"
          :class="{ renderPipeline: tag.type === 'RenderPipeline', primaryTag: tag.type === 'PrimaryTag' }"
          :key="i"
          pill
          label
          x-small
        >
          {{ tag.name }}
        </v-chip>
      </v-chip-group>
    </template>
    <template
      v-slot:[`item.platforms`]="{ item }"
    >
      <v-chip-group
        column
      >
        <v-chip
          v-for="platform in item.platforms"
          :key="platform.id"
          pill
          label
          color="grey lighten-2"
          x-small
        >
          {{ platform.name }}
        </v-chip>
      </v-chip-group>
    </template>
    <template
      v-slot:[`item.verifiedVersions`]="{ item }"
    >
      <v-chip-group
        column
      >
        <v-chip
          v-for="version in item.verifiedVersions"
          :key="version.id"
          pill
          label
          color="grey lighten-2"
          x-small
        >
          {{ version.name }}
        </v-chip>
      </v-chip-group>
    </template>
  </v-data-table>
</template>

<script>
export default {
    name: "ProjectsTable",
    props: {
      projects: {
        type: Array,
        default: null
      }
    },
    data: () => ({
      headers: [
        { text: '', value: 'imageLink' },
        { text: 'Name', value: 'name' },
        { text: 'Link', value: 'link' },
        { text: 'Tags', value: 'tags'},
        { text: 'Platform', value: 'platforms' },
        { text: 'Verified versions', value: 'verifiedVersions' },
      ],
    }),
    methods: {
      setLinkName(link) {
        if (link.includes("github")) {
          return "GitHub link";
        }
        else if (link.includes("assetstore")) {
          return "Asset Store link";
        }
        else if (link.includes("drive.google")) {
          return "Google Drive link";
        }
        else
          return "Source link";
      },
    }
  }
</script>

<style lang="scss" scoped>

.table-img {
 object-fit: cover;
 height: 70px;
}

.defaultChip{
  background-color:rgb(223, 223, 223)!important;
}
.renderPipeline {
  background-color:#c6e4f1!important;
}
.primaryTag {
  background-color:#d5f3de!important;
}
</style>