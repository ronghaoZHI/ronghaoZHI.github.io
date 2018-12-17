<template>
  <div class="article">
    <h3>POSTS</h3>
    <section>
      <div class="items"  v-for="item in data.content">
        <div class="item">
          <span class="item-time">{{item.time}}</span>
          <h3 class="item-title"><a :href=item.url>{{item.title}}</a></h3>
          <img class="item-img" v-if="item.img" :src="item.img" alt="">
          <p class="item.describe">{{item.describe}}</p>
          <span class="itme-schema">{{item.schema}}</span>
          <a class="item-look" v-if="item.url.indexOf('://')===-1" :href="item.url">查看全文</a>
          <a class="item-look" v-else :target="item.url" :href="item.url">查看全文</a>
        </div>
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

<style lang="less">
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
    .items {
      position: relative;
      height: 150px;
      box-sizing: border-box;
      padding: 5px;
      margin-top: 20px;
      width: 49%;
      min-width: 320px;
      .item {
        box-shadow: -5px -5px 3px #888888;
        position: relative;
        background-color: #dddcd71a;
        height: 100%;
        padding: 5px;
         &:hover {
            transform: scale(1.01, 1.01);
          }
        .item-title {
          position: relative;
          margin-top: 30px;
          &>a {
            position: relative;
            background-color: transparent;
            outline: 0;
            &:after {
              box-sizing: border-box;
              display: block;
              content: "";
              position: absolute;
              width: 100%;
              height: 2px;
              bottom: 0;
              left: 0;
              background-color: #3F51B5;
              visibility: hidden;
              transform: scaleX(0);
              transition: .4s ease-in-out;
            }
          }
        }
        .item-time {
          font-size: 0.9rem;
          display: block;
          position: absolute;
          left: 15px;
          color: #727272;
          line-height: 20px;
          font-weight: bold;
        }
        .item-look {
          margin: auto;
          display: block;
          width: 100px;
          color: #fff;
          background-color: #3F51A6;
        }
      }
    }
  }

  @media screen and (max-width: 710px) {
    .article .items {
      margin-top: 20px;
      margin: auto;
    }
  }

</style>
