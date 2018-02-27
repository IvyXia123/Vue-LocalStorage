<template>
  <div id="app">
    <h1>Here is a todolist！</h1>
    <input type="text" v-model="iptVal" @keyup.enter="addList"/>
    <ol class="list">
      <li v-for="item in items" @click="done(item)" :class="{'lineThrough':item.isFinished}">
        <span>{{item.doType}}</span>
        <span class="delete" @click.stop="deleteOne(item)">&times;</span>
      </li>
    </ol>
    <aaa></aaa>
  </div>
</template>

<script>
import Store from './store/common'
import Aaa from './components/AAA'
export default {
  name: 'App',
  data(){
      return{
          items:Store.fetch(),
          iptVal:'',
      }
  },
  components:{
      Aaa
  },
  watch:{
      items:{
          handler:function(val){
              Store.save(val);
          },
          deep:true
      }
  },
  methods:{
      addList(){
          this.items.push({
              doType:this.iptVal,
              isFinished:false
          });
          this.iptVal='';
      },
      done(item){
          this.items.forEach((val,i)=>{
              if(val.doType==item.doType){
                  this.items[i].isFinished=!this.items[i].isFinished;
              }
          })
      },
      deleteOne(item){
          this.items.forEach((val,i)=>{
              if(val.doType==item.doType){
                  this.items.splice(i,1);
              }
          })
      }
  }
}
</script>

<style lang="less">
#app {
  text-align:center;
  .list{
    width:200px;
    margin:20px auto;
    li{
      margin:5px;
      padding-left:5px;
      text-align:left;
      cursor:pointer;
      .delete{
        display:inline-block;
        width:15px;
        height:15px;
        float:right;
      }
      &:hover{
        &:nth-child(even){
          background:lightyellow;
        }
        &:nth-child(odd){
          background:lightcyan;
        }
      }
      &.lineThrough{
        text-decoration-line:line-through;
        -webkit-text-decoration-line:line-through;
      }
    }
  }
}
</style>
