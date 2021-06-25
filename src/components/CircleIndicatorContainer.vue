<template>
  <div class="flex justify-around">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "CircleIndicatorContainer",
  setup( props, { slots} ){
    console.log(slots.default())
  }
}
</script>

<style scoped>

</style>
