<template>
  <div class="pb-8">
    <v-row class="pt-5">
      <v-col>
        <h3 class="font-weight-light">
          COMMENTS
        </h3>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'

export default {
  name: "ProjectComments",
  props: {
    comments: [],
  },
  methods: {
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