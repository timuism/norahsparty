<script setup lang="ts">
import SkZooImage from '~/assets/skzoo-image.jpg';

definePageMeta({
  theme: 'standard'
})
</script>

<template>
  <NuxtLayout name="default">
    <template #image>
      <PageImage :image="SkZooImage" alt="" />
    </template>

    <template #header>
      <header class="flex flex-col-reverse">
          <h1 class="font-display font-semibold text-5xl md:text-6xl">Norah's 8th Birthday Party</h1>
          <p class="uppercase text-base font-semibold tracking-wider">You are invited to</p>
        </header>
    </template>

    <template #time>
      2:30p – 5p
    </template>

    <template #description>
      <p>Join Norah at Skyzone as she jumps into a new year around the sun!</p>
      <p class="mt-4"><a class="underline text-standard-accent hover:text-standard-accent/80" href="mailto:timuism@me.com, missaddy22@gmail.com?subject=RSVP%20for%20Norah's%208th%20Birthday%20Party&body=%0A%0A">Click here to RSVP by email</a> (Let us know who you are (parent / child) in the email body).</p>
    </template>
    
  </NuxtLayout>
</template>