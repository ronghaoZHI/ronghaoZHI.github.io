<template>
  <div class="about">
    <h3>{{data.title}}</h3>
    <div class="">
      <div id="tags-cloud" >
        <a href="" target="" >JS/C</a>
        <a href="" target="" >北工大研究生</a>
        <a href="" target="">Vue/Node</a>
        <a href="" target="">职荣豪</a>
      </div>
		</div>
    <p>{{data.info}}</p>
  </div>
</template>
<script>
import tagAction from './util.js'
export default {
  mounted() {
    this.init()
  },
  computed: {
    data() {
      return this.$page.frontmatter;
    }
  },
  methods: {
    init() {
      tagAction("tags-cloud")
    }
  },
}
</script>
<style>
  .about {
    max-width: 360px;
    margin: 50px auto; 
    text-align: center;
  }
  #tags-cloud {
    margin:0px auto;
    margin-left:-5%;
    margin-top:6%;
    width: 105%;
    height: 261px;
    border-top: none;
    position: relative;
    overflow: hidden;
  }

  #tags-cloud a {
      position: absolute;
      left: 0;
      top: 0;
      color: gray;
      padding: 0 5px;
      line-height: 20px;
  }
</style>


