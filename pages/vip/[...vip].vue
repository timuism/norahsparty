<script setup lang="ts">
import GabbyVipInviteJpg from '~/assets/GabbyVipInvite.jpg';
import { vipList } from '~/vip';

const route = useRoute()
const vipName = route.params.vip[0] ?? ''

definePageMeta({
  theme: 'vip',
  middleware: [
    function (to) {
      if(!vipList.includes(to.params.vip[0])) {
        return navigateTo("../")
      }
    }
  ]
})

const $vipName = computed(() => {
  const vipName = route.params.vip[0]
  return vipName === 'jade-and-justice' ? 'Jade and Justice' : vipName
})
</script>

<template>
  <NuxtLayout name="default">
    <template #image>
      <PageImage :image="GabbyVipInviteJpg" alt="" use-blend-mode />
    </template>

    <template #vipName>
      {{ $vipName }}
    </template>

    <template #header>
      <header class="flex flex-col-reverse">
          <h1 class="font-display font-semibold text-5xl md:text-6xl">Norah's Birthday Party & Sleepover</h1>
          <p class="uppercase text-base font-semibold tracking-wider">You've been selected for</p>
        </header>
    </template>

    <template #time>
      6p to 10a
    </template>

    <template #description>
      <p>Stay the night for a private spa, movie night and breakfast in the morning</p>
    </template>
    
  </NuxtLayout>
</template>