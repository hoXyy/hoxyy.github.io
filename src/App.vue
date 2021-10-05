<template>
  <div id="content">
    <Navbar :currentSection="currentSection" />
    <Landing />
    <About />
    <Work />
    <Footer/>   
  </div>


</template>

<script>
import Navbar from './components/Navbar.vue'
import Landing from './components/sections/Landing.vue'
import About from './components/sections/About.vue'
import Work from './components/sections/Work.vue'
import Footer from './components/Footer.vue'

export default {
  components: { Navbar, Landing, About, Work, Footer },
  name: 'App',
  data: function() {
    return {
      sections: [],
      currentSection: 1
    }
  },
  mounted() {
    const sections = document.getElementsByClassName('scroll-section');
    for (let section of sections) {
      const sectionH = section.offsetHeight;
      const sectionT = section.offsetTop - (window.innerWidth >= 1023 ? 74 : 52);
      const sectionID = section.getAttribute("id");
      this.sections.push({
        el: section,
        id: sectionID,
        height: sectionH,
        top: sectionT
      })
    }

    this.handleScroll();
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);   
  },
  methods: {
    handleResize() {
      this.sections.forEach(section => {
        let el = section.el;

        const sectionH = el.offsetHeight;
        const sectionT = el.offsetTop - (window.innerWidth >= 1023 ? 74 : 52);

        section.height = sectionH;
        section.top = sectionT;
      })

      this.handleScroll();
    },
    handleScroll() {
      let scrollY = window.pageYOffset;
      for (let i = 0; i < this.sections.length; i++) {
        const section = this.sections[i];
        if (scrollY > section.top && scrollY <= section.top + section.height) {
          this.currentSection = i + 1;
          break;
        }
      }
    }
  }
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
