<template>
<div class="flex items-center justify-center px-4 py-4 text-xs font-medium transition-colors duration-75 ease-linear border border-transparent rounded-md cursor-pointer lg:text-base 3xl:px-10 3xl:py-5" 
    :class="buttonBackground ?  `${buttonBackground} shadow text-white` : `text-gray-500 hover:text-green-900`">
    <slot/>
</div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        color: {
            type: String,
            required: false
        }
    },
    computed: {
        buttonBackground() {
            return this.color ? `bg-${this.color.toLowerCase()}-500 hover:bg-${this.color.toLowerCase()}-600` : null;	
        }
    }
}
</script>