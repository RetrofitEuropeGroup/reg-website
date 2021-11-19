<template>
    <div @click="$emit('click', $event)" class="table px-3 py-1 text-sm font-medium transition-all duration-75 ease-linear bg-opacity-75 rounded cursor-pointer whitespace-nowrap" :class="tagClass">
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
    },
    computed: {
        tagClass() {
            if(this.color) {
                return `bg-${this.color.toLowerCase()}-100 text-${this.color.toLowerCase()}-500 hover:bg-opacity-100`;	
            }
            else {
                return 'bg-transparent text-gray-500 hover:text-gray-700';
            }
        }
    }
}
</script>