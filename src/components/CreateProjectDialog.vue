<template>
  <v-dialog
    v-model="show"
    max-width="650"
  >
    <v-card
      :loading="loading"
    >
      <template slot="progress">
        <v-progress-linear
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
      <v-container class="pa-4 px-7">
        <h3 class="py-3">Add project</h3>
        <v-divider class="pb-3" />
        <v-form
          ref="form"
          v-model="valid"
        >
          <div class="d-flex flex-column justify-start mb-3">
            <TextInputField title="Title" label="Project name" class="my-2" :required="true" :rules="titleRules" />
            <TextInputField title="Link" label="https//github.com/project-link" class="my-2" :required="true" :rules="linkRules" />
            <div class="d-flex flex-row">
              <SelectInputField title="Render Pipeline" label="Select Render Pipelines" class="my-2 mr-2" :required="true"  :rules="renderPipelineRules" />
              <SelectInputField title="Platform" label="Select supported platforms" class="my-2" :required="true" :rules="platformRules" />
            </div>
            <SelectInputField title="Project owners" label="Select owners" class="my-2" />
            <div class="d-flex flex-row">
              <SelectInputField title="Primary Features" label="Select up to 5" class="my-2 mr-2" :required="true" :rules="tagsRules" />
              <SelectInputField title="Features" label="Other project features" class="my-2" />
            </div>
            <div class="d-flex flex-row">
              <SelectInputField title="Project version in source" label="Select Unity Stream" class="my-2 mr-2" :required="true" :rules="unityStreamRules" />
              <TextInputField title="Unity version" label="E.g. 0f12" class="my-2" :required="true" :rules="unityVersionRules" />
            </div>
            <TextAreaField title="Description" label="Plain text or markdown" class="my-2" additionalInfo="Paste template" />
            <FileInputField title="Project cover image" label="Plain text or markdown" additionalInfo="max size 2MB" class="my-2" :rules="imageRules" />
          </div>
        </v-form>
        <v-divider class="pb-3" />
        <div class="d-flex flex-row">
          <v-btn
            class="text-caption text-decoration-underline text-none pa-0"
            text
          >
            Clear all
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!valid"
            class="px-6 py-5"
            color="primary lighten-1"
            elevation="0"
            small
          >
            Add project
          </v-btn>
        </div>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import TextInputField from '@/components/dialogs/TextInputField.vue'
import SelectInputField from '@/components/dialogs/SelectInputField.vue'
import TextAreaField from '@/components/dialogs/TextAreaField.vue'
import FileInputField from '@/components/dialogs/FileInputField.vue'

export default {
    name: "CreateProjectDialog",
    data: () => ({
      loading: false,
      valid: false,
      titleRules: [
        v => v !== ' ' || 'Name is required',
        v => v !== null || 'Name is required',
        v => v !== '' || 'Name is required'
      ],
      linkRules: [
        v => v !== ' ' || 'Link is required',
        v => v !== null || 'Link is required',
        v => v !== '' || 'Link is required'
      ],
      renderPipelineRules: [
        v => v.length !== 0 || 'Render Pipeline is required'
      ],
      platformRules: [
        v => v.length !== 0 || 'Supported platform is required'
      ],
      tagsRules: [
        v => v.length !== 0 || 'Primary features are required',
        v => v.length <= 5 || 'Max 5 primary features are allowed'
      ],
      unityStreamRules: [
        v => v > 0 || 'Version is required'
      ],
      unityVersionRules: [
        v => v !== ' ' || 'Unity version is required',
        v => v !== null || 'Unity version is required',
        v => v !== '' || 'Unity version is required'
      ],
      imageRules: [
        value => !value || value.size < 2000000 || 'Project image size should be less than 2 MB!' // 700KB
      ],
    }),
    props: {
      value: Boolean
    },
    components: {
      TextInputField,
      SelectInputField,
      TextAreaField,
      FileInputField
    },
    computed: {
      show: {
        get () {
          return this.value
        },
        set (value) {
          this.$emit('input', value)
        }
      },
  }
}
</script>

<style lang="scss" scoped>
</style>