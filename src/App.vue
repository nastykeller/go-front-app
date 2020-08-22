<template>
  <v-app>
    <app-navigation />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'App',
  components: {
    'app-navigation': Navigation
  }
}
</script>
