<template>
<header class="relative z-40 flex flex-wrap items-center justify-between w-full px-6 py-10 transition-all duration-150 ease-in-out bg-white lg:bg-transparent xl:flex-nowrap xl:items-center xl:px-20 xl:py-7">
    <nuxt-link to="/">
        <NavigationLogo class="lg:w-32 w-28" />
    </nuxt-link>
    <div class="absolute left-0 right-0 hidden mx-auto space-x-10 md:flex md:justify-center">
        <slot />
    </div>
    <div class="md:hidden">
        <span class="text-sm font-medium" @click="$emit('click', $event)">menu</span>
    </div>
</header>
</template>

<script>
import NavigationLogo from '../../assets/images/svg/logo_plain.svg?inline';

export default {
    name: 'NavigationBar',
    components: {
        NavigationLogo
    }
}
</script>