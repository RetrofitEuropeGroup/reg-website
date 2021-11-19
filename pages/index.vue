<template>
  <div>
    <div class="p-6 mx-auto lg:p-0 2xl:max-w-screen-xl 3xl:max-w-screen-2xl lg:grid lg:grid-cols-12 2xl:py-0 2xl:pt-10 2xl:pb-24 3xl:py-28">
      <div class="flex flex-col items-start justify-center col-span-5 mb-10 lg:mb-0">
        <ProjectTag class="mb-5" color="yellow">
          Built Environment
        </ProjectTag>
        <h1 class="text-2xl font-semibold leading-normal 3xl:leading-normal 3xl:text-5xl 2xl:text-3xl">
          Europees marktonderzoek naar industriële renovaties
        </h1>
        <p class="max-w-lg my-5 text-xs font-medium leading-loose text-gray-500 lg:text-sm 3xl:text-base">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
        </p>
        <div class="flex">
          <Button color="green">
            Check het project
          </Button>
          <Button>
            Of neem direct contact op
          </Button>
        </div>
      </div>
      <div class="lg:col-start-7 lg:col-end-13">
        <div class="relative">
          <img class="relative z-20 object-cover w-full rounded-lg h-rem-20 2xl:h-rem-30 3xl:h-rem-40" src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80">
          <div class="absolute inset-0 z-10 items-end hidden w-full h-full px-4 py-2 transform bg-green-500 rounded-lg lg:flex 3xl:px-5 3xl:py-5 translate-x-14 translate-y-14 3xl:translate-x-20 3xl:translate-y-20">
            <a href="#" class="flex items-center space-x-3 group">
              <div class="w-10 h-10 p-1 bg-white rounded-full bg-opacity-70">
                <img class="object-cover rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
              </div>
              <div>
                <p class="text-xs leading-none tracking-wide text-white text-opacity-70">contactpersoon:</p>
                <span class="text-xs font-medium leading-none text-white 3xl:text-sm group-hover:underline">Rogier Laterveer</span>
              </div>
            </a>
          </div>
        </div> 
      </div>
    </div>
    <div>
      <div class="sticky top-0 w-full py-6 space-x-5 bg-white shadow-xl">
        <div class="flex max-w-4xl ml-5 overflow-auto lg:justify-center scrollbar-hide lg:scrollbar-default">
          <ProjectTag v-for="category in categories" 
            :key="category.id"
            :color="activeCategory.id == category.id ? category.color : null"
            @click="activeCategory = category">
              {{ category.name }}
          </ProjectTag>
        </div>
      </div>
      <div class="py-10 mx-auto lg:grid-cols-3 2xl:max-w-screen-xl 3xl:max-w-screen-2xl lg:grid lg:gap-8">
        <ProjectCard 
          class="p-6 lg:p-0"
          v-for="index in 14" :key="index"
          title="Ontwikkelen van bouwtechnische classificatiemethoden van laagbouw" 
          description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.">
            <img class="object-cover w-full h-auto rounded-md" src="https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"/>
        </ProjectCard>
      </div>
    </div>
  </div>

</template>

<script>
import Button from '../components/base/Button';
import ProjectTag from '../components/project/ProjectTag';
import ProjectCard from '../components/project/ProjectCard';

export default {
  name: 'index',
  data() {
    return {
      activeCategory: {
        id: 0,
        name: 'All',
        color: 'gray'
      },
      categories: [
        {
          id: 0,
          name: 'All',
          color: 'gray'
        },
        {
          id: 1,
          name: 'Build Environment',
          color: 'yellow'
        },
        {
          id: 2,
          name: 'CMD',
          color: 'green'
        },
        {
          id: 3,
          name: 'Commerciële Economie',
          color: 'red'
        }
      ]
    }
  },
  components: {
    Button,
    ProjectTag,
    ProjectCard
  }
}
</script>