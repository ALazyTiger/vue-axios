<template>
  <div class="hello">
    <router-link to="/HelloWorld">
      <h1>{{ msg }}</h1>
    </router-link>
    <div>islogin：{{this.$store.getters.islogin}}</div>
    <div>Token：{{this.$store.getters.getToken}}</div>
    <h2 @click="setIslogin">changeIslogin</h2>
    <h2 @click="setToken">changeToken</h2>
  </div>
</template>

<script>
//根据实际路径引入刚才封装的js文件
import { dataGet, dataPost, dataDelete, payMoney } from "@/api/api.js";
export default {
  name: 'HelloWorld',
  data () {
    return {
      pageNo:1,
      msg: 'hello'
    }
  },
  components: {},
  created() {
   
  },
  computed: {
     
  },
  mounted() {},
  methods: {
    setIslogin(){
      this.$store.commit({
        type:'changeislogin',
        isLogin:true
      })
    },
    setToken(){
      this.$store.commit({
        type:'changeToken',
        token:"tonke123456789"
      })
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
