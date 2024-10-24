import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CircularProgress, Typography, Box } from '@mui/material'
import BasicCard from '../Components/Card'

const Products = () => {
    
    const [products,setProduct] = useState(null)
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(true)


    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(res => {
          console.log(res.products)
          setProduct(res.products)
        })
        .catch(err => {
          setError(true)
        })
        .finally(() => {
          setLoading(false)
        })
    }, []) 

        const navigate = useNavigate()

        const singleProduct =((item)=>{
            navigate(`/products/${item.id}`)
        })
        
 
    
  return (
    <>
       <Typography variant='h3' className='text-center m-5'>All Products</Typography>
       {loading && <CircularProgress/>}
       {error && <Typography>There is some error</Typography>}
       <Box className='d-flex flex-wrap gap-3 justify-content-center'>
       {products && products.map((item,index)=>{
        return <BasicCard key={item.id} title={item.title} price={item.price} src={item.thumbnail} 
        func={()=>singleProduct(item)}/>
       })}
       </Box>
    </>
  )
}

export default Products
