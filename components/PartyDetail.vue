<script setup lang="ts">
defineProps<{
  dt: string
}>()
</script>

<template>
  <div class="uppercase tracking-wider">
    <dt class="text-white/30 text-lg font-semibold">
      {{ dt }}
    </dt>
    <dd>
      <slot />
    </dd>
  </div>
</template>