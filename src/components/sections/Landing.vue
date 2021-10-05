<template>
    <div id="top" class="flex container-2xl bg-gray-100 dark:bg-gray-800 dark:text-white scroll-section">
        <transition name="fade" appear>
            <div id="greeting" class="py-64 md:py-76 lg:py-80 xl:py-96 pl-16 md:pl-36 font-bold">
                <p class="text-5xl mr-5 mb-2">Cześć, jestem <span class="text-purple-500">Paweł</span>!</p>
                <p class="text-md mr-5">Znany jestem też w kręgach internetowych jako <span class="text-purple-500">hoxi</span>.</p>
            </div>
        </transition>

    </div>
</template>

<script>
export default {
    name: 'Landing'
}
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 1s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>