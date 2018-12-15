<template>
  <div class="article">
    <h3>POSTS</h3>
    <section>
      <div class="item"  v-for="item in data.content">
          <h3 class="item-title">{{item.title}}</h3>
          <img class="item-img" v-if="item.img" :src="item.img" alt="">
          <p class="item.describe">{{item.describe}}</p>
          <span class="itme-schema">{{item.schema}}</span>
          <span class="item-time">{{item.time}}</span>
          <a class="item-look" v-if="item.url.indexOf('://')===-1" :href="item.url">查看全文</a>
          <a class="item-look" v-else :target="item.url" :href="item.url">查看全文</a>
      </div>
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
    width: 90%;
    margin: auto;
    text-align: center;
  }
  .article section {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .article .item {
    margin-top: 20px;
    width: 49%;
    min-width: 320px;
  }
  @media screen and (max-width: 710px) {
    .article .item {
      margin-top: 20px;
      margin: auto;
    }
  }
  .item-look {
  }
</style>
