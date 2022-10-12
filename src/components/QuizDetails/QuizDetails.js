import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const QuizDetails = () => {
    const quiz = useLoaderData();
    const { logo, name, questions } = quiz.data;
    console.log(quiz.data);
    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-bold mt-4 text-blue-600'>Quiz Topic: {name}</h1>
                <img className='w-8 mb-4' src={logo} alt="" />
            </div>
            <h3 className='text-2xl font-semibold'>Total Quiz: {questions.length}</h3>

            {
                quiz.data.questions.map((question) => (
                    <div>
                        <div className='border rounded-lg w-3/5 mx-auto mt-8 bg-slate-50 shadow-lg shadow-indigo-500/50'>
                            <div className='text-center text-2xl text-sky-600 font-bold mb-6 questions mt-6'>
                                {question.question ? question.question.slice(3, -4)
                                    : "question.question"}
                            </div>
                            <div className='rounded-lg p-8 w-3/5 custom-border mx-auto bg-slate-50 mb-12'>
                                <div>
                                    <Quiz question={question}></Quiz>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }









            {/* <div className='mt-6'>
                <div className='border-4 rounded-lg  mt-14 mx-6 shadow-lg shadow-indigo-500/50 bg-slate-50'>
                    <h3 className='text-2xl pt-5 font-semibold text-blue-600'>1.{quiz.data.questions[0].question}</h3>
                    <div className='grid lg:grid-cols-2 text-xl text-blue-600'>
                        <div className='border-4 rounded-xl  lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[0].options[0]} name="quiz" /> {quiz.data.questions[0].options[0]}
                        </div>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[0].options[1]} name="quiz" /> {quiz.data.questions[0].options[1]}
                        </div>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[0].options[2]} name="quiz" /> {quiz.data.questions[0].options[2]}
                        </div>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[0].options[3]} name="quiz" /> {quiz.data.questions[0].options[3]}
                        </div>
                    </div>
                </div>
                <div className='border-4 rounded-lg mt-14 mx-6 shadow-lg shadow-indigo-500/50 bg-slate-50'>
                    <h3 className='text-2xl pt-5 font-semibold text-blue-600'>2.{quiz.data.questions[1].question}</h3>
                    <div className='grid grid-cols-2 text-xl text-blue-600'>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[1].options[0]} name="quiz" /> {quiz.data.questions[1].options[0]}
                        </div>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[1].options[1]} name="quiz" /> {quiz.data.questions[1].options[1]}
                        </div>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[1].options[2]} name="quiz" /> {quiz.data.questions[1].options[2]}
                        </div>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[1].options[3]} name="quiz" /> {quiz.data.questions[1].options[3]}
                        </div>
                    </div>
                </div>
                <div className='border-4 rounded-lg mt-14 mx-6 shadow-lg shadow-indigo-500/50 bg-slate-50'>
                    <h3 className='text-2xl pt-5 font-semibold text-blue-600'>3.{quiz.data.questions[2].question}</h3>
                    <div className='grid grid-cols-2 text-xl text-blue-600'>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[2].options[0]} name="quiz" /> {quiz.data.questions[2].options[0]}
                        </div>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[2].options[1]} name="quiz" /> {quiz.data.questions[2].options[1]}
                        </div>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[2].options[2]} name="quiz" /> {quiz.data.questions[2].options[2]}
                        </div>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[2].options[3]} name="quiz" /> {quiz.data.questions[2].options[3]}
                        </div>
                    </div>
                </div>
                <div className='border-4 rounded-lg mt-14 mx-6 shadow-lg shadow-indigo-500/50 bg-slate-50 '>
                    <h3 className='text-2xl pt-5 font-semibold text-blue-600'>4.{quiz.data.questions[3].question}</h3>
                    <div className='grid grid-cols-2 text-xl text-blue-600'>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[3].options[0]} name="quiz" /> {quiz.data.questions[3].options[0]}
                        </div>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[3].options[1]} name="quiz" /> {quiz.data.questions[3].options[1]}
                        </div>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[3].options[2]} name="quiz" /> {quiz.data.questions[3].options[2]}
                        </div>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[3].options[3]} name="quiz" /> {quiz.data.questions[3].options[3]}
                        </div>
                    </div>
                </div>
                <div className='border-4 rounded-lg mt-14 mx-6 shadow-lg shadow-indigo-500/50 bg-slate-50 '>
                    <h3 className='text-2xl pt-5 font-semibold text-blue-600'>5.{quiz.data.questions[4].question}</h3>
                    <div className='grid grid-cols-2 text-xl text-blue-600'>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[4].options[0]} name="quiz" /> {quiz.data.questions[4].options[0]}
                        </div>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[4].options[1]} name="quiz" /> {quiz.data.questions[4].options[1]}
                        </div>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[4].options[2]} name="quiz" /> {quiz.data.questions[4].options[2]}
                        </div>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[4].options[3]} name="quiz" /> {quiz.data.questions[4].options[3]}
                        </div>
                    </div>
                </div>
                <div className='border-4 rounded-lg mt-14 mx-6 shadow-lg shadow-indigo-500/50 bg-slate-50 '>
                    <h3 className='text-2xl pt-5 font-semibold text-blue-600'>6.{quiz.data.questions[5].question}</h3>
                    <div className='grid grid-cols-2 text-xl text-blue-600'>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[5].options[0]} name="quiz" /> {quiz.data.questions[5].options[0]}
                        </div>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[5].options[1]} name="quiz" /> {quiz.data.questions[5].options[1]}
                        </div>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[5].options[2]} name="quiz" /> {quiz.data.questions[5].options[2]}
                        </div>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[5].options[3]} name="quiz" /> {quiz.data.questions[5].options[3]}
                        </div>
                    </div>
                </div>
                <div className='border-4 rounded-lg mt-14 mx-6 shadow-lg shadow-indigo-500/50 bg-slate-50 '>
                    <h3 className='text-2xl pt-5 font-semibold text-blue-600'>7.{quiz.data.questions[6].question}</h3>
                    <div className='grid grid-cols-2 text-xl text-blue-600'>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[6].options[0]} name="quiz" /> {quiz.data.questions[6].options[0]}
                        </div>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[6].options[1]} name="quiz" /> {quiz.data.questions[6].options[1]}
                        </div>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[6].options[2]} name="quiz" /> {quiz.data.questions[6].options[2]}
                        </div>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[6].options[3]} name="quiz" /> {quiz.data.questions[6].options[3]}
                        </div>
                    </div>
                </div>
                <div className='border-4 rounded-lg mt-14 mb-14 mx-6 shadow-lg shadow-indigo-500/50 bg-slate-50 '>
                    <h3 className='text-2xl pt-5 font-semibold text-blue-600'>8.{quiz.data.questions[7].question}</h3>
                    <div className='grid grid-cols-2 text-xl text-blue-600'>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[7].options[0]} name="quiz" /> {quiz.data.questions[7].options[0]}
                        </div>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[7].options[1]} name="quiz" /> {quiz.data.questions[7].options[1]}
                        </div>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[7].options[2]} name="quiz" /> {quiz.data.questions[7].options[2]}
                        </div>
                        <div className='border-4 rounded-xl lg:p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[7].options[3]} name="quiz" /> {quiz.data.questions[7].options[3]}
                        </div>
                    </div>
                </div>



            </div> */}

        </div>
    );
};

export default QuizDetails;