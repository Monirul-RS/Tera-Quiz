import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quiz = ({ question }) => {
    const { options, correctAnswer } = question;

    // const correctAnswer=() =>{
    //     alert('Right Answer:' +correctAnswer)
    // }
    const checkOption = test => {
        if (test === correctAnswer) {
            toast('Yeah! Correct Answer',
            {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
        }
        else{
            toast.error('Oops! Wrong Answer')
        }
    }
    return (
        <div className='custom-quiz'>
            {options.map((option) => (
                <div className='flex border border-sky-400 p-4 rounded-lg bg-slate-100'>

                    <div>
                        <input onClick={() => checkOption(option)} type="radio" value={option} name='quiz' className='mr-2 mt-4' /> {option};
                        {/* // <button onClick={() => checkOption(option)}>{option}</button> */}
                    </div>

                    {/* <div>{option}</div> */}

                </div>
            ))}
            <ToastContainer position="top-center" />

        </div>
    );
};

export default Quiz;