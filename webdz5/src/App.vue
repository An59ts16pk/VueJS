<template>
  <InternoComponent/>
  <BlogComponent/>
  <BlogdetailsComponent/>
</template>

<script>
import BlogComponent from './components/BlogComponent.vue';
import BlogdetailsComponent from './components/BlogdetailsComponent.vue';
import InternoComponent from './components/InternoComponent.vue';

export default {
  components: {
    InternoComponent,
    BlogComponent,
    BlogdetailsComponent,
  },
};
</script>

<style lang="scss" scoped>

</style>
