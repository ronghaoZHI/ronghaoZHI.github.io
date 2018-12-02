<template>
  <div class="article">
    <section class="item" v-for="item in data.content">
      <a :href="data.url">{{item.title}}</a>
    </section>
  </div>
</template>
<script>
export default {
  computed: {
    data() {
      return this.$page.frontmatter
    },  
  }
}
</script>
<style>
  .article {
    position: relative;
    width: 80%;
    margin: 50px auto;
    text-align: center;
  }
  .article .item {
    margin: 20px 0;
  }
</style>
