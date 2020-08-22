<template>
  <div>
    <h4>Список голосований</h4>
    <vote-list />
  </div>
</template>

<script>
import VoteList from '@/components/VoteList.vue'

export default {
  name: 'VoteIndex',
  components: {
    VoteList
  }
}
</script>
