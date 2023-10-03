import { useEffect, useState } from 'react';
import './App.css';
import AppRouter from './app/routes';
import Axios from './app/utils/Axios';
// import AppRouter from './app/routes/index';

function App() {
  const [loading, setLoading] = useState(false)
  const fetchediacticve= async()=>{
    // try{
    //   setLoading(true)
    //   const res=await Axios.get('products',{params:{id:1, name:'iphone',}})
    //   // const res=await Axios.post('https://dummyjson.com/products',JSON.stringify({id:1, name:'iphone',}))
    //   console.log(res.data)
    // }catch(e){
    //   console.log('something went wrong while feting data');
    // }finally{
    //   console.log('inside finally')
    //   setLoading(false)

    // }
    setLoading(true)
    Axios.get('https://jobapi-pspz.onrender.com/api/users/getalluser')
    .then(res=>{
      console.log(res.data)
    })
    .catch(err=>console.log(err))
    
    .finally(()=>{setLoading(false)})

  }
  useEffect(()=>{
    fetchediacticve();
  },[])
  return (
    <div>
      <AppRouter/>
      
    </div>

  );
}

export default App;
