<template>
  <div class="home">
    <div class="wrap">
      <div class="avatar">
        <img :src="$withBase(data.avatar)" alt="">
      </div>
      <div class="head">
        <span>
          {{data.head}}
        </span>
      </div>
       <div class="describe">
        <span>
          {{data.describe}}
        </span>
      </div>
      <div class="skill">
        <p>技术图谱</p>
        <ul class="skill-ul" ref="skill">
          <li class="skill-li" v-for="item in data.skill" :percent="item.percent"><span>{{item.title}}</span></li>
        </ul>
      </div>
      <div class="socials">
        <div class="item" v-for="item in data.socials">
          <a :href="item.link" target="_blank">
            <img :src="'/img/'+item.title+'.png'" :alt="item.title"
            :title="item.title" />
          </a>
        </div>
      </div>
    </div>
     <div class="footer">
        Disigned by ronghaoZHI
      </div>
  </div>
</template>
<script>
export default {
  name: "homepage",
  data() {
    return{
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      console.log(Array.from(document.getElementsByClassName('skill-li')))
    }
  },
  computed: {
    data() {
      return this.$page.frontmatter;
    }
  },
}
</script>
<style>
  .home {
    position: relative;
    margin: auto;
    max-width: 1000px;
    text-align: center;
  }
  .wrap {
    max-width: 350px;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .avatar img {
    width: 100px;
    height: 100px;
  }
  .head {
    width: 100%;
    margin: auto;
    position: relative;
  }
  .head .span {
    margin: auto;
  }
  .describe {
    margin-top: 20px;
    color: #cacaca;
  }
  .skill {
    color: blueviolet;
    width: 100%;
    margin: auto;
  }
  .skill-ul li {
    list-style-type: none;
    margin-top: 3px; 
    background: #6da0ec;
  }
  .socials {
    width: 50%;
    display: flex;
    margin: 50px 0 30px 0;
  }
  .socials .item {
    display: inline-block;
    flex: 1;
  }
  .socials img {
    width: 30px;
    height: 30px;
  }
  .footer {
    position: relative;
    font-size: 0.5vw;
    line-height: 0.5;
  }
</style>
