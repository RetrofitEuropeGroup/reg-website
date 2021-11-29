<template>
<div class="flex items-center justify-center px-6 py-4 space-x-2 text-xs font-medium transition-all duration-75 ease-linear transform border border-transparent rounded-md cursor-pointer lg:text-sm" 
    :class="[
        rounded ? 'rounded-full': null,
        color === 'gray' ? 'bg-gray-400 hover:bg-gray-500 text-white' : null,
        color === 'white' ? 'bg-white hover:bg-gray-100 text-gray-800' : null,
        color === 'red' ? 'bg-red-400 hover:bg-red-500 text-white' : null,
        color === 'yellow' ? 'bg-yellow-400 hover:bg-yellow-500 text-white' : null,
        color === 'green' ? 'bg-green-400 hover:bg-green-500 text-white' : null,
        color === 'blue' ? 'bg-blue-400 hover:bg-blue-500 text-white' : null,
        color === 'indigo' ? 'bg-indigo-400 hover:bg-indigo-500 text-white' : null,
        color === 'purple' ? 'bg-purple-400 hover:bg-purple-500 text-white' : null,
        color === 'pink' ? 'bg-pink-400 hover:bg-pink-500 text-white' : null,
        !color ? 'bg-white text-gray-400 hover:text-green-900' : null,
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
        },
        rounded: {
            type: Boolean,
            required: false
        }
    },
    computed: {
        buttonBackground() {
            return this.color ? `bg-${this.color.toLowerCase()}-400 hover:bg-${this.color.toLowerCase()}-500` : null;	
        }
    }
}
</script>