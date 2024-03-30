
import { useState } from 'react';



function Home() {
  let [toDo,settoDo]=useState(null)
  let [toDos,settoDos]=useState([]);

  let date=new Date();
  let formatted=date.toDateString();
  let day=date.getDay();
  let month=date.getMonth();
  let datee=date.getDate();
  let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let months=['January','February','March','April','May','June','July','August','September','October','November','December'];
  let addTODO=()=>{
    settoDos([...toDos,{id:Date.now(),value:toDo,status:false}]);
    settoDo("");
  }
  console.log(formatted);
      
  return (
      <div className="bg-gradient-to-br from-purple-400 to-indigo-900 min-h-screen flex justify-center pt-56">
      <div>
      <h1 className='text-lg font-bold text-black-500 mb-4'>🚀 Stay Productive Today! {days[day]} {months[month]} {datee}🎯 </h1>

      <input type="text" className="py-2 px-4 border rounded-l-lg outline-none" placeholder="Add a task..." value={toDo} onChange={(e)=>settoDo(e.target.value)}/>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-lg" onClick={addTODO}>Add</button>
          {
            toDos.map((obj)=>{
              console.log(obj);
              return(
                <div className='toDo mt-9 bg-gray-200 rounded-lg p-3'> <input type="checkbox"  name="" id="" className='h-6 w-6 mr-2 rounded' onChange={(e)=>{
                  settoDos([...toDos])
                  console.log(e.target.value);
                  toDos.filter(function(value){
                    if(value.id===obj.id){
                      if(value.status===false){
                        value.status=true
                      }else if(value.status===true){
                        value.status=false;
                      }
                    }
                    return value
                    
                  })
                  console.log(obj);

                }} />
               <span className='font-bold'> {obj.value}</span> {obj.status && <span className='CompletionStatus'>Completed</span>} <button className='ml-4 text-red-500' onClick={()=>{
              settoDos(toDos.filter((data) => data.id !== obj.id));

               }}>RemoveTask</button></div>

              )
            })
          }
      </div>
    </div>  
    
  );
}

export default Home;
