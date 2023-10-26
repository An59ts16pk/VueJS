<template>
  <HeadComponent/>
  <InternoComponent/>
  <BlogComponent/>
  <BlogdetailsComponent/>
  <ProjectComponent/>
  <ProjectDetailsComponent/>
</template>

<script>
import HeadComponent from './components/HeadComponent.vue';
import InternoComponent from './components/InternoComponent.vue';
import BlogComponent from './components/BlogComponent.vue';
import BlogdetailsComponent from './components/BlogdetailsComponent.vue';
import ProjectComponent from './components/ProjectComponent.vue';
import ProjectDetailsComponent from './components/ProjectDetailsComponent.vue';

export default {
  components: {
    HeadComponent,
    InternoComponent,
    BlogComponent,
    BlogdetailsComponent,
    ProjectComponent,
    ProjectDetailsComponent,
  },
};
</script>

<!-- <style lang="scss">
</style> -->
