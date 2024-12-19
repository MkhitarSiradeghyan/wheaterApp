import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWheater } from '../redux/wheaterSlice'
import SearchBar from '../components/SearchBar/SearchBar'
import WheaterCard from '../components/WheaterCard/WheaterCard'
import Modal from '../components/Modal/Modal'

const WheaterPage = () => {
    const dispatch = useDispatch()
    const {wheaterData, error, loading} = useSelector((state) => state.wheater)
    const [showModal, setShowModal] = useState(false)
    const handleSearch = (city) => {
        dispatch(fetchWheater(city))
    }
    if(error && !showModal){
        setShowModal(true)
    }
  return (
    <div>
        <SearchBar onSearch={handleSearch}/>
        {
            loading && <p>Loading...</p>
        }
        {
            wheaterData && <WheaterCard wheater={wheaterData}/>
        }
        {
            showModal && <Modal message={error} onClose={() => setShowModal(false)}/>
        }
    </div>
  )
}

export default WheaterPage