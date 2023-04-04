import React from 'react'

export default function SearchForm() {
  return (
    <div className='search_form'>
        
           <div>
             <input className='email_input form-control' placeholder='Email' type="email"/>
           </div>
           <div>
           <input className='email_input form-control'  type="date"/>
           </div>
           <div>
            <button className='btn btn-primary'>Continuer</button>
           
        </div>
    </div>
  )
}
