//////////APP.JS////////////
import React,{useEffect,useState}  from 'react';
import  './App.css'; 

const App = (props) => {
const [users,setUsers]=useState([]);
const [isloading,setIsLoading]=useState(true);  
const apiURL = `https://backendpandoragui.herokuapp.com/users`;


 useEffect(()=>{
 

        fetch(apiURL)
       .then(resp=>resp.json())
       .then(response=>{
       	console.log('response:',response);
       	if (Array.isArray(response)) {
        const users = response.map(user => {
        const {id, name, email} = response;
         setUsers(response);
        setIsLoading(false); 
         return { id, name, email };
                    })

         

         return users;
           }; //isArray
       return []
         
       }).catch(error=>{
          console.log('error:',error);

       }); //catch
  },[]);

 
  if (isloading){
  	return <div><h1>isLoading....</h1></div>;
  }

   return (
    <div>
    <h1>Informacion de la Api con stringify</h1>
   	<ul>
   	{
   		users.map((user,index)=><li key={index}> {user.id} - {user.name} - {user.email} </li>)
 	
   	}
   	</ul>
   	</div>
   	);
 };
export default App;