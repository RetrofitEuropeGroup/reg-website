<template>
<div class="pt-10">
    <h1 class="text-2xl font-semibold leading-normal text-center 2xl:leading-normal 3xl:leading-relaxed 2xl:text-6xl">
        <span>Help us change the way the</span>
        <br>
        <span>world builds amazing apps.</span>
    </h1>
    <p class="max-w-2xl mx-auto mt-5 mb-10 text-base font-medium leading-8 tracking-wider text-center text-opacity-50">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis purus eu eros condimentum finibus. Nunc sodales urna sed nisi consectetur sagittis. Donec et posuere lorem. In a sollicitudin elit. Ut fringilla dictum.
    </p>
    <div class="flex justify-center">
        <Button color="green" rounded>Check open opdrachten</Button>
    </div>
    <div class="grid grid-cols-4 gap-10 my-36">
        <div class="aspect-w-1 aspect-h-1">
            <img src="https://res.cloudinary.com/pitch-software/image/upload/f_auto/website-images/jobs/picnic.jpg" class="object-cover object-center w-full h-full rounded-r-md lg:w-full lg:h-full" />
        </div>
        <div class="aspect-w-1 aspect-h-1">
            <img src="https://res.cloudinary.com/pitch-software/image/upload/f_auto/website-images/jobs/picnic.jpg" class="object-cover object-center w-full h-full rounded-md lg:w-full lg:h-full" />
        </div>
        <div class="aspect-w-1 aspect-h-1">
            <img src="https://res.cloudinary.com/pitch-software/image/upload/f_auto/website-images/jobs/picnic.jpg" class="object-cover object-center w-full h-full rounded-md lg:w-full lg:h-full" />
        </div>
        <div class="aspect-w-1 aspect-h-1">
            <img src="https://res.cloudinary.com/pitch-software/image/upload/f_auto/website-images/jobs/picnic.jpg" class="object-cover object-center w-full h-full rounded-l-md lg:w-full lg:h-full" />
        </div>
    </div>
    <section class="bg-gray-50 lg:py-28">
        <div class="flex justify-center space-x-5">
            <div class="px-5 py-3 text-sm font-semibold tracking-wide text-gray-700 border-2 border-gray-300 rounded-full cursor-pointer">
                All
            </div>
            <div class="px-5 py-3 text-sm font-semibold tracking-wide text-gray-700 border-2 border-gray-300 rounded-full cursor-pointer" v-for="category in categories" :key="category">
                Built enviroment
            </div>
        </div>
        <div class="grid grid-cols-1 gap-10 p-6 mx-auto mt-28 mt lg:p-0 lg:grid-cols-3 3xl:grid-cols-4 lg:max-w-6xl 3xl:max-w-full 3xl:px-40">
            <nuxt-link to="/projects/1">
                <ProjectCard color="yellow" category="Built Enviroment" contact="Rogier Laterveer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 7H7v6h6V7z" />
                        <path fill-rule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clip-rule="evenodd" />
                    </svg>
                </ProjectCard>
            </nuxt-link>
        </div>
    </section>
    <section class="lg:py-28">
        <div class="max-w-6xl mx-auto 3xl:max-w-full 3xl:px-40">
            <div class="grid grid-cols-2 gap-20">
                <div class="aspect-w-1 aspect-h-1">
                    <img alt="tech drawing" src="https://www.hu.nl/-/media/hu/afbeeldingen/headers/education/voltijd/natuur-en-techniek/werktuigbouwkunde-bachelor-voltijd-header-hero.ashx" class="object-cover object-center w-full h-full rounded-md lg:rounded-xl">
                </div>
                <div class="flex flex-col justify-center">
                    <h1 class="mb-6 text-2xl font-semibold leading-normal 2xl:leading-normal 3xl:leading-relaxed 2xl:text-5xl">Passie voor ons mooie vak.</h1>
                    <p class="text-sm font-medium leading-loose tracking-wider text-gray-500">
                        We ontdekten de digitale wereld door te onderzoeken maar vooral ook door te doen. Openheid en samen beter worden vormen de kern van onze bedrijfscultuur en dat maakt dat je op ons kunt rekenen als je een online platform of mobiele app wilt laten maken, in een samenwerking waarin het proces net zo belangrijk is als het eindresultaat. We maken het complexe simpel. Een mobiele app of online platform dat goed werkt, de bedrijfsprocessen vereenvoudigt en vooral veel gemak biedt aan de eindgebruiker - als we dat kunnen bereiken, dan kunnen we trots zijn op het eindresultaat!
                    </p>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import Button from '../../components/base/Button';
import ProjectTag from '../../components/project/ProjectTag';
import ProjectCard from '../../components/project/ProjectCard';

export default {
    name: 'Projects',
    transition: "fade",
    data() {
        return {
            categories: [0, 1, 2, 3]
        }
    },
    components: {
        Button,
        ProjectTag,
        ProjectCard
    }
}
</script>
