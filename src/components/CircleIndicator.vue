<template>
  <div class="flex justify-center items-center h-8 w-8 rounded-2xl bg-blue-400 text-lg text-white">
    {{ tag }}
  </div>

</template>

<script>
export default {
  name: "CircleIndicator",
  props:{
    tag: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
