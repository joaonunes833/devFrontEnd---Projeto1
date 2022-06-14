<template>
    <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for='(prato, index) in refeicoes' :key="index">
      {{prato.strMeal}}
      <img :src="prato.strMealThumb" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name:'carrinho',
    data(){
        return{
            refeicoes:[],
            user:null
        }
    },
    mounted() {
        this.user = firebase.auth().currentUser
        this.refeicoes = firebase.database()
            .ref('/compras/'+this.user.uid+'/')
            .get()
            .tehn(
                (res)=>{
                    this.refeicoes
                }
            )
    },
}
</script>