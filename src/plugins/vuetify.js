import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#F2C94C',
        secondary: '#2F80ED',
        accent: '#EB5757',
        error: '#EB5757'
      }
    }
  }
})
