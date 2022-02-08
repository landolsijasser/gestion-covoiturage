<template>
    <div class="container">
        <br>
        <br>
        <form @submit.prevent="loginUser">
  <div class="mb-3">
    <label  class="form-label">Email address</label>
    <input type="text" class="form-control"  v-model="user.email">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label  class="form-label">Password</label>
    <input type="password" class="form-control"  v-model="user.password">
  </div>
  <div class="alert alert-danger" v-if="messageError">{{messageError}}</div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
</template>

<script>
import firebase from '../Firebase'
import router from '../router'

    export default{
        name:'Signin',
        data(){
          return{
            user:{
              email:'',
            password:''
            },
            messageError:''
          }
          
        },
        methods:{
          loginUser(){
firebase.auth().signInWithEmailAndPassword(this.user.email,this.user.password).then((dataUser)=>{
  localStorage.setItem("uidUser",dataUser.user.uid)
  router.push({
name:'Home'
  })
}).catch(()=>{
this.messageError='invalid email/password'
})
          }
        }
    }
</script>