<template>
    <div class="relative dropdown-group">
        <div class="relative flex items-center space-x-3 cursor-default dropdown-trigger">
            <span class="text-2xl font-medium text-gray-800 lg:text-base">
                <slot name="trigger"></slot>
            </span>
            <ChevronDownIcon class="w-4 h-4 text-gray-500 fill-current"/>
        </div>
        <div class="absolute flex flex-col py-2 space-y-1 transform bg-white rounded-md shadow-md w-max dropdown-content -translate-x-1/4">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
import ChevronDownIcon from '../../assets/icons/chevron-down.svg?inline';

export default {
    name: 'Dropdown',
    components: {
        ChevronDownIcon
    },
}
</script>

<style lang="scss" scoped>
.dropdown-group {
    .dropdown-content {
        @apply invisible;
    }
    .dropdown-trigger:hover ~ .dropdown-content {
        @apply visible;
    }
    .dropdown-content:hover {
        @apply visible;
    }
}
</style>