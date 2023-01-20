<template>
  <div
    id="about"
    class="container-2xl dark:text-white dark:bg-gray-900 scroll-section"
  >
    <div class="section-title font-bold text-center py-10 text-4xl">
      <font-awesome-icon class="text-purple-500" :icon="['fas', 'user']" />
      <span> O mnie</span>
    </div>
    <div id="about-text" class="text-center text-xl pb-10 mx-20">
      <p class="mb-4">
        Od 4 lat zajmuje się hobbistycznie webdev'em, zdobywając praktyczną
        wiedzę w pracowaniu z frameworkami takimi jak Vue.js i React.
      </p>
      <p class="mb-4">
        Czerpię przyjemność z rozszerzania moich umiejętności jako web developer
        oraz wymyślania rozwiązań do różnorodnych problemów, które się pojawiają
        podczas pracy nad moimi projektami.
      </p>
      <p class="mb-4">
        Od 2017 roku jestem też jednym z głównych organizatorów wydarzenia
        charytatywnego
        <a class="text-purple-500 hover:text-purple-800" href="https://gsps.pl"
          >"Gramy Szybko, Pomagamy Skutecznie"</a
        >
        (oraz członkiem zarządu fundacji związanej z tym wydarzeniem). Mój
        zakres obowiązków to utrzymanie strony oraz przygotowanie grafik, które
        zostaną użyte podczas organizowanych wydarzeń.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>
