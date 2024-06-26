import React, { useEffect, useState } from 'react'
import AdventureCard from '../AdventureCard/AdventureCard';
import './AdventureCardGroup.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AdventureCardGroup = (props) => {

    const [adventureData, setAdventureData] = useState([]);
    const [originalAdventureData, setOriginalAdventureData] = useState([]);


    let {city} = useParams()

    const fetchData = async() => {
        let response=await fetch(`https://makemytrip-backend-w2d2.onrender.com/adventures?city=${city}`);
        response=await response.json();
        setAdventureData(response)
        setOriginalAdventureData(response)
    }

    useEffect(()=>{
        fetchData();
    },[])

    useEffect(()=>{
        handleFilterByDuration()
    },[props.filterByDuration])


    useEffect(() => {
        setAdventureData(originalAdventureData)
    }, [props.clearFilterByDuration])


    useEffect(() => {
        handleFilterByCategory()
    }, [props.filterByCategory])


    useEffect(() => {
        setAdventureData(originalAdventureData)
    }, [props.clearFilterByCategory])


    const handleFilterByCategory = () => {
        let filteredData;
        switch(props.filterByCategory){
            case "cycling":
                filteredData=originalAdventureData.filter((activity) => activity.category === "Cycling");
                setAdventureData(filteredData)
                console.log("fitler",filteredData);
                break;

            case "hill-side":
                filteredData=originalAdventureData.filter(activity => activity.category === "Hillside");
                setAdventureData(filteredData)
                console.log("fitler",filteredData);
                break;

            case "beaches":
                filteredData=originalAdventureData.filter(activity => activity.category === "Beaches");
                setAdventureData(filteredData)
                console.log("fitler",filteredData);
                break;

            case "party":
                filteredData=originalAdventureData.filter(activity => activity.category === "Party");
                setAdventureData(filteredData)
                console.log("fitler",filteredData);
                break;

            default:
                break;
        }
    }


    const handleFilterByDuration = () => {
        var filterData;
        switch(props.filterByDuration){
            case '0-2hours':
                filterData=originalAdventureData.filter((activity) => activity.duration >=0 && activity.duration<=2);
                setAdventureData(filterData)
                console.log("fitler",filterData);
                break;

            case '2-6hours':
                filterData=originalAdventureData.filter(activity => activity.duration >2 && activity.duration<=6);
                setAdventureData(filterData)
                console.log("fitler",filterData);
                break;

            case '6-12hours':
            filterData=originalAdventureData.filter(activity => activity.duration >6 && activity.duration<=12);
            setAdventureData(filterData)
            console.log("fitler",filterData);
            break;

            case '12+hours':
            filterData=originalAdventureData.filter(activity => activity.duration >12);
            setAdventureData(filterData)
            console.log("fitler",filterData);
            break;

            default:
                break;
        }
    }
    
  return (
    <div className='adventure_card_group_container'>
        {console.log(adventureData)}
        {
            adventureData.map((data)=> 
            (<Link to={`/adventure/details/${data.id}`} key={data.id}>
                <div><AdventureCard {...data}/></div>
            </Link>)
            )
        }
    </div>

  )
}

export default AdventureCardGroup
