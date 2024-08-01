<script lang="ts">
import { computed, defineComponent, type PropType } from 'vue'
import { type Job } from '../../types/Jobs'
import type { OrderJobsBy } from '../..//types/OrderJobsBy'

export default defineComponent({
  props: {
    jobs: {
      required: true,
      type: Array as PropType<Job[]>
    },
    orderJobsBy: {
      required: true,
      type: String as PropType<OrderJobsBy>
    }
  },
  setup(props) {
    const sortedJobs = computed(() => {
      if (props.orderJobsBy === 'title') {
        return [...props.jobs].sort((a: Job, b: Job) => a.title.localeCompare(b.title))
      }
      if (props.orderJobsBy === 'location') {
        return [...props.jobs].sort((a: Job, b: Job) => a.location.localeCompare(b.location))
      }
      if (props.orderJobsBy === 'salary') {
        return [...props.jobs].sort((a: Job, b: Job) => +b.salary - +a.salary)
      }

      return props.jobs
    })

    return { sortedJobs }
  }
})
</script>

<template>
  <div class="p-4">
    <p class="mb-4 text-sm">{{ `Sorted by: ${orderJobsBy ? orderJobsBy : 'date'}` }}</p>
    <transition-group name="jobs-list" tag="ul" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <li
        v-for="job in sortedJobs"
        :key="job.id"
        class="bg-white rounded-md shadow-md p-8 flex flex-col gap-6 opacity-70 transition-all duration-200 hover:opacity-100 hover:scale-105"
      >
        <h2 class="text-2xl font-bold">{{ job.title }} in {{ job.location }}</h2>
        <div>
          <p class="mb-2">{{ job.description }}</p>
          <div class="font-bold color text-green-600 text-right ordinal">
            $: {{ Number(job.salary).toFixed(2) }}
          </div>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<style>
.jobs-list-move {
  transition: all 1s;
}
</style>
