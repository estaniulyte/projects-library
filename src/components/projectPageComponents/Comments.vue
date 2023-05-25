<template>
  <div class="pb-8">
    <v-row class="pt-5">
      <v-col>
        <h3 class="font-weight-light">
          COMMENTS
        </h3>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-end ma-1 mr-12 pr-3 text-caption"><a href="https://markdown-it.github.io/" target="_blank">Markdown Editor</a></v-row>
    <v-row class="ma-1 pb-4">
      <div class="d-flex justify-end align-top pa-1 pt-0 mr-2">
          <v-avatar v-if="me" size="40" class="">
            <v-img :src="me.image"></v-img>
          </v-avatar>
          <v-avatar v-else size="40" left>
            <v-icon size="45" dark color="primary">
              mdi-account-circle
            </v-icon>
          </v-avatar>
        </div>
        <div class="comments">
          <v-textarea
            v-model="comment"
            label="Add a comment... (plain text or markdown)"
            rows="2"
            auto-grow
            hide-details
            append-outer-icon="mdi-send"
            @click:append-outer="createComment()"
            dense
            outlined
          />
        </div>
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
  data: () => ({
    comment: "",
    me: {
      image: "https://drive.google.com/uc?export=download&id=1SI15nBLI2MOOl95g_KyqBtjnkZTLMJJV"
    }
  }),
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


<style lang="scss" scoped>

.comments {
  width: 95%;
}
.commenter {
  font-size: 1.1rem;
}

.date {
  font-size: .8rem;
  color: rgb(92, 91, 91);
}
.description {
  font-size: .9rem;
  color: rgb(92, 91, 91);
}

.classe {
  width: 95%!important;
}
</style>