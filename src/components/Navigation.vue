<template>
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
    <v-spacer />
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
          @click="createVote"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <span>Добавить голосование</span>
    </v-tooltip>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    createVote () {
      this.$router.push('/create')
    }
  }
}
</script>
