<script setup lang="ts">
import GabbyStandardInviteJpg from '~/assets/GabbyStandardInvite.jpg';

definePageMeta({
  theme: 'standard'
})
</script>

<template>
  <NuxtLayout name="default">
    <template #image>
      <PageImage :image="GabbyStandardInviteJpg" alt="" />
    </template>

    <template #header>
      <header class="flex flex-col-reverse">
          <h1 class="font-display font-semibold text-5xl md:text-6xl">Norah's 6th Birthday Party</h1>
          <p class="uppercase text-base font-semibold tracking-wider">You are invited to</p>
        </header>
    </template>

    <template #time>
      3p to 6p
    </template>

    <template #description>
      <p>Join us in celebrating Norah’s birthday with food, cake, ice cream and cat ears!</p>
    </template>
    
  </NuxtLayout>
</template>