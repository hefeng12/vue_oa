<template>
  <div class="hello">
    <Login />
  </div>
</template>

<script>
import Login from './login/Login'
export default {
  name: 'HelloWorld',
  components:{Login},
  props: {
    msg: String,
    message:String
  },
  computed:{
    getPropsinfo(){
      console.log(this.$route)
      return 'hello'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.hello{
  width: 100%;
  height: 100%;
}
</style>
