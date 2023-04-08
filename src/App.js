import React, {useEffect} from 'react';
import {useCookies} from 'react-cookie';
import './App.css';

function App() {
  const [cookie, setCookie] = useCookies(['user']);

  useEffect(() => {
    const fetchdata = async() =>{
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      const maindata = data.results;
      console.log(maindata[0].email);
      setCookie('Email', maindata[0].email,{path:'/'})
    }
    fetchdata()
  }, [])

  return (
    <>
    Hello I am learning React Cookies
    {
      cookie.Email && <p>{cookie.Email}</p>
    }
    </>
  );
}

export default App;
