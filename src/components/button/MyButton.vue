<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {}
})
</script>

<template>
  <button
    class="text-white font-bold bg-blue-600 px-3 py-2 rounded-md hover:bg-blue-500 focus:bg-blue-800"
  >
    <slot />
  </button>
</template>
