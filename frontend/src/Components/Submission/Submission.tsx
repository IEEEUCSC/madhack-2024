import React,{useState} from 'react';
import {useForm} from 'react-hook-form';

import './Submission.scss';
import {Network, ResponseModel} from "../../Network";
import Swal from "sweetalert2";


export default function Submission() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (data: any) => {
        try{
            setIsSubmitting(true)
            let response: ResponseModel = await Network.shared.submit(data)

            if (response.success) {
                await Swal.fire({
                    title: response.message,
                    icon: 'info',
                    confirmButtonText: 'Ok',
                    background: '#232631',
                    color: '#fff',
                })
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
            await Swal.fire({
                title: "Failed to submit",
                icon: 'error',
                confirmButtonText: 'Ok',
                background: '#232631',
                color: '#fff',
            })
        }
        finally{
            setIsSubmitting(false)
        }
    }

    return (
        <div className="site-section local-bootstrap reg-section">

            <div className="container">
                <h1 className='py-2'>Initial Round Submissions</h1>

                <div className="row">
                    <div className="col-md-12 aos-init aos-animate" data-aos="fade-up">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="row form-group">
                                <div className="col-md-12">
                                    <label htmlFor="teamName">Team Name</label>
                                    <input type="text" id="teamName" className="form-control"
                                           {...register("teamName", {required: true})}/>
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-12">
                                    <label htmlFor="leaderEmail">Team Leader's Email</label>
                                    <input type="text" id="leaderEmail" className="form-control"
                                           {...register("teamLeaderEmail", {required: true})}/>
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-12">
                                    <label htmlFor="github">Github Repository Link: </label>
                                    <input type="text" id="github" className="form-control"
                                           {...register("githubRepo", {required: true})}/>
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-12">
                                    <label htmlFor="drive">Google Drive Link: </label>
                                    <input type="text" id="drive" className="form-control"
                                           {...register("driveLink", {required: true})}/>
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-12">
                                    <input type="submit"
                                           value={isSubmitting ? "Submitting..." : "Submit"}
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