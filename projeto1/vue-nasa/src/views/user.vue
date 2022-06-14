<template>
    <h1>pagina dinamica</h1>   
    <h3>  {{resultado.name}} {{$route.params.id}}</h3>
    <h3>Cometarios:</h3>
    <div v-for="comentario in comentarios" :key="comentario.id">{{comentario.id}}: {{comentario.title}}</div>
</template>
<script>

export default {
name:"users",
data(){
    return {
        resultado:[],
        comentarios:[]
    }
},
mounted(){
    this.axios.get('https://jsonplaceholder.typicode.com/users/' + this.$route.params.id)
        .then(
            res =>{
                this.resultado=res.data
            }
        )
    this.axios.get('https://jsonplaceholder.typicode.com/users/' + this.$route.params.id + '/posts')
        .then(
            res =>{
                this.comentarios=res.data
            }
        )
   
}

}
</script>