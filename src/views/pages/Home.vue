<script lang="ts">
import { type Job } from '../../types/Jobs'
import { defineComponent, onMounted, ref } from 'vue'
import JobsList from '../../components/JobsList/JobsList.vue'
import Post from '../../services/JobsService'
import type { OrderJobsBy } from '../../types/OrderJobsBy'
import MyButton from '../../components/button/MyButton.vue'

export default defineComponent({
  name: 'HomeView',
  components: { JobsList, MyButton },

  setup() {
    const jobs = ref<Job[]>([])

    const fetchJobs = async () => {
      try {
        const response = await Post.getAll().then((response) => {
          return response.data
        })

        jobs.value = response
      } catch (error) {
        console.log('fetchJobs:', error)
      }
    }
    onMounted(() => {
      fetchJobs()
    })

    const orderJobsBy = ref<OrderJobsBy>('')

    const handleClickOrder = (term: OrderJobsBy) => {
      orderJobsBy.value = term
    }

    const btnActive = (term: OrderJobsBy) => {
      if (orderJobsBy.value === term) {
        return true
      }
      return false
    }

    return { jobs, handleClickOrder, orderJobsBy, btnActive }
  }
})
</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-4xl font-bold text-center mb-12 mt-4">Find your job here!</h1>
    <div class="content-center grid gap-6 mx-3 mt-3 sm:flex sm:justify-center">
      <MyButton :class="btnActive('') ? 'bg-blue-800' : ''" @click="handleClickOrder('')"
        >Reset</MyButton
      >
      <MyButton :class="btnActive('title') ? 'bg-blue-800' : ''" @click="handleClickOrder('title')"
        >Order by title</MyButton
      >
      <MyButton
        :class="btnActive('salary') ? 'bg-blue-800' : ''"
        @click="handleClickOrder('salary')"
        >Order by salary</MyButton
      >
      <MyButton
        :class="btnActive('location') ? 'bg-blue-800' : ''"
        @click="handleClickOrder('location')"
        >Order by location</MyButton
      >
    </div>
    <JobsList :jobs="jobs" :orderJobsBy="orderJobsBy" />
  </div>
</template>
