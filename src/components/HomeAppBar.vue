<template>
  <v-app-bar
    class="px-4"
    elevation="0"
    color="white"
  >
    <router-link to="/">Projects Library</router-link>
    <v-spacer />

    <v-btn
      v-for="(item, index) of actionButtons"
      :key="index"
      color="primary"
      class="mr-2"
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
      class="px-7 py-5 mr-3"
      color="primary"
      v-bind="attrs"
      elevation="0"
      small
    >
      <span class="ml-2">Add project</span>
    </v-btn>
    <v-menu
      bottom
      min-width="200px"
      rounded
      offset-y
      elevation="0"
      transition="slide-y-transition"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          x-large
          v-on="on"
        >
          <v-avatar size="43px">
            <img
              src="https://i.pravatar.cc/43"
              alt="Slack Image"
            >
          </v-avatar>
        </v-btn>
      </template>
      <v-card
        elevation="0"
      >
        <v-list-item-content class="justify-center" elevation="0">
          <div class="mx-auto text-center">
            <template
              v-for="(item, index) of menuButtons"
            >
              <v-btn
                @click="item.action ? item.action() : () => {}"
                :key="index"
                v-bind="item.bind"
                small
                text
              >
                {{ item.name }}
              </v-btn>
              <v-divider
                v-if="menuButtons.length !== index+1"
                :key="index"
                class="my-3"
              />
            </template>
          </div>
        </v-list-item-content>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script>

export default {
	name: "HomeAppBar",
	data: () => ({
    actionButtons: [
      {
        name: 'Slack Channel',
        iconName: 'mdi-slack',
        iconSize: '19',
        tootlip: 'Feedback & Questions',
        bind: {
          href: 'slack://'
        }
      },
      {
        name: 'Documentation',
        iconName: 'mdi-help',
        iconSize: '17',
        tootlip: 'Documentation',
        bind: {
          href: '',
          target: '_blank'
        }
      }
    ],
    menuButtons: [
      {
        name: 'Owned projects'
      },
      {
        name: 'Logout'
      }
    ]
	})
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