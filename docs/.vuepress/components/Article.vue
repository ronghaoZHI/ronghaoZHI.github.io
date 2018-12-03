<template>
  <div class="article">
    <section class="item" v-for="item in data.content">
      <h3 class="item-title">{{item.title}}</h3>
      <img class="item-img" v-if="item.img" :src="item.img" alt="">
      <p class="item.describe">{{item.describe}}</p>
      <span class="itme-schema">{{item.schema}}</span>
      <span class="item-time">{{item.time}}</span>
      <a class="item-look" :href="$withBase(item.url)">查看全文</a>
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
    margin-top: 20px;
  }
</style>
