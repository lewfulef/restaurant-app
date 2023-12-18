import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { db } from '../../config/Firebase'
import './Donas.css'


export const Donas = () => {

  const donasCollectionRef = collection(db, 'donas')
  const [donas, setDonas] = useState([])
  
  const getDonas = async () => {
    const data = await getDocs(donasCollectionRef)
    console.log(data)
    setDonas(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
  }

  useEffect( () => {
    getDonas()
    console.log(donas)
  }, [])

  return (
    <>
    {
      donas.map(dona => (
       
       <div className=''>
        
        <article className='card'>
            
            <div className="card-body">
            
            <img src={dona.image} alt="" />
            
            <h3>{dona.name}</h3>
            
            <p>{dona.description}</p>
            <Button className="btn-bottom" variant="danger">Valor ${dona.price}</Button> 
        
        </div>
      </article>
      
      </div>
      ))
    }
   
  </>
  )
}
