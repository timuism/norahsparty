<script setup lang="ts">
defineProps<{
  image: string
  alt: string
  useBlendMode: boolean
}>()
</script>

<template>
  <div class="w-full">
    <img :src="image" :alt="alt" class="object-cover w-full" :class="{ 'mix-blend-luminosity': useBlendMode}" />
  </div>
</template>