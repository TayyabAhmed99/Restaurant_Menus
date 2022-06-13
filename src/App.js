import React from 'react'
import { Route, Routes, useParams  } from 'react-router-dom'
import Order from './order'
import Restaurant from './components/Basics/Restaurant'

const App = () => {
  
  return (
    
     
     <>
      <Routes>
      <Route path='/' element={<Restaurant />}/>
      <Route path='/order/:id' element={<Order />}/>
      </Routes>
      </>
      
    
  );
}

export default App;
