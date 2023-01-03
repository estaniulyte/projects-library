<template>
  <article class="parent-container">
      <div class="content-wrapper">
        <div class="image-wrapper">
            <img :src="project.imageLink" alt="projectImage" />
        </div>
        <div class="text-wrapper">
          <blockquote class="pl-5 ma-0 pb-3 title d-flex align-center">
            {{ project.name }}
          </blockquote>
          <v-spacer></v-spacer>
          <div class="mr-3 mb-2 d-flex align-end">
            <v-tooltip bottom v-if="watched">
              <template #activator="{ on, attrs }">
                <v-btn fab elevation="0" small class="ma-1 card-action-btn" @click="watched = false" target="_blank" v-bind="attrs" v-on="on" color="blue">
                  <v-icon size="26" color="white">
                    mdi-eye
                  </v-icon>
                </v-btn>
              </template>
              <span>Unwatch project</span>
            </v-tooltip>
            <v-tooltip bottom v-else>
              <template #activator="{ on, attrs }">
                <v-btn fab elevation="0" small class="ma-1 card-action-btn" target="_blank" v-bind="attrs" v-on="on" @click="watched = true">
                  <v-icon size="26">
                    mdi-eye-outline
                  </v-icon>
                </v-btn>
              </template>
              <span>Watch project</span>
            </v-tooltip>
            <v-tooltip bottom v-if="liked">
              <template #activator="{ on, attrs }">
                <v-btn fab elevation="0" small class="ma-1 card-action-btn" @click="liked = false" v-bind="attrs" v-on="on" color="red">
                  <v-icon size="25" color="white">
                    mdi-heart
                  </v-icon>
                </v-btn>
              </template>
              <span>Remove from favorites</span>
            </v-tooltip>
            <v-tooltip bottom v-else>
              <template #activator="{ on, attrs }" >
                <v-btn fab elevation="0" small class="ma-1 card-action-btn" @click="liked = true" v-bind="attrs" v-on="on">
                  <v-icon size="25">
                    mdi-heart-outline
                  </v-icon>
                </v-btn>
              </template>
              <span>Add to favorites</span>
            </v-tooltip>
          </div>
        </div>
      </div>
    </article>
</template>

<script>
export default {
  name: "ProjectBanner",
  props: {
    project: {}
  },
  data: () => ({
    watched: false,
    liked: false,
  })
}

</script>

<style scoped lang="scss">
.parent-container {
  border-radius: 20px;
  box-sizing: border-box;
  border-radius: 90px;
  height: 100%;
  // width: 400px;
  position: relative;
  // Add background color.
  background-color: black;
  // Not needed now.
  // padding-top: 17.8%;
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
  // added to ensure it won't collapse.  
  min-height: 250px;
  // changed to force container height.
  position: static;
  // Not used now. 
  // top: 0;
  // left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  // border-radius: 50px;
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
      rgba(0, 0, 0, 0.0) 30%,
      rgba(0, 0, 0, 0.2) 60%,
      rgba(0, 0, 0, 0.7)  90%,
      rgba(0, 0, 0, 0.9)  95%,
      rgba(0, 0, 0, 1.0)  100%
      );
    };
  img { width: 100%; height: 250px; object-fit: cover; }
}
.text-wrapper {
  height: 100%;
  z-index: 20;
  display: flex;
  blockquote {
    width: 100%;
    color: white;
    font-family: sans-serif;
    font-size: 1.9rem!important;
    line-height: 1.2;
  }
}

</style>