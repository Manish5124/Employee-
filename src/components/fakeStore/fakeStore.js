import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProudct } from '../../store/fakeStores/fakeStoreSlice'; 

function FakeStoreData() {

    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProudct());
    })
    const fakeData= useSelector((state)=>state.product.product);

    console.log("product is ",fakeData)
    
  return (
    <div>
        <h2>Fake Store Data</h2>
    <h4>id: {fakeData.id} {fakeData.title}  price: {fakeData.price}</h4>


    </div>
  )
}

export default FakeStoreData