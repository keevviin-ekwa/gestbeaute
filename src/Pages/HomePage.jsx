import React from 'react'
import Hearder from '../components/Hearder.component'
import SearchForm from '../components/searchForm.component'
import Soin from '../components/Soin.component'


export default function HomePage() {
  return (
    <div className='Container-fluid'>
      <Hearder/>
      <SearchForm/>
       
       <h2>Nos prestations</h2>
       <br />
       <div className="row prestation">
        <div className="col-md">
            <Soin/>
        </div>
        <div className="col-md">
            <Soin/>
        </div>
        <div className="col-md">
            <Soin/>
        </div>
       </div>
    </div>
  )
}
