<template>
    <div class="cursor-pointer group">
        <slot/>
        <div class="mt-4">
            <h2 class="text-lg font-semibold leading-normal lg:leading-normal">{{ title }}</h2>
            <p class="w-5/6 my-3 text-sm leading-normal tracking-wide text-gray-500 lg:leading-normal line-clamp-3">{{ description }}</p>
            <a class="text-sm font-medium leading-normal tracking-wide text-gray-800 group-hover:underline lg:leading-normal line-clamp-3" href="#">Check het project</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
}
</script>