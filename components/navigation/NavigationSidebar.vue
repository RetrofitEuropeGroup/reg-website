<template>
    <div class="fixed top-0 left-0 z-50 block w-full h-full bg-transparent lg:hidden">
        <div class="relative z-20 w-11/12 h-full bg-white shadow-lg">
            <CrossIcon class="absolute w-6 h-6 top-5 right-5" @click="$emit('click', $event)"/>
            <div class="flex flex-col justify-center h-full px-10 space-y-8">
                <slot/>
            </div>
        </div>
        <div class="fixed inset-0 z-10 w-full h-full bg-transparent" @click="$emit('click', $event)"></div>
    </div>
</template>

<script>
import CrossIcon from '../../assets/icons/cross.svg?inline';

export default {
    name: 'NavigationSidebar',
    components: {
        CrossIcon
    }
}
</script>