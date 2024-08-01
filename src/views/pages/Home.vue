<script lang="ts">
import { type Job } from '../../types/Jobs'
import { defineComponent, ref } from 'vue'
import JobsList from '../../components/JobsList/JobsList.vue'
import Post from '../../services/JobsService'

export default defineComponent({
  name: 'HomeView',
  components: { JobsList },

  setup() {
    const jobs = ref<Job[]>([])

    Post.getAll().then((response) => {
      jobs.value = response.data
    })

    return { jobs }
  },

  methods: {}
})
</script>

<template>
  <div class="container mx-auto">
    <JobsList :jobs="jobs" />
  </div>
</template>
