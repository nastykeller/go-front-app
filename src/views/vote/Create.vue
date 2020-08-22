<template>
  <v-card
    :loading="isLoading"
    class="mx-auto my-12"
    max-width="374"
  >
    <v-img
      height="250"
      src="@/assets/create.png"
    />

    <v-card-title>Создать голосование</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-col
          cols="12"
        >
          <v-text-field
            v-model="name"
            label="Название"
            placeholder="Название"
            outlined
            hide-details
          />
        </v-col>
      </v-row>

      <v-row
        align="center"
        class="mx-0"
      >
        <v-col
          cols="12"
        >
          <v-textarea
            v-model="description"
            label="Описание"
            placeholder="Описание"
            rows="3"
            outlined
            hide-details
          />
        </v-col>
      </v-row>
      <v-row>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="dateClosed"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              :value="dateClosed"
              label="Дата завершения"
              placeholder="Дата завершения голосования"
              class="mx-5 my-2"
              readonly
              outlined
              hide-details
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <v-date-picker
            v-model="dateClosed"
            no-title
            scrollable
            locale="ru"
            :min="today"
          >
            <v-spacer />
            <v-btn
              text
              color="primary"
              @click="menu = false"
            >
              Отмена
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu.save(dateClosed)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-row>
      <v-row>
        <v-spacer />
        <v-btn
          color="primary"
          text
          @click="createVote"
        >
          Создать
        </v-btn>
      </v-row>
    </v-card-text>

    <v-divider class="mx-4" />

    <v-card-title
      class="pb-0"
    >
      Варианты ответов
      <v-spacer />
      <v-btn
        icon
        color="primary"
        class="mr-2"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card-title>

    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-text-field
              placeholder="Вариант ответа"
              outlined
              dense
              hide-details
              class="pl-3 pr-4 mt-1"
              append-outer-icon="mdi-delete"
              @click="addAnswer"
              @click:append-outer="deleteAnswer"
            />
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import moment from 'moment'

export default {
  name: 'VoteCreate',
  data () {
    return {
      name: null,
      description: null,
      today: moment().format('YYYY-MM-DD'),
      dateClosed: moment().format('YYYY-MM-DD'),
      isLoading: false,
      menu: false
    }
  },
  methods: {
    addAnswer () {
      // TODO: add element to DOM
    },
    deleteAnswer () {
      // TODO: delete element from DOM
    },
    createVote () {
      this.$http.post('/votes', {
        name: this.name,
        description: this.description,
        date_closed: moment.utc(this.dateClosed)
      }).then((result) => {
        console.log(result)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
