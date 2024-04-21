import React, { useEffect, useState } from 'react'
import "./AdventureDetails.css"
import { useParams } from 'react-router-dom';
import Form from '../../Components/Form/Form';


function AdventureDetails() {

    const {id} = useParams()
    const [adventureData, setAdventureData] = useState()

    const fetchData = async () => {
        let response = await fetch(`https://makemytrip-backend-w2d2.onrender.com/adventures/detail?adventure=${id}`);
        response = await response.json();
        setAdventureData(response);
    }

    console.log(adventureData);
    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])
  return (
    <div className='AdventureDetailsContainer'>

        <div className='adventure-details-flex-1 content'>
            <h1>{adventureData?.name}</h1>
            <hr style={{marginTop: "0.7rem"}}/>
            <h3>{adventureData?.subtitle}</h3>
            <img src={adventureData?.images[0]} alt="Adventure-img" />

            <div className=''>
                <hr />
                <h4>
                    {adventureData?.content}
                </h4>
            </div>

        </div>

        <div className='adventure-details-flex-2'>
            {adventureData?.available ? <Form costPerHead = {adventureData.costPerHead} /> : <h2 style={{textAlign: "center"}}>Sorry &#128542; Sold Out</h2>}
        </div>

    </div>
  )
}

export default AdventureDetails
