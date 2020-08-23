<template>
  <div>
    <template>
      <div
        v-for="(item, index) in list"
        :key="index"
        class="d-flex mt-10"
      >
        <v-card
          class="mx-auto mb-5"
          max-width="344"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">
                {{ item.date_created | formatDate }}
              </div>
              <v-list-item-title class="headline mb-1">
                {{ item.name }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              size="80"
              color="primary"
            >
              <span class="white--text headline"> 🏡 </span>
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn text>
              Изменить
            </v-btn>
            <v-btn
              text
              color="error"
            >
              Удалить
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </template>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'VoteList',
  filters: {
    formatDate (date) {
      if (date) {
        return moment(String(date)).format('DD/MM/YYYY hh:mm')
      }
    }
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getVotesList()
  },
  methods: {
    getVotesList () {
      this.$http.get('/votes').then((result) => {
        this.list = result.data
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
