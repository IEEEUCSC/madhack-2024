import React,{useState} from 'react';
import {useForm} from 'react-hook-form';

// sweetalert2
import Swal from 'sweetalert2';

import './Registration.scss';
import {Network, ResponseModel} from "../../Network";


export default function Registration() {

    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const onSubmit = async (data: any) => {
        setIsSubmitting(true)
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
            footer: '<a href="https://chat.whatsapp.com/LJ7CwK4eiRd3jkLntBfoj0" target="_blank"> Join our whatsapp group <br> <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"/></a>'
        })


        if (response.success) {
            reset()
        }
        setIsSubmitting(false)
    }

    return (
        <div className="site-section local-bootstrap reg-section">

            <div className="container">
                <h1 className='py-2'> Register for the Mobile App Designing Session </h1>


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
                                    <select id="university" className="form-control" defaultValue={"Other"}
                                            {...register("university", {required: true})}>
                                        {/* <option value="" disabled selected>University *</option> */}
                                        <option value="University of Colombo School of Computing">
                                            University of Colombo School of Computing (UCSC)
                                        </option>
                                        <option value="University of Moratuwa">University of Moratuwa</option>
                                        <option value="University of Colombo">University of Colombo</option>
                                        <option value="Sri Lanka Institute of Information Technology">
                                            Sri Lanka Institute of Information Technology (SLIIT)
                                        </option>
                                        <option value="University of Kelaniya">University of Kelaniya</option>
                                        <option value="University of Jayawardhanapura">
                                            University of Jayawardhanapura
                                        </option>
                                        <option value="University of Peradeniya">University of Peradeniya</option>
                                        <option value="University of Wayamba">University of Wayamba</option>
                                        <option value="University of Uva Wellassa">University of Uva Wellassa</option>
                                        <option value="University of Rajarata">University of Rajarata</option>
                                        <option value="University of Sabaragamuwa">University of Sabaragamuwa</option>
                                        <option value="University of Vavuniya">University of Vavuniya</option>
                                        <option value="University of Ruhuna">University of Ruhuna</option>
                                        <option value="University of Jaffna">University of Jaffna</option>
                                        <option value="University of Vocational Technology">
                                            University of Vocational Technology
                                        </option>
                                        <option value="South Eastern University of Sri Lanka">
                                            South Eastern University of Sri Lanka
                                        </option>
                                        <option value="National School of Business Management">
                                            National School of Business Management
                                        </option>
                                        <option value="National Institute of Business Management">
                                            National Institute of Business Management
                                        </option>
                                        <option value="Open University of Sri Lanka">
                                            Open University of Sri Lanka
                                        </option>
                                        <option value="Informatics Institute of Technology">
                                            Informatics Institute of Technology
                                        </option>
                                        <option value="Sri Lanka Technological Campus">
                                            Sri Lanka Technological Campus
                                        </option>
                                        <option value="General Sir John Kothalawala Defence University">
                                            General Sir John Kothalawala Defence University
                                        </option>
                                        <option value="Colombo International Nautical and Engineering Campus">
                                            Colombo International Nautical and Engineering Campus
                                        </option>
                                        <option value="International College of Business and Technology">
                                            International College of Business and Technology
                                        </option>
                                        <option value="Australian College of Business and Technology">
                                            Australian College of Business and Technology
                                        </option>
                                        <option value="Other">Other</option>
                                    </select>
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
                                <input type="submit"
                           value={isSubmitting ? "Registering..." : "Register"}
                           className={`btn btn-primary py-2 px-4 text-white ${isSubmitting ? 'btn-loading' : ''}`}
                           disabled={isSubmitting} />
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
/*
<option value="" disabled selected>University *</option>
<option value="University of Colombo School of Computing">
  University of Colombo School of Computing (UCSC)
</option>
<option value="University of Moratuwa">University of Moratuwa</option>
<option value="University of Colombo">University of Colombo</option>
<option value="Sri Lanka Institute of Information Technology">
  Sri Lanka Institute of Information Technology (SLIIT)
</option>
<option value="University of Kelaniya">University of Kelaniya</option>
<option value="University of Jayawardhanapura">
  University of Jayawardhanapura
</option>
<option value="University of Peradeniya">University of Peradeniya</option>
<option value="University of Wayamba">University of Wayamba</option>
<option value="University of Uva Wellassa">University of Uva Wellassa</option>
<option value="University of Rajarata">University of Rajarata</option>
<option value="University of Sabaragamuwa">University of Sabaragamuwa</option>
<option value="University of Vavuniya">University of Vavuniya</option>
<option value="University of Ruhuna">University of Ruhuna</option>
<option value="University of Jaffna">University of Jaffna</option>
<option value="University of Vocational Technology">
  University of Vocational Technology
</option>
<option value="South Eastern University of Sri Lanka">
  South Eastern University of Sri Lanka
</option>
<option value="National School of Business Management">
  National School of Business Management
</option>
<option value="National Institute of Business Management">
  National Institute of Business Management
</option>
<option value="Open University of Sri Lanka">
  Open University of Sri Lanka
</option>
<option value="Informatics Institute of Technology">
  Informatics Institute of Technology
</option>
<option value="Sri Lanka Technological Campus">
  Sri Lanka Technological Campus
</option>
<option value="General Sir John Kothalawala Defence University">
  General Sir John Kothalawala Defence University
</option>
<option value="Colombo International Nautical and Engineering Campus">
  Colombo International Nautical and Engineering Campus
</option>
<option value="International College of Business and Technology">
  International College of Business and Technology
</option>
<option value="Australian College of Business and Technology">
  Australian College of Business and Technology
</option>
<option value="other">Other</option>
* */