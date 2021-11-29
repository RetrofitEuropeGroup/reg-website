<template>
<span @click="$emit('click', $event)" class="relative text-2xl font-medium text-gray-800 transition-opacity duration-100 ease-linear lg:text-base opacity-60 hover:opacity-100">
    <slot />
</span>
</template>

<script>
export default {
    name: 'NavigationItem'
}
</script>