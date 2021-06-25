<template>
  <div class="container mx-auto w-9/12 m-4">
    <div class="h-auto bg-blue-50 shadow-sm p-4">
      <CircleIndicatorContainer
        v-model:tagId="tagId"
      >
        <CircleIndicator :tag="1"/>
        <CircleIndicator :tag="2"/>
        <CircleIndicator :tag="3"/>
        <CircleIndicatorContent :tag="1">Content1</CircleIndicatorContent>
        <CircleIndicatorContent :tag="2">Content2</CircleIndicatorContent>
        <CircleIndicatorContent :tag="3">Content3</CircleIndicatorContent>
      </CircleIndicatorContainer>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue"

import {
  CircleIndicatorContainer,
  CircleIndicator,
  CircleIndicatorContent
} from "./components/Circle"

import {defineComponent} from 'vue'

export default defineComponent({
  components: {
    CircleIndicatorContainer,
    CircleIndicator,
    CircleIndicatorContent
  },
  setup(){
    const tagId = ref(1);

    return {
      tagId
    }
  }
})
</script>
