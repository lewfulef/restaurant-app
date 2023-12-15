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
    <article className='card'>
    <div className="card-body">
      <h3>nombre</h3>
      <p>párrafo</p>
      <Button className="btn-bottom" variant="danger">Valor $</Button> 
    </div>
  </article>
  )
}
