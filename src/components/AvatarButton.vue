<template>
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
        <v-avatar :size=imageSize>
          <img
            :src="me.image"
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
</template>

<script>

export default {
	name: "AvatarButton",
  props: {
    imageSize: {
      type: String,
      default: '43px'
    }
  },
	data: () => ({
    me: {
      image: "https://drive.google.com/uc?export=download&id=1SI15nBLI2MOOl95g_KyqBtjnkZTLMJJV"
    },
    menuButtons: [
      {
        name: 'Owned projects'
      },
      {
        name: 'Logout'
      }
    ],
	})
}
</script>