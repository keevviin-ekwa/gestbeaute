import React, { Component } from 'react';
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import { AppointmentPicker } from 'react-appointment-picker';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import fr from 'date-fns/locale/fr';
import 'react-datepicker/dist/react-datepicker.css';
import './custom.css'

registerLocale('fr', fr)



export default class Reservation extends Component {
  state = {
    loading: false,
    continuousLoading: false
  };

  addAppointmentCallback = ({
    addedAppointment: { day, number, time, id },
    addCb
  }) => {
    this.setState(
      {
        loading: true
      },
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(
          `Added appointment ${number}, day ${day}, time ${time}, id ${id}`
        );
        addCb(day, number, time, id);
        this.setState({ loading: false });
      }
    );
  };

  removeAppointmentCallback = ({ day, number, time, id }, removeCb) => {
    this.setState(
      {
        loading: true
      },
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(
          `Removed appointment ${number}, day ${day}, time ${time}, id ${id}`
        );
        removeCb(day, number);
        this.setState({ loading: false });
      }
    );
  };

  addAppointmentCallbackContinuousCase = ({
    addedAppointment: { day, number, time, id },
    addCb,
    removedAppointment: params,
    removeCb
  }) => {
    this.setState(
      {
        continuousLoading: true
      },
      async () => {
        if (removeCb) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          console.log(
            `Removed appointment ${params.number}, day ${params.day}, time ${params.time}, id ${params.id}`
          );
          removeCb(params.day, params.number);
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(
          `Added appointment ${number}, day ${day}, time ${time}, id ${id}`
        );
        addCb(day, number, time, id);
        this.setState({ continuousLoading: false });
      }
    );
  };

  removeAppointmentCallbackContinuousCase = (
    { day, number, time, id },
    removeCb
  ) => {
    this.setState(
      {
        continuousLoading: true
      },
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(
          `Removed appointment ${number}, day ${day}, time ${time}, id ${id}`
        );
        removeCb(day, number);
        this.setState({ continuousLoading: false });
      }
    );
  };

  render() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
    const days = [
      [
        { id: 1, number: 1, isSelected: true, periods: 2 },
        { id: 2, number: 2 },
        null,
        { id: 3, number: '3', isReserved: true },
        { id: 4, number: '4' },
        null,
        { id: 5, number: 5 },
        { id: 6, number: 6 }
      ],
      
    ];
    const { loading, continuousLoading } = this.state;
    return (
      <>
        <div className="appointement">
        <Select options={options} />
        <Select
            
            isMulti
            name="colors"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
         />

         <div className="d-flex justify-content-between test">
        
           <div className="customDatePickerWidth">
           <DatePicker
          
          locale="fr"
          selected={new Date}
          inline
       />
      
           </div>
           <AppointmentPicker
          addAppointmentCallback={this.addAppointmentCallback}
          removeAppointmentCallback={this.removeAppointmentCallback}
          initialDay={new Date('2018-05-05')}
          days={days}
          maxReservableAppointments={3}
          alpha
          visible
          selectedByDefault
          loading={loading}
        />
         
         </div>
        </div>
      </>
    );
  }
}