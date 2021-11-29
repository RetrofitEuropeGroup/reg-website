<template>
    <div class="w-full px-2 py-1 rounded-md group">
        <div class="flex items-center p-2 space-x-2 rounded-md group-hover:bg-gray-100">
            <div class="flex items-center justify-center w-8 h-8 p-2 text-white rounded-md fill-current" 
                :class="[`bg-${color}-${amount}`]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </div>
            <div class="group-hover:opacity-100">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavigationDropdowmItem',
    props: {
        color: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        }
    }
}
</script>