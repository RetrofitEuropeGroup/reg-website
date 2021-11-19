<template>
<div class="flex items-center justify-center px-4 py-4 text-xs font-medium transition-colors duration-75 ease-linear border border-transparent rounded-md cursor-pointer lg:text-base 3xl:px-10 3xl:py-5" 
    :class="[
        color === 'gray' ? 'bg-gray-500 hover:bg-gray-600 shadow text-white' : null,
        color === 'red' ? 'bg-red-500 hover:bg-red-600 shadow text-white' : null,
        color === 'yellow' ? 'bg-yellow-500 hover:bg-yellow-600 shadow text-white' : null,
        color === 'green' ? 'bg-green-500 hover:bg-green-600 shadow text-white' : null,
        color === 'blue' ? 'bg-blue-500 hover:bg-blue-600 shadow text-white' : null,
        color === 'indigo' ? 'bg-indigo-500 hover:bg-indigo-600 shadow text-white' : null,
        color === 'purple' ? 'bg-purple-500 hover:bg-purple-600 shadow text-white' : null,
        color === 'pink' ? 'bg-pink-500 hover:bg-pink-600 shadow text-white' : null,
        !color ? 'bg-transparent text-gray-500 hover:text-green-900' : null,
    ]">
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