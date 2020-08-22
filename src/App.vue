<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title
        style="width: 100px"
        class="ml-0 pl-4"
      >
        <v-img
          src="@/assets/logo.png"
          contain
          height="30"
          width="156"
        />
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {

  },

  data: () => ({
    //
  })
}
</script>
