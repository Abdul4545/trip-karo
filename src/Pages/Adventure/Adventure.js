import React, { useState } from 'react';
import './Adventure.css'

import AdventureCardGroup from '../../Components/AdventureCardGroup/AdventureCardGroup';

const Adventure = () => {

  const [filterByDuration, setFilterByDuration] = useState('');
  const [clearFilterByDuration, setClearFilterByDuration] = useState(false);

  const [filterByCategory, setFilterByCategory] = useState('');
  const [clearFilterByCategory, setClearFilterByCategory] = useState(false);
  

  const handleFilterChange = (event) => {
    setFilterByDuration(event.target.value)
  }

  const handleClearFilter = (event) => {
    setClearFilterByDuration(true)
  }

  const handleCategoryChange = (event) => {
    setFilterByCategory(event.target.value)
  }

  const handleClearCategory = () => {
    setClearFilterByCategory(true)
  }

  return (
    <div className='adventure_container'>
      <h1>Explore all adventures</h1>
      <h3>Here's a list of places that you can explore in city</h3>
      <hr></hr>
      <div className='adventure_filter'> 
        <div>Filters:</div>
    
        <div>
        <select onChange={handleFilterChange}>
            <option disabled selected>Filter by duration</option>
            <option value="0-2hours">0-2 Hours</option>
            <option value="2-6hours">2-6 Hours</option>
            <option value="6-12hours">6-12 Hours</option>
            <option value="12+hours">12+ Hours</option>
          </select>

          <span onClick={handleClearFilter} style={{cursor: "pointer"}}>Clear</span>
        </div>

        <div>
          <select onChange={handleCategoryChange}>
            <option disabled selected>select Category</option>
            <option value="cycling">Cycling</option>
            <option value="hill-side">Hill Side</option>
            <option value="beaches">Seren Beaches</option>
            <option value="party">Party Spot</option>
          </select>

          <span onClick={handleClearCategory} style={{cursor: "pointer"}}>Clear</span>
        </div>
      </div>

      <AdventureCardGroup filterByDuration={filterByDuration} clearFilterByDuration = {clearFilterByDuration} filterByCategory = {filterByCategory} clearFilterByCategory = {clearFilterByCategory} />
    </div>
  )
}

export default Adventure
