<template>
  <div class="ma-1">
    <span
      class="font-weight-medium"
      style="font-size: 15px!important;"
    >
      {{ name }}
    </span>
    <v-slide-group
      class="tag-slide-group d-flex py-1"
      show-arrows
    >
      <v-slide-item
        v-for="tag, i in tags"
        :key="i"
      >
        <v-chip
          class="black--text pa-2 mx-1 defaultChip"
          :class="{ renderPipeline: tag.type === 'RenderPipeline', primaryTag: tag.type === 'PrimaryTag' }"
          pill
          label
          x-small
          dark
        >
          {{ tag.name  }}
        </v-chip>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>

export default {
  name: "ProjectCardSlider",
  props: {
    name: {
      type: String,
      default: null
    },
    tags: {
      type: Array,
      default: null
    },
    type: {
      type: String,
      default: 'default'
    }
  }
}

</script>

<style lang="scss" scoped>

::v-deep .v-slide-group__next, ::v-deep .v-slide-group__prev {
  min-width: 0px;
}

.v-chip {
  &:hover{
  // background-color:#c7efe1!important;
    background-color:#0088325f!important;
  }
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