
//SERVICES/ETUSERS.JS
/*
 const getUsers=(( { limit = 15, page = 0} = {})=>{
       const apiURL = `http://localhost:3050/users`;
        return fetch(apiURL)
       .then(resp=>resp.json())
       .then(response=>{
       	console.log('response:',response);
       	if (Array.isArray(response)) {
        const users = response.map(user => {
        const {id, name, email} = response;
      
         return { id, name, email };
                    })
         return users;
           }; //isArray
       return []
         
       }).catch(error=>{
          console.log('error:',error);

       }); //catch
       
  }); //getUsers

  export default getUsers;
  */