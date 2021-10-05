<template>
    <div id="work" class="container-2xl bg-gray-100 dark:bg-gray-800 dark:text-white scroll-section">
        <div class="section-title font-bold pt-10 text-center pb-10 text-4xl">
            <font-awesome-icon class="text-purple-500" :icon="['fas', 'file-alt']"/>
            <span> Moje projekty</span>
        </div>
        <div id="cards" class="flex flex-row flex-wrap justify-center gap-5">
            <work-card 
                v-for="project in projects"
                :key="project.title"
                :img="project.img"
                :title="project.title"
                :desc="project.desc"
                :href="project.href"
                :tags="project.tags"
            />
        </div>
    </div>
</template>

<script>
import WorkCard from '../WorkCard.vue'

export default {
    name: 'Work',
    components: { WorkCard },
    data: function() {
        return {
            projects: [
                {
                    img: 'gsps.jpg',
                    alt: 'GSPS.pl',
                    title: 'GSPS.pl',
                    desc: 'Strona główna wydarzenia charytatywnego "Gramy Szybko, Pomagamy Skutecznie"',
                    href: 'https://gsps.pl',
                    tags: [
                        {name: 'React', classes: ['bg-blue-600' ,'text-white']},
                        {name: 'Next.js', classes: ['bg-gray-100', 'text-black']},
                        {name: 'Reactstrap', classes: ['bg-gray-700', 'text-white']}
                    ]
                },
                {
                    img: 'gsps-layouty-old.jpg',
                    alt: 'Grafiki GSPS (2019 - 2021)',
                    title: 'Grafiki GSPS (2019 - 2021)',
                    desc: 'Oparte na grafikach używanych podczas "Awesome Games Done Quick 2018"',
                    href: 'https://www.youtube.com/playlist?list=PLGZ-4E5LK_p0SEHmt-BJ0XmLXxqA8ADSq',
                    tags: [
                        {name: 'Polymer', classes: ['bg-red-500', 'text-white']}
                    ]
                },
                {
                    img: 'bingo.jpg',
                    alt: 'Bingo Sheet File Generator',
                    title: 'Bingo Sheet File Generator',
                    desc: 'Narzędzie do generowania pliku z arkuszem bingo',
                    href: 'https://bingo-sheet-file-generator.herokuapp.com/',
                    tags: [
                        {name: 'Vue.js', classes: ['bg-green-500', 'text-white']},
                        {name: 'Vuetify', classes: ['bg-gray-700', 'text-white']}
                    ]
                },
                {
                    img: 'portfolio.jpg',
                    alt: 'Osobista strona',
                    title: 'Osobista strona',
                    desc: 'Strona, na której obecnie jesteś!',
                    href: '#top',
                    tags: [
                        {name: 'Vue.js', classes: ['bg-green-500', 'text-white']},
                        {name: 'Tailwind CSS', classes: ['bg-gray-700', 'text-white']}
                    ]
                }
            ]
        }
    }
}
</script>