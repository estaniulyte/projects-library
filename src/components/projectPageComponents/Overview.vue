<template>
  <div>
    <v-row class="ma-2 pb-4 d-flex justify-space-between">
      <v-col :cols="5">
        <v-row class="py-2 subtitle-1 grey--text text--darken-2">
          <v-col class="pa-0">Link</v-col>
        </v-row>
        <v-row>
          <v-col class="pa-0 pr-2">
            <a :href="project.link" target="_blank">Open in {{ setLinkName(project.link) }}</a>
            <v-icon class="ml-2" color="primary" small>
              mdi-open-in-new
            </v-icon>
          </v-col>
        </v-row>
      </v-col>
      <v-col :cols="5">
        <v-row class="py-2 subtitle-1 grey--text text--darken-2">
          Version
        </v-row>
        <v-row>
          <v-col class="pa-0 pr-1">
            {{ project.unityVersion }}
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="2">
        <div v-if="project.projectSize">
          <v-row class="py-2 subtitle-1 grey--text text--darken-2">
            Project size
          </v-row>
          <v-row>
            <v-col class="pa-0 pr-1">
              {{ project.projectSize }}
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <v-row class="ma-2 pb-4 d-flex justify-space-between">
      <v-col :cols="5">
        <v-row class="py-2 subtitle-1">
          <v-col class="pa-0 grey--text text--darken-2">
            Tags
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pa-0 pr-2">
            <v-chip v-for="tag in project.allTags" :key="tag.name" class="black--text mr-1 my-1 defaultChip"
              :class="{ primaryTag: tag.type === 'PrimaryTag' }" pill color="blue-grey" outlined label small>
              {{ tag.name }}
            </v-chip>
          </v-col>
        </v-row>
      </v-col>
      <v-col :cols="5">
        <v-row class="py-2 subtitle-1 grey--text text--darken-2">
          Platform
        </v-row>
        <v-row>
          <v-col class="pa-0 pr-1">
            <v-chip v-for="tag in project.platforms" :key="tag.name" class="black--text mr-1 my-1" pill color="green"
              outlined label small>
              {{ tag.name }}
            </v-chip>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="2">
        <v-row class="py-2 subtitle-1 grey--text text--darken-2">
          Render Pipeline
        </v-row>
        <v-row>
          <v-col class="pa-0 pr-1">
            <v-chip v-for="tag in project.renderPipelines" :key="tag.name" class="black--text mr-1 my-1" pill color="blue"
              outlined label small>
              {{ tag.name }}
            </v-chip>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row v-if="project.description" class="pb-4">
      <v-col cols="12" class="mx-1 description-container">
        <div v-html="markdownToHtml(project.description)" class="description"></div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'

export default {
  name: "ProjectOverview",
  props: {
    project: {}
  },
  methods: {
    setLinkName(link) {
      if (link.includes("github")) {
        return "GitHub";
      }
      else if (link.includes("assetstore")) {
        return "Asset Store";
      }
      else if (link.includes("drive.google")) {
        return "Google Drive";
      }
      else if (link.includes("ono.unity3d")) {
        return "Ono";
      }
      else
        return "Source page";
    },
    markdownToHtml(text) {
      var md = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true
      });
      return (text) ? md.render(text) : ""
    },
  }
}
</script>


<style scoped lang="scss">
.description-container {
  border-radius: 5px;
  margin: 10px;
  background-color: rgb(247, 247, 247);

  .description {
    // white-space: break-spaces;
    width: 90%;
    font-size: 1rem;
    padding: 15px;

    ::v-deep h2 {
      padding: 10px 0 3px 0 !important;
    }

    ::v-deep h3 {
      padding: 7px 0 3px 0 !important;
    }

    ::v-deep h4 {
      padding: 5px 0 2px 0 !important;
    }

    ::v-deep p,
    ::v-deep ul {
      margin: 0px 0px 5px 0px !important;
    }

    ::v-deep img {
      max-height: 300px;
    }
  }
}


.defaultChip {
    color: #455A64 !important;
    border-color: #455A64 !important;
  }

  .primaryTag {
    color: #dd9401 !important;
    border-color: #f0a000 !important;
  }
</style>