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
            label="Описание"
            placeholder="Описание"
            rows="3"
            outlined
            hide-details
          />
        </v-col>
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
              class="pl-3 pr-4"
              append-outer-icon="mdi-delete"
              @click="addAnswer"
              @click:append-outer="deleteAnswer"
            />
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-card-actions>
      <v-spacer />
      <v-btn
        color="primary"
        text
        @click="createVote"
      >
        Создать
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'VoteCreate',
  data () {
    return {
      isLoading: false
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
      // TODO: send query
    }
  }
}
</script>
