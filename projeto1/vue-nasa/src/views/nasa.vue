<template>
    <input type="text" v-model="pesquisa">
    <button @click="carregaInfo(pesquisa)">Pesquisar</button>

    <div v-for="(user,index) in resultado" :key="index">
     <h3>{{user.data[0].title}}</h3> 
     <img :src="user.links[0].href" alt="">
     </div>
</template>

<script>

export default {
name:"users",
data(){
    return {
        resultado:[],
        pesquisa:''
    }
},
methods:{
    carregaInfo(param){
          this.axios.get('https://images-api.nasa.gov/search?q='+param+'&media_type=image')
        .then(
            res =>{
                this.resultado=res.data.collection.items
            
            }
        )
    }
},

mounted(){
  
   this.carregaInfo('mars')
}

}
</script>