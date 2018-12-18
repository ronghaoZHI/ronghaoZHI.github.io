<template>
  <div class="home">
    <div class="wrap">
      <div class="avatar">
        <a href='/about/'>
        <img class="img1" :src="$withBase(data.wxQR)" alt="">
        <!-- <img class="img2" :src="$withBase(data.avatar)" alt=""> -->
        </a>
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
          <li class="skill-li" v-for="item in data.skill">
            <div :style="{ width: item.percent*100+'%' }" :percent = item.percent>
              <span>{{item.title}}</span>
            </div>
          </li>
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
        Disigned by RonghaoZHI
      </div>
  </div>
</template>
<script>
export default {
  name: "homepage",
  data() {
    return{
      timer: null,
      hover: true,
      colors: ['#ff5a00c9', '#5200ffc9', '#ffa100', '#c3cd00', 'green'],
    }
  },
  mounted() {
    this.init()
    !this.timer && (this.timer = setInterval(this.init, 3000))
  },
  methods: {
    init() {
      this.timer = null
      const lis = Array.from(document.getElementsByClassName('skill-li'))
      this.colors.length = lis.length
      this.colors = this.arrRand(this.colors)
      lis.forEach((li,index)=>{
        li.children[0].style.backgroundColor = this.colors[index]
      })
    },
    arrRand(arr){
      if(!Array.isArray(arr)) return []
      let result = []
      for(let i=0,len=arr.length;i<len;++i){
        let rand = Math.floor(Math.random()*i)
        result[i] = result[rand]
        result[rand] = arr[i]
      }
      return result
    }
  },
  computed: {
    data() {
      return this.$page.frontmatter;
    }
  },
  beforeDestroy() {
    this.timer && clearTimeout(this.timer)
  },
}
</script>
<style lang="less">
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
  .avatar {
    position: relative;
    width: 100px;
    height: 100px;
  }
  .avatar img {
    display: block;
    position: absolute;
    width: 100px;
    height: 100px;
    animation: xx;
  }
  .img2:hover {
    opacity: 0;
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
    font-weight: bold;
    width: 100%;
    margin: auto;

    ul li {
      color: antiquewhite;
      background-color: #67658430;
      list-style-type: none;
      margin-top: 3px; 
      opacity: 0.9;
      &:hover {
        animation: scale 2.5s infinite;
        opacity: 1;
      }
    }
  }
  @keyframes scale {
    0% { transform: scale(1.05, 1.05); }
    50% { transform: scale(1.10, 1.35); }
    100% { transform: scale(1.05, 1.05); }
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
    font-size: 14px;
    line-height: 0.5;
  }
</style>
