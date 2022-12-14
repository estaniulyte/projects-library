<template>
  <v-app-bar
    class="px-1 px-sm-4"
    elevation="0"
    color="white"
  >
    <v-row class="d-none d-sm-inline-flex align-center">
      <router-link to="/">Project Library</router-link>
      <v-spacer />
      <v-btn
        v-for="(item, index) of actionButtons"
        :key="index"
        color="primary"
        class="mx-1"
        @click="item.action ? item.action() : () => {}"
        v-bind="item.bind"
        outlined
        fab
        small
      >
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon :size="item.iconSize"  v-bind="attrs"
              v-on="on">
              {{ item.iconName }}
            </v-icon>
          </template>
          <span> {{ item.tootlip }} </span>
        </v-tooltip>
      </v-btn>
      <v-btn
        class="px-7 py-5 mx-3"
        color="primary"
        v-bind="attrs"
        elevation="0"
        small
        @click="dialog = true"
      >
        <span class="ml-2">Add project</span>
      </v-btn>
      <AvatarButton />
    </v-row>
    <v-row class="d-sm-none d-flex align-center ma-0">
      <router-link to="/">Project Repository</router-link>
      <v-spacer />
      <AvatarButton imageSize='40px' />
    </v-row>
    <CreateProjectDialog
      v-model="dialog"
      justify="center"
    />
  </v-app-bar>
</template>

<script>
import AvatarButton from './AvatarButton.vue';
import CreateProjectDialog from './CreateProjectDialog.vue';

export default {
    name: "HomeAppBar",
    data: () => ({
      dialog: false,
      attrs: [],
      actionButtons: [
        {
          name: "Slack Channel",
          iconName: "mdi-slack",
          iconSize: "19",
          tootlip: "Feedback & Questions",
          bind: {
            href: "slack://"
          }
        },
        {
          name: "Documentation",
          iconName: "mdi-help",
          iconSize: "17",
          tootlip: "Documentation",
          bind: {
            href: "",
            target: "_blank"
          }
        }
      ],
      menuButtons: [
          {
              name: "Owned projects"
          },
          {
              name: "Logout"
          }
      ]
    }),
    components: { AvatarButton, CreateProjectDialog }
}
</script>

<style scoped lang="scss">
  a {
    color: black!important;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    font-weight: 700;
  }

  .v-app-bar {
    border-bottom: 1px solid #f3f3f4 !important;
  }

  .v-btn {
    text-transform: uppercase;
    font-weight: 700;
    border-radius: 50px;
  }
</style>