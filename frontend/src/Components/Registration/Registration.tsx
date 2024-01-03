import React from 'react';
import { useForm } from 'react-hook-form';

// sweetalert2
import Swal from 'sweetalert2';

import './Registration.scss';
import {Network, ResponseModel} from "../../Network";


export default function Registration() {
  const { register, handleSubmit, formState: { errors } , reset} = useForm();
  const onSubmit = async (data:any) => {
    let response: ResponseModel = await Network.shared.register(data)
    // alert(response.message)
    // use site styles
    Swal.fire({
      title: response.message,
      icon: response.success ? 'success' : 'error',
      confirmButtonText: 'Ok',
      background: '#232631',
      color: '#fff',
      // add link to whatsapp group with whatsapp icon
      footer: '<a href="https://chat.whatsapp.com/J2NvQ7k8bJwJ8K4tJ9b1eY" target="_blank"> Join our whatsapp group <br> <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"/></a>'
    })

    
    if (response.success) {
      reset()
    }
  }
  
  return (
    <div className="site-section local-bootstrap reg-section">

    <div className="container">
    <h1 className='py-2'> Register for the Awareness Session </h1>



      <div className="row">
        <div className="col-md-12 aos-init aos-animate" data-aos="fade-up">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row form-group">
                  <div className="col-md-12">
                    <label htmlFor="full-name">Full Name</label>
                    <input type="text" id="full-name" className="form-control"
                           {...register("name", {required: true})}/>
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control"
                           {...register("email", {required: true})}/>
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label htmlFor="whatsapp">Whatsapp no</label>
                    <input type="tel" id="whatsapp" className="form-control"
                           {...register("number", {required: true})}/>
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label htmlFor="university">University of study</label>
                    <input type="text" id="university" className="form-control"
                           {...register("university", {required: true})}/>
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label htmlFor="year-of-study">Year of study</label>
                    <select id="year-of-study" className="form-control"
                            {...register("year", {required: true})}>
                      <option value="1st year">1st year</option>
                      <option value="2nd year">2nd year</option>
                      <option value="3rd year">3rd year</option>
                      <option value="4th year">4th year</option>
                    </select>
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <input type="submit" value="Register" className="btn btn-primary py-2 px-4 text-white"/>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

  // <div className="registration">
  //   <h1>Registration </h1>
  //   <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
  //     <input type="email" placeholder="Email" {...register("Email", {required: true})} />
  //     <input type="text" placeholder="Full name" {...register("Full name", {required: true, maxLength: 150})} />
  //     <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
  //     <select {...register("University", { required: true })}>
  //       <option value="University of Colombo">University of Colombo</option>
  //       <option value="Other">Other</option>
  //     </select>
  //
  //     <input type="submit" />
  //   </form>
  // </div>