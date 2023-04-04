import React from 'react'

export default function SearchForm() {
  return (
    <div>
      <div className='search_form'>
          <div className="row">
            <div className="col title">
              <span className='title_underline'>Reservation</span>
            </div>
          </div>

          <div className=" d-flex justify-content-sm-evenly align-items-center my-4">
             <input placeholder='Email' type="text" className='form-control email_input' />
             <input type="Date" className='form-control date_input' />
             <button className='search_button'>Continuer</button>
          </div>
      </div>
    </div>
  )
}
