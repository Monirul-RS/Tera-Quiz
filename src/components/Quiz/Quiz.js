import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'


const Quiz = ({ question }) => {
    const { options, correctAnswer } = question;


    const checkOption = test => {
        if (test === correctAnswer) {
            toast.success('Yeah! Correct Answer',
                {
                    position: "top-center",
                    autoClose: 2000,
                    // closeOnClick: true,

                });
        }
        else {
            toast.error('Oops! Wrong Answer',
                {
                    autoClose: 2000,
                });

        }
    }
    const correctAnswers = () => {
        toast.success(correctAnswer,{
            autoClose: 2000,
        });
    }
    return (
        <div>
            <div className='relative mb-4 text-center rounded-full'>
                <FontAwesomeIcon onClick={() => correctAnswers()} className="text-sky-600" icon={faEye}></FontAwesomeIcon>
            </div>

            <div className='custom-quiz'>

                {options.map((option) => (
                    <div className='flex border border-sky-400 p-4 rounded-lg mt-4 bg-slate-100'>

                        <div>
                            <input onClick={() => checkOption(option)} type="radio" value={option} name='quiz' className='mr-2 mt-4' /> {option};
                        </div>
                    </div>
                ))}
                <ToastContainer position="top-center" />

            </div>
        </div>
    );
};

export default Quiz;