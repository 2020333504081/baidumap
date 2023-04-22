
const state={
    items:[],
    contribution:0,
    gold:0
  }
const mutations={
  loadData(state,c){
    state.items=c
  },
    add(state,c){
      //console.log("add",c);
      var date=new Date();
      var year=date.getFullYear();
      var month=date.getMonth();
      var day=date.getDate();
      var currentdate=year+"."+month+"."+day;
      const result=state.items.find(item=>item.pid==c.pid)
      if(result){

      }else{
        state.items.push({
          pid:c.pid,
          name:c.name,
          address:c.address,
          date:currentdate,
          src:c.src,
          classes:c.classes
        });

      }
    },
    del(state,id){
//console.log(clist);
//console.log(state.items);
        //for(var i=0;i<state.items.length;i++){

            //if(state.items[i].id==clist[j])
            state.items.forEach((item,index,arr)=>{
              if(item.pid==id){
                console.log(item);
                arr.splice(index,1);
              }
            })
            //state.items.splice(state.items[i],1);
        //  }






    }
  }
const actions={
  loadData(context,item){
    context.commit('loadData',item)
  },
    add(context,item){
      context.commit('add',item)
    },
    del(context,id){
      context.commit('del',id)
    }
  }
const getters={

  }
export default({
  namespaced:true,
  state,mutations,actions,getters

})
