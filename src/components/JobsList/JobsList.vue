<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { type Job } from '../../types/Jobs'

export default defineComponent({
  props: {
    jobs: {
      required: true,
      type: Array as PropType<Job[]>
    }
  },
  setup() {}
})
</script>

<template>
  <div class="p-4">
    <ul class="flex flex-col gap-6">
      <li
        v-for="job in jobs"
        :key="job.id"
        class="bg-white rounded-md shadow-md p-8 flex flex-col gap-6 opacity-70 hover:opacity-100"
      >
        <h2 class="text-2xl font-bold">{{ job.title }} in {{ job.location }}</h2>
        <div>
          <p class="mb-2">{{ job.description }}</p>
          <div class="font-bold color text-green-600 text-right ordinal">$: {{ job.salary }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
