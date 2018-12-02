<template>
  <div class="about">
    about me
  </div>
</template>
<script>
export default {
   computed: {
    data() {
      return this.$page.frontmatter;
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
</style>


