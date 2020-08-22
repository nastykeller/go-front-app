<template>
  <div>
    <p class="text-h5 pl-12 py-5">
      Список
    </p>
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
