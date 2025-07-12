<script setup lang="ts">

const route = useRoute()
const theme = route.meta.theme as string

const partyAddressString = ref('23 W Aylesbury Rd, Timonium, MD 21093')
const partyAddressArray = ['SkyZone Timonium', '23 W Aylesbury Rd', 'Timonium MD, 21093']
const googleMapsLink = 'https://maps.app.goo.gl/RCMm1SgwTbgBUxd86'
const { text, copy, copied, isSupported } = useClipboard({ partyAddressString })

type ThemeClasses = {
  text: string
  bg: string
  bgDarker: string
  focusRingDarker: string
  bgDarkerHover: string
}

const $theme = computed(() => {
  const t: Record<string, ThemeClasses> = {
    'standard': {
      text: 'text-standard',
      bg: 'bg-standard',
      bgDarker: 'bg-standard-darker',
      focusRingDarker: 'focus:ring-standard-darker',
      bgDarkerHover: 'hover:bg-standard-darker'
    },
    'vip': {
      text: 'text-vip',
      bg: 'bg-vip',
      bgDarker: 'bg-vip-darker',
      focusRingDarker: 'focus:ring-vip-darker',
      bgDarkerHover:
      'hover:bg-vip-darker'
    }
  }

  return t[theme]
})

// const $rsvpLink = computed(() => {
//   const l = {
//     standard: 'https://aygh4go1ws9.typeform.com/to/HCTMgT3P',
//     vip: 'https://aygh4go1ws9.typeform.com/to/IqlqTuWs'
//   }

//   return l[theme]
// })
</script>

<template>
  <main
    class="font-body w-full min-w-[320px] min-h-screen flex md:items-center justify-center text-white"
    :class="$theme.bgDarker">
    <article
      class="md:rounded-lg md:w-3/5 md:max-w-[960px] md:my-12 md:mx-auto md:overflow-hidden md:border-4 md:border-white/10"
      :class="$theme.bg">
      <div class="relative">
        <div v-if="theme === 'vip'"
          class="absolute z-10 text-white text-center w-full pt-6">
          <p class="text-lg uppercase tracking-wider">VIP invitation
          </p>
          <p class="font-display text-6xl capitalize">
            <slot name="vipName" />
          </p>
        </div>

        <slot name="image" />
      </div>

      <div class="py-12 px-6 md:px-12">
        <slot name="header" />

        <div class="md:flex md:space-x-6 md:py-12">
          <dl
            class="text-2xl flex space-x-12 justify-start w-full py-12 md:py-0 md:flex-col md:space-x-0 md:space-y-6">
            <PartyDetail dt="When">
              <p>July 27</p>
              <p>
                <slot name="time" />
              </p>
            </PartyDetail>

            <PartyDetail dt="Where">
              <p>SkyZone Timonium</p>
              <a class="underline text-standard-accent hover:text-standard-accent/80"
                href="https://www.skyzone.com/timonium/">View site</a>
            </PartyDetail>
          </dl>

          <div class="font-body text-xl md:text-2xl">
            <slot name="description" />
          </div>
        </div>

        <div
          class="flex flex-col items-start space-y-4 w-full rounded-lg mt-8 md:mt-0">
          <div
            class="flex items-center justify-between w-full border-b-2 border-white pb-2">
            <p
              class="text-lg text-white/30 uppercase font-semibold tracking-wider">
              Location Details
            </p>

            <div v-if="isSupported">
              <button @click="copy(partyAddress)"
                :class="[$theme.bg, $theme.bgDarkerHover]"
                class="px-3 py-0.5 text-sm rounded border-2 border-white/25 duration-200">
                <span v-if="!copied">Copy Address</span>
                <span v-else>Copied!</span>
              </button>
            </div>
          </div>

          <address class="font-display text-3xl md:text-4xl pb-2">
            <p v-for="(line, index) in partyAddressArray"
              :key="index">
              {{ line }}
            </p>
          </address>

          <a :href="googleMapsLink" target="_blank"
            class="w-full hover:animate-pulse hover:scale-105 duration-200 text-2xl font-semibold bg-white ring-transparent hover:opacity-90 focus:ring-4 outline-none inline-flex items-center justify-center rounded-lg py-4 px-6"
            :class="[$theme.text, $theme.focusRingDarker]">Get
            Directions</a>
        </div>
      </div>
    </article>
  </main>
</template>