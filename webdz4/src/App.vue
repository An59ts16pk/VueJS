<template>
  <InternoComponent/>
  <BlogComponent/>
  <BlogdetailsComponentVue/>
</template>


<script>
import InternoComponent from './components/InternoComponent.vue';
import BlogComponent from './components/BlogComponent.vue';
import BlogdetailsComponentVue from './components/BlogdetailsComponent.vue';

export default {
  
  components: {InternoComponent, BlogComponent, BlogdetailsComponentVue}
}
</script>

<style lang="scss"></style>
