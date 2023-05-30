<template>
  <v-dialog
    v-model="show"
    max-width="650"
  >
    <v-card>
      <v-container class="pa-4 px-7">
        <h3 class="py-3">Add tested version</h3>
        <v-divider class="pb-3" />
        <v-form
          ref="form"
          v-model="valid"
        >
          <div class="d-flex flex-column justify-start mb-3">
            <div class="d-flex flex-row">
              <SelectInputField title="Project version in source" label="Select Unity Stream" class="my-2 mr-2" :required="true" :multiple="false" :items="unityStreams" v-model="selectedUnityVersion" :rules="unityStreamRules" />
              <TextInputField title="Unity version" label="E.g. 0f12" class="my-2" :required="true" :rules="unityVersionRules" v-model="unityVersion" />
            </div>
            <SelectInputField title="Status" label="Select status" class="my-2 mr-2" :required="true" :multiple="false" :rules="statusRules" :items="statuses" v-model="selectedStatus" />
            <TextAreaField title="Description" label="Plain text or markdown" class="my-2" v-model="description" />
          </div>
          <v-divider class="pb-3" />
          <div class="d-flex flex-row">
            <v-btn
              class="text-caption text-decoration-underline text-none pa-0"
              text
              @click="resetForm()"
            >
              Clear all
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!valid"
              @click="createTestedVersion()"
              class="px-6 py-5"
              color="primary lighten-1"
              elevation="0"
              small
            >
              Add version
            </v-btn>
          </div>
        </v-form>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import SelectInputField from '@/components/dialogs/SelectInputField.vue'
import TextInputField from '@/components/dialogs/TextInputField.vue'
import TextAreaField from '@/components/dialogs/TextAreaField.vue'

import streamsData from "@/assets/data/streams.json"

export default {
  name: "TestedVersionDialog",
  data: () => ({
    valid: false,
    unityStreams: streamsData,
    description: null,
    selectedStatus: null,
    selectedUnityVersion: null,
    unityVersion: null,
    unityStreamRules: [
      v => v > 0 || 'Version is required'
    ],
    unityVersionRules: [
      v => v !== ' ' || 'Unity version is required',
      v => v !== null || 'Unity version is required',
      v => v !== '' || 'Unity version is required'
    ],
    statusRules: [
      v => v !== ' ' || 'Status is required',
      v => v !== null || 'Status is required',
      v => v !== [] || 'Status is required',
      v => v !== '' || 'Status is required'
    ],
    statuses: [
      {
        name: "No issues observed",
        status: "PASS"
      },
      {
        name: "Some issues observed",
        status: "WORKS_PARTLY"
      },
      {
        name: "Has major issues",
        status: "ISSUES"
      },
    ],
  }),
  props: {
    value: Boolean,
    projectId: String
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
    createPayload () {
      if(this.selectedStatus != null && this.unityVersion != null && this.selectedUnityVersion != null) {
        let status = this.statuses.filter(a => { return  a.name == this.selectedStatus ? a : null})[0].status
        let fullVersion = null;
        if (this.selectedUnityVersion && this.unityVersion) {
          fullVersion = this.unityStream.filter(x => x.id === this.selectedUnityVersion)
          fullVersion = fullVersion[0].name + '.' + this.unityVersion
        } 
        return {
          data: {
            project: {
              connect: {id: this.projectId}
            },
            stream: {
              connect: {id: this.selectedUnityVersion}
            },
            notes: this.description,
            fullVersion: fullVersion,
            status: status,
            user: {
              connect: {
                id: "0"
              }
            },
          }
        }
      } return null
    }
  },
  components: {
    TextInputField,
    SelectInputField,
    TextAreaField
  },
  methods: {
    resetForm () {
      this.$refs.form.resetValidation()
      this.$refs.form.reset()
    },
    async createTestedVersion () {
      try {
        console.log("create version")
        this.resetForm()
        this.show = false
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>