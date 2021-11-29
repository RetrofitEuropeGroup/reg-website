<template>
    <div class="relative overflow-hidden transition-shadow duration-75 ease-linear bg-white rounded-md shadow-lg cursor-pointer hover:shadow-xl aspect-w-1 aspect-h-1">
        <div class="p-10">
            <p class="my-3 text-xs font-semibold tracking-widest text-gray-700 uppercase">opdracht:</p>
            <h1 class="mb-3 text-base font-semibold leading-relaxed tracking-wide lg:mb-6 3xl:text-lg">Ontwikkelen van bouwtechnische classificatiemethoden van laagbouw</h1>
            <ProjectTag :color="color">
                {{ category }}
            </ProjectTag>
            <!-- <div class="flex items-center space-x-2 text-gray-300 fill-current mt-7">
                <svg class="w-5 h-5" viewBox="0 0 80 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M60 70L20 70C17.7909 70 16 68.2091 16 66C16 59.3836 20.1048 53.4615 26.3003 51.1395L27.5304 50.6785C35.5704 47.6651 44.4296 47.6651 52.4696 50.6785L53.6997 51.1395C59.8952 53.4615 64 59.3836 64 66C64 68.2091 62.2091 70 60 70Z" stroke="none" stroke-width="4" stroke-linecap="square" stroke-linejoin="round" />
                    <path d="M33.9015 38.8673C37.7294 40.8336 42.2706 40.8336 46.0985 38.8673C49.6611 37.0373 52.2136 33.7042 53.0516 29.7878L53.2752 28.7425C54.1322 24.7375 53.2168 20.5576 50.7644 17.2774L50.4053 16.797C47.9525 13.5163 44.0962 11.5845 40 11.5845C35.9038 11.5845 32.0475 13.5163 29.5947 16.797L29.2356 17.2774C26.7832 20.5576 25.8678 24.7375 26.7248 28.7425L26.9484 29.7878C27.7864 33.7042 30.3389 37.0373 33.9015 38.8673Z" stroke="none" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span class="text-xs font-semibold tracking-widest uppercase">Rogier Laterveer</span>
            </div> -->
            <!-- <div>
                <div class="flex items-center mb-5 space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-xs font-medium tracking-wider text-gray-400">{{ contact }}</span>
                </div>
                <h1 class="text-lg font-semibold tracking-wide text-gray-700">
                    Ontwikkelen van bouwtechnische classificatiemethoden van laagbouw
                </h1>
                <div class="flex mt-10">
                    <Button color="yellow">meer info</Button>
                </div>
            </div> -->
            <div class="absolute bottom-0 left-0 flex items-center justify-between w-full">
                <div class="absolute -bottom-5 -left-5" :class="[
                        color === 'gray' ? 'text-gray-200' : null,
                        color === 'red' ? 'text-red-200' : null,
                        color === 'yellow' ? 'text-yellow-200' : null,
                        color === 'green' ? 'text-green-200' : null,
                        color === 'blue' ? 'text-blue-200' : null,
                        color === 'indigo' ? 'text-indigo-200' : null,
                        color === 'purple' ? 'text-purple-200' : null,
                        color === 'pink' ? 'text-pink-200' : null,
                        !color ? 'text-gray-200' : null,
                    ]">
                        <slot/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '../base/Button';
import ProjectTag from '../project/ProjectTag';

export default {
    name: 'ProjectCard',
    components: {
        Button,
        ProjectTag
    },
    props: {
        color: {
            type: String,
            required: false
        },
        contact: {
            type: String,
            required: false
        },
        category: {
            type: String,
            required: true
        }
    }
}
</script>