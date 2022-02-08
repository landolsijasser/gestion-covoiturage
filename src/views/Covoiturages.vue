<template>
  <div class="container">
  <br>
  <br>
  

      <div class="row">
          <div class="card" style="width: 18rem;" v-for="item in listecovoiturages" :key="item.key">
  <div class="card-body">
    <h5 class="card-title">{{item.dateDepart}}</h5>
    <h5 class="card-title">{{item.villeDepart}}</h5>
    <h5 class="card-title">{{item.villeArrivee}}</h5>
    <p class="card-text">{{item.description}}</p>
    <a href="#" class="btn btn-primary">Voir l'annonce</a>
  </div>
</div>


      </div>
  </div>
</template>

<script>
import firebase from '../Firebase'
    export default{
        name:'Covoiturages',
data(){
  return{
    listecovoiturages:[],
    ref:firebase.firestore().collection('covoiturages')
  }
},
created(){
        this.ref.onSnapshot(query=>{
            this.listecovoiturages=[]
         query.forEach(doc=>{
          
           this.listecovoiturages.push({
               key:doc.id,
               dateDepart:doc.data().dateDepart,
               villeDepart:doc.data().villeDepart,
               villeArrivee:doc.data().villeArrivee,
               description:doc.data().description
           }) 
         })   
        })
    }
 
}
</script>