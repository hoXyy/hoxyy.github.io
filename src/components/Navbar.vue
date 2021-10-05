<template>
    <transition enter-active-class="animate__animated animate__fadeInDown" appear>
        <div id="navbar" style="z-index: 99" :class="{ 'opacity-70': scrolled }" class="right-0 border rounded-xl filter drop-shadow-xl border-transparent fixed float-right max-w-screen-sm m-4 p-2 text-xl bg-white dark:text-white dark:bg-gray-700">
            <span @mouseover="showHomeLabel = true" @mouseleave="showHomeLabel = false" @click="scrollToTop" :class="{ 'active': currentSection === 1 }" class="text-center cursor-pointer h-full mr-2 px-2 rounded-md hover:bg-gray-400 hover:text-white">
                <font-awesome-icon :class="{ 'mr-2': currentSection === 1 || showHomeLabel }" :icon="['fas', 'home']"/>
                <span v-if="currentSection === 1 || showHomeLabel" class="text-base">Strona główna</span>          
            </span>
            <span @mouseover="showAboutLabel = true" @mouseleave="showAboutLabel = false"  :class="{ 'active': currentSection === 2 }" @click="scrollToAbout" class="cursor-pointer h-full mr-2 px-2 rounded-md hover:bg-gray-400 hover:text-white">
                <font-awesome-icon :class="{ 'mr-2': currentSection === 2 || showAboutLabel}" :icon="['fas', 'user']"/>
                <span v-if="currentSection === 2 || showAboutLabel" class="text-base">O mnie</span>            
            </span>
            <span @mouseover="showWorkLabel = true" @mouseleave="showWorkLabel = false"  :class="{ 'active': currentSection === 3 }" @click="scrollToWork" class="cursor-pointer h-full px-2 rounded-md hover:bg-gray-400 hover:text-white">
                <font-awesome-icon  :class="{ 'mr-2': currentSection === 3 || showWorkLabel }" :icon="['fas', 'file-alt']"/>
                <span v-if="currentSection === 3 || showWorkLabel" class="text-base">Projekty</span>            
            </span>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Navbar',
    props: ['currentSection'],
    data() {
        return {
            scrolled: false,
            showHomeLabel: false,
            showAboutLabel: false,
            showWorkLabel: false
        }
    },
    methods: {
        handleScroll() {
            this.scrolled = window.scrollY > 150;
        },
        scrollToTop() {
            document.querySelector('#top').scrollIntoView({behavior: 'smooth', block: 'start'});
        },
        scrollToAbout() {
            document.querySelector('#about').scrollIntoView({behavior: 'smooth', block: 'start'});
        },
        scrollToWork() {
            document.querySelector('#work').scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style scoped>
    .active {
        @apply bg-gray-800 text-white dark:bg-white dark:text-black
    }
</style>
