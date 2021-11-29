<template>
    <div @click="$emit('click', $event)" 
        :class="[
            color === 'gray' ? 'bg-gray-100 text-gray-500 hover:bg-opacity-100' : null,
            color === 'red' ? 'bg-red-100 text-red-500 hover:bg-opacity-100' : null,
            color === 'yellow' ? 'bg-yellow-100 text-yellow-500 hover:bg-opacity-100' : null,
            color === 'green' ? 'bg-green-100 text-green-500 hover:bg-opacity-100' : null,
            color === 'blue' ? 'bg-blue-100 text-blue-500 hover:bg-opacity-100' : null,
            color === 'indigo' ? 'bg-indigo-100 text-indigo-500 hover:bg-opacity-100' : null,
            color === 'purple' ? 'bg-purple-100 text-purple-500 hover:bg-opacity-100' : null,
            color === 'pink' ? 'bg-pink-100 text-pink-500 hover:bg-opacity-100' : null,
            !color ? 'bg-transparent text-gray-500 hover:text-gray-700' : null,
        ]"
        class="table px-2 py-1 text-xs font-medium transition-all duration-75 ease-linear bg-opacity-75 rounded cursor-pointer 3xl:text-sm whitespace-nowrap">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'ProjecTag',
    props: {
        color: {
            type: String,
            required: false
        }
    }
}
</script>