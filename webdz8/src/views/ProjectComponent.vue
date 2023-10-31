<template>
    <HeaderComponent/>

    <section class="projectbanner center">
        <div class="blogbanner__content">
            <div class="blogbanner__title">
                <h1 class="blogbanner__heading">Our Project</h1>
                <ul class="blogbanner__breadcrumbs">
                    <li class="blogbanner__breadcrumb">
                        <router-link class="blogbanner__link" to="/">Home</router-link>
                    </li>
                    <li class="blogbanner__breadcrumb">
                        <router-link class="blogbanner__link" to="/project">Project</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section class="projects center">
        <p class="projects__display">{{ startChangeCategory }}</p>
        <!-- categories -->
        <div class="projects__categories">
            <button v-for="button in buttons" :key="button.id" 
              @click="changeCategory(button.id)" type="button" 
              :class="['projects__button', button.id === buttonIsActive ? 'projects__button_active' : false]">
                {{button.title}}
            </button>
        </div>
        
        <!-- projects -->
        <div class="projects__box">
            <div v-for="item in displayedCards" :key="item.id" class="projects__project">
                <div class="projects__starbox">
                    <svg v-if="item.flag" class="projects__star" width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_993_156)">
                            <path d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z" fill="#FFA928"/>
                        </g>
                        <defs>
                            <filter id="filter0_d_993_156" x="0.186424" y="0.431396" width="35.6271" height="34.3619" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_993_156"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_993_156" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
                <img @click="changeStar(item.id)" class="projects__img" :src="item.src" alt="photo project">
                <div class="projects__content">
                    <div class="projects__info">
                        <h2 class="projects__heading">{{ item.heading }}</h2>
                        <p class="projects__text">{{ item.paragraph }}</p>
                    </div>
                    <router-link class="projects__projectlink" to="/projectdetails">
                        <svg class="projects__icon" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </router-link>
                </div>
            </div>
        </div>
        <!-- pagination -->
        <div class="projects__pagination">
            <Pagination :totalNumberPaginationPages="setTotalNumberOfPages()" :currentPage="currentPage"
                @pagechanged="changeCurrentPage" />
        </div>

    </section>

    <FooterComponent/>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import Pagination from '../components/Pagination.vue';
import { mapGetters } from 'vuex';
import { useHead } from '@vueuse/head';

    export default {
        name: 'Project',
        components: { HeaderComponent, FooterComponent, Pagination },
        setup() {
            useHead({
                title: 'Project',
                meta: [{
                    name: 'Project',
                    content: 'Страница проектов сайта',
                },],
            });
        },

        data() {
            return {
                headTitle: "Project",

                buttonActive: 1,
                buttonIsActive: 'bathroom',
                buttons: [
                    { id: "bathroom", idflag: 1, title: "Bathroom" },
                    { id: "bedroom", idflag: 2, title: "Bed Room" },
                    { id: "kitchan", idflag: 3, title: "Kitchan" },
                    { id: "livingarea", idflag: 4, title: "Living Area" },
                ],
                basketCards: [],

                currentPage: 1,
                cardsOnPage: 8,
                currentCategoryList: [],
            }
        },

        methods: {
            changeStar(id) {
                const index = id;
                this.currentCategoryList.forEach((project) => {
                    if (index === project.id && !this.basketCards.includes(index)) {
                        project.flag = true;
                        this.basketCards.push(project.id);
                    } else if (index === project.id && this.basketCards.includes(index)) {
                        project.flag = false;
                        this.basketCards = this.basketCards.filter(e => e !== index);
                    }
                });
            },
            setTotalNumberOfPages() {
                return Math.ceil(this.currentCategoryList.length / this.cardsOnPage);
            },
            paginateListOfCards(currentCategoryList) {
                const newList = currentCategoryList;
                console.log(newList);
                let page = this.currentPage;
                let perPage = this.cardsOnPage;
                let from = (page * perPage) - perPage;
                let to = (page * perPage);
                return newList.slice(from, to);
            },
            changeCurrentPage(page) {
                console.log(page)
                this.currentPage = page;
            },
            changeCategory(id) {
                const buttonId = id;
                this.currentCategoryList = [];
                this.getListProjects.forEach(category => {
                    if (category.idtitle === buttonId) {
                        this.buttonIsActive = buttonId;
                        return this.currentCategoryList.push(category);
                    }
                });
            },
        },

        computed: {
            ...mapGetters(['getListProjects']),

            displayedCards() {
                return this.paginateListOfCards(this.currentCategoryList);
            },
            startChangeCategory() {
                this.currentCategoryList = [];
                this.getListProjects.forEach(category => {
                    if (category.idtitle === this.buttonIsActive) {
                        this.currentCategoryList.push(category);
                    }
                    return this.currentCategoryList;
                });
            },
            
        },
    }
</script>

<style lang="scss" scoped>
</style>