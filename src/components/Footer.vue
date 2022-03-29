<template>
    <div id="footer" class="bg-gray-900 container-2xl">
        <div id="social" class="flex h-12 gap-5 justify-center items-center text-white text-2xl">
            <a title="Mój GitHub" href="https://github.com/hoXyy">
               <font-awesome-icon class="hover:text-gray-300" :icon="['fab', 'github']"/>         
            </a>
            <a title="Mój Twitter" href="https://twitter.com/hoXyy_">
               <font-awesome-icon class="hover:text-gray-300" :icon="['fab', 'twitter']"/>         
            </a>
            <a title="Kontakt mailowy" href="mailto:paw.zatoka@protonmail.com">
               <font-awesome-icon class="hover:text-gray-300" :icon="['fas', 'envelope']"/>         
            </a>
        </div>
        <div id="divider-div" class="grid w-full justify-items-center">
            <span id="divider" class="bg-gray-700 w-11/12 h-0.5"/>
        </div>
        <div id="madewith" class="flex h-12 justify-center items-center text-white">
            © {{ new Date().getFullYear() }}&nbsp;-&nbsp;<a href="https://github.com/hoXyy/hoxyy.github.io" class="hover:text-gray-300">Wykonano przy użyciu &nbsp;<font-awesome-icon class="text-green-500 text-xl" :icon="['fab', 'vuejs']"/>&nbsp; Vue.js</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>

</style>