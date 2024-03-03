import React,{useState} from 'react';
import {useForm} from 'react-hook-form';

import './Login.scss';
import {Network, ResponseModel} from "../../Network";
import Swal from "sweetalert2";
import Task from "../Task/Task.";


export default function Login() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);

    const onSubmit = async (data: any) => {
        try{
            setIsSubmitting(true)
            let response: ResponseModel = await Network.shared.taskLogin(data)

            if (response.success) {
                setIsSignedIn(true)
            } else {
                await Swal.fire({
                    title: response.message,
                    icon: 'error',
                    confirmButtonText: 'Ok',
                    background: '#232631',
                    color: '#fff',
                })
            }
        }
        catch(e){
            console.log(e)
        }
        finally{
            setIsSubmitting(false)
        }
    }

    if (isSignedIn) {
        return <Task />
    }

    return (
        <div className="site-section local-bootstrap reg-section">

            <div className="container">
                <h1 className='py-2'> Sign in to view the Task </h1>

                <div className="row">
                    <div className="col-md-12 aos-init aos-animate" data-aos="fade-up">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="row form-group">
                                <div className="col-md-12">
                                    <label htmlFor="leaderEmail">Team Leader Email</label>
                                    <input type="text" id="leaderEmail" className="form-control"
                                           {...register("leaderEmail", {required: true})}/>
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-12">
                                    <label htmlFor="nic">NIC</label>
                                    <input type="text" id="nic" className="form-control"
                                           {...register("nic", {required: true})}/>
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-12">
                                    <input type="submit"
                                           value={isSubmitting ? "Signing in..." : "Sign in"}
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