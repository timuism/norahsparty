<script setup lang="ts">
import GabbyVipInviteJpg from '~/assets/GabbyVipInvite.jpg';
import { vipList } from '~/vip';

const route = useRoute()
const vipName = route.params.vip[0] ?? ''

console.log(route.params.vip[0])
console.log({isVip: vipList.includes(route.params.vip[0])})

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
</script>

<template>
  <NuxtLayout name="default">
    <template #image>
      <PageImage :image="GabbyVipInviteJpg" alt="" use-blend-mode />
    </template>

    <template #vipName>
      {{ route.params.vip[0] }}
    </template>

    <template #header>
      <header class="flex flex-col-reverse">
          <h1 class="font-display font-semibold text-5xl md:text-6xl">Norah's Birthday Sleepover</h1>
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