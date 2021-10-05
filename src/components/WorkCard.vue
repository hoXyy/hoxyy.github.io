<template>
    <a :href="href" class="pb-5">
        <div id="card" class="transition duration-150 ease-in-out transform-gpu hover:-translate-y-2 filter drop-shadow-2xl rounded-xl bg-white dark:bg-gray-900 dark:text-white text-center">
            <img :alt="alt" :src="require('@/assets/work/' + img + '')" class="mb-5 rounded-t-xl"/>
            <span class="font-bold text-2xl">{{ title }}</span>
            <p class="text-md text-gray-600 dark:text-gray-300">{{ desc }}</p>
            <div id="tags" class="flex bottom-1 left-1 absolute">
                <span v-for="tag in tags" :class="tag.classes" class="pill" :key="tag.name">
                    {{ tag.name }}
                </span>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    name: 'WorkCard',
    props: ['title', 'img', 'tags', 'desc', 'href', 'alt']
}
</script>

<style>
    #card {
        width: 350px;
        height: 370px;
    }

    .pill {
        @apply rounded-xl text-sm mx-1 my-1 p-2;
    }
</style>