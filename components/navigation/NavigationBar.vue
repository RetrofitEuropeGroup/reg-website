<template>
<header class="z-40 flex flex-wrap items-center w-full px-6 py-10 transition-all duration-150 ease-in-out bg-white lg:bg-transparent xl:flex-nowrap xl:items-center xl:px-20">
    <div class="flex items-center justify-between w-full">
        <div class="flex items-center">
            <nuxt-link to="/">
                <NavigationLogo class="relative z-50 mr-10 lg:w-32 w-28" />
            </nuxt-link>
            <div class="space-x-7">
                <slot />
            </div>
        </div>
        <div class="hidden lg:flex">
            <Button color="green" rounded>Join de REG groep nu</Button>
        </div>
    </div>
    <div class="md:hidden">
        <span class="text-sm font-medium" @click="$emit('click', $event)">menu</span>
    </div>
</header>
</template>

<script>
import Button from '../base/Button.vue';
import NavigationLogo from '../../assets/images/svg/logo_plain.svg?inline';

export default {
    name: 'NavigationBar',
    components: {
        Button,
        NavigationLogo
    }
}
</script>