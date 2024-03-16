import React,{useState} from 'react';
import {useForm} from 'react-hook-form';

import './Login.scss';
import {Network, ResponseModel} from "../../Network";
import Swal from "sweetalert2";
import Task from "../Task/Task.";
import {useEffect} from "react"

function Countdown() {
    type TimeLeft = {
        days?: number;
        hours?: number;
        minutes?: number;
        seconds?: number;
    };

    const calculateTimeLeft = (): TimeLeft => {
        const difference = +new Date("2024-03-16T23:59") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className="countdown">
            <span>Time Left to Submit: </span>
            <br className="mobile-break" />
            <span className={"timer"}>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
        </div>
    );
}

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
                                    <label htmlFor="leaderEmail">Team Leader's Email</label>
                                    <input type="text" id="leaderEmail" className="form-control"
                                           {...register("leaderEmail", {required: true})}/>
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-12">
                                    <label htmlFor="nic">NIC (Of any member)</label>
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