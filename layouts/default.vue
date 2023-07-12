<script setup lang="ts">
import { computed } from 'vue'

const route = useRoute()
const theme = route.meta.theme

const $theme = computed(() => {
  const t = {
    'standard': {
      text: 'text-standard',
      bg: 'bg-standard',
      bgDarker: 'bg-standard-darker',
      focusRingDarker: 'focus:ring-standard-darker'
    },
    'vip': {
      text: 'text-vip',
      bg: 'bg-vip',
      bgDarker: 'bg-vip-darker',
      focusRingDarker: 'focus:ring-vip-darker'
    }
  }

  return t[theme]
})
</script>

<template>
  <main class="font-body w-full min-w-[320px] min-h-screen flex md:items-center justify-center text-white"
    :class="$theme.bgDarker">
    <article class="md:rounded-lg md:w-2/5 md:max-w-[960px] md:my-12 md:mx-auto md:overflow-hidden md:border-4 md:border-white/10"
      :class="$theme.bg">
      <div class="relative">
        <div v-if="theme === 'vip'" class="absolute z-10 text-white text-center w-full pt-6">
          <p class="text-lg uppercase tracking-wider">VIP invitation</p>
          <p class="font-display text-6xl capitalize"><slot name="vipName" /></p>
        </div>

        <slot name="image" />
      </div>

      <div class="py-12 px-6 md:px-12">
        <slot name="header" />

        <div class="md:flex md:space-x-6 md:py-12">
          <dl class="flex space-x-12 justify-start w-full py-12 md:py-0 md:flex-col md:space-x-0 md:space-y-6">
            <PartyDetail dt="When">
              <p>July 29</p>
              <p>
                <slot name="time" />
              </p>
            </PartyDetail>

            <PartyDetail dt="Where">
              <p>Deja's House</p>
            </PartyDetail>
          </dl>

          <div class="font-display text-3xl md:text-4xl">
            <slot name="description" />
          </div>
        </div>

        <div class="flex flex-col items-start space-y-4 w-full rounded-lg mt-8 md:mt-0">
          <p class="text-base uppercase font-semibold tracking-wider">
            RSVP by July 22
          </p>

          <a href="https://aygh4go1ws9.typeform.com/to/HCTMgT3P"
            class="w-full hover:animate-pulse hover:scale-105 duration-200 text-2xl font-semibold bg-white ring-transparent hover:opacity-90 focus:ring-4 outline-none inline-flex items-center justify-center rounded-lg py-4 px-6"
            :class="[$theme.text, $theme.focusRingDarker]">RSVP Now</a>

        </div>

        <footer class="mt-8 italic">
          <p>
            <small><sup>*</sup>Exact address will be given closer to party date</small>
          </p>
        </footer>
    </div>
  </article>
</main></template>