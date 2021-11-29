<template>
<div class="flex flex-col items-center justify-center w-full mt-14">
    <h1 class="mb-5 text-2xl font-semibold leading-normal text-center 2xl:leading-normal 3xl:leading-relaxed 2xl:text-6xl">
        <span class="fadeIn a-duration-500 a-delay-100">De Retrofit homepage.</span>
        <br>
        <span class="text-green-500 fadeIn a-duration-500 a-delay-300">Coming soon.</span>
    </h1>
    <p class="text-base font-medium leading-8 tracking-wider text-center text-opacity-50">
        <span>Binnenkort zal de Retrofit homepage en de vernieuwde webapplicatie beschikbaar zijn.</span>
        <br />
        <span>Bij ons willen aansluiten? Bekijk onze beschikbare <nuxt-link class="text-green-500 hover:underline" to="/projects">projecten.</nuxt-link></span>
    </p>
    <div class="fixed bottom-0 left-0 w-full">
        <div class="absolute flex flex-col items-center cursor-pointer left-20 group fadeIn a-duration-500 a-delay-300"> 
            <p class="w-48 mb-10 text-xl transform -rotate-30 font-handwrite group-hover:text-green-500">Ook willen specialiseren in 3D modelleren? Check nu de opdracht gericht op GIS</p>
            <svg class="h-auto text-black stroke-current w-14 group-hover:text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 35">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5">
                    <path d="M48.569 27.616c-4.254-4.052-15.443 2.992-20.225 3.767-18.011 2.916-23.035-13.832-27.109-28.1" />
                    <path stroke-linejoin="round" d="M41.907 31.488c3.811-2.175 7.875-.701 11.857-2.026-2.17-2.355-6.355-7.329-6.883-10.66" />
                </g>
            </svg>
        </div>
        <svg class="mx-auto text-green-400 fill-current h-52" xmlns="http://www.w3.org/2000/svg" overflow="hidden" viewBox="0 0 1252 213">
            <defs>
                <clipPath id="a">
                    <path d="M7 229h1252v213H7z" />
                </clipPath>
            </defs>
            <g clip-path="url(#a)" transform="translate(-7 -229)">
                <path d="M8.123 552.999h1249.751c0-178.94-279.642-324-624.693-324-345.415 0-625.058 145.06-625.058 324z" />
            </g>
        </svg>
    </div>
</div>
</template>

<script>
export default {
    name: 'index',
    transition: "fade"
}
</script>
