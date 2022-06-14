<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for='(prato, index) in refeicoes' :key="index">
      {{prato.strMeal}}
      <img :src="prato.strMealThumb" @click="adicionarCompra(prato)" style="width:200px" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data(){
    return{
      refeicoes:['hamburguer', 'ovo frito'],
      user:null
    }
  },
  methods: {
    adicionarCompra(prato){
      firebase.database()
        .ref('/compras/'+this.user.uid+'/')
        .push()
        .set(prato)
    },
    insereBD(item){
      firebase.database()
        .ref('/favoritos/'+this.user.uid+'/')
        .push()
        .set(prato)
    }
  },
  mounted(){
    this.axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    .then(
      res=>{
        console.log(res)
        this.refeicoes=res.data.meals
      }
    )
    this.user = firebase.auth().currentUser
  }
}
</script>
