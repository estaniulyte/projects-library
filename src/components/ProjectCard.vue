<template>
  <v-card
    class="project-card"
    flat
    outlined
    min-height="455px"
  >
    <article class="parent-container">
      <div class="content-wrapper">
        <div class="image-wrapper">
            <img :src="project.imageLink" alt="projectImage" />
        </div>
        <div class="text-wrapper">
          <router-link
            class="d-flex align-end pb-1"
            :to="`/project/${project.id}`"
          >
            <blockquote class="pl-4 ma-0 pb-3 title d-flex align-center">
              {{ project.name }}
            </blockquote>
          </router-link>
          <v-spacer />
          <div class="mr-2 mb-2 d-flex align-end">
            <v-tooltip bottom>
              <template #activator="{ on, attrs }">
                <v-btn fab elevation="0" small class="ma-1 card-action-btn" :href="project.link" target="_blank" v-bind="attrs" v-on="on">
                  <v-icon size="26">
                    {{ setLinkIcon(project.link) }}
                  </v-icon>
                </v-btn>
              </template>
              <span>Open project source</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template #activator="{ on, attrs }">
                <v-btn fab elevation="0" small class="ma-1 card-action-btn" @click="copyLink(project.link)" v-bind="attrs" v-on="on">
                  <v-icon size="19">
                    mdi-content-copy
                  </v-icon>
                </v-btn>
              </template>
              <span>Copy link to clipboard</span>
            </v-tooltip>
          </div>
        </div>
      </div>
    </article>
    <div class="px-3 py-2">
      <ProjectCardSlider name="Tags" :tags="project.allTags" />
      <ProjectCardSlider name="Platform" :tags="project.platforms" />
      <ProjectCardSlider name="Verified Versions" :tags="project.verifiedVersions" />
    </div>
  </v-card>
</template>

<script>
import ProjectCardSlider from './ProjectCardSlider.vue'

export default {
  name: "ProjectCard",
  components: { ProjectCardSlider },
  props: {
    project: {
      type: Object,
      default: null
    }
  },
  data: () => ({
  }),
  methods: {
    async copyLink(link) {
      await navigator.clipboard.writeText(link);
      // alert('Project`s "' + link + '" link copied')
    },
    setLinkIcon(link) {
      if (link.includes("github")) {
        return "mdi-github";
      }
      else if (link.includes("assetstore")) {
        return "mdi-unity";
      }
      else if (link.includes("drive.google")) {
        return "mdi-google-drive";
      }
      else if (link.includes("ono.unity3d")) {
        return "Ono link";
      }
      else
        return "mdi-application-export";
    },
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
      else if (link.includes("ono.unity3d")) {
        return "Ono link";
      }
      else
        return "Source link";
    },
  }
}
</script>

<style scoped lang="scss">
.parent-container {
  border-radius: 20px;
  box-sizing: border-box;
  border-radius: 90px;
  height: 100%;
  position: relative;
  background-color: black;
  &:before {
    border-radius: 5px;
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    z-index: 5;
    top: 0;
  }
}

.content-wrapper {
  min-height: 250px;
  position: static;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
}
.image-wrapper {
  position: absolute;
  top: 0;
  // Prevents whitespace at bottom.
  font-size: 0; 
  width: 100%;
  &:before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.0) 0%,
      rgba(0, 0, 0, 0.0) 60%,
      rgba(0, 0, 0, 0.2) 70%,
      rgba(0, 0, 0, 0.7)  90%,
      rgba(0, 0, 0, 0.9)  95%,
      rgba(0, 0, 0, 1.0)  100%
      );
    };
  img { width: 100%; height: 250px; object-fit: cover; border-radius: 5px; }
}
.text-wrapper {
  bottom: 0;
  right: 0;
  height: 100%;
  z-index: 20;
  display: flex;
  blockquote {
    width: 80%;
    color: white;
    font-family: sans-serif;
    font-size: 1.1rem!important;
    line-height: 1.2;
  }
}

a {
  text-decoration: none;
  white-space: normal;
  width: 80%;
}

.card-action-btn {
  background-color: #f3f3f4;
  color: #1a512e;
  font-weight: 700;
}

.project-card {
  transition: transform .3s ease, box-shadow .1s ease;
  box-shadow: 0px 5px 15px rgb(0 0 0 / 3%)!important;

  &:hover {
    // z-index: 1;
    transform: scale(1.02);
    box-shadow: 0px 5px 20px rgb(0 0 0 / 10%)!important;
  }
}
</style>