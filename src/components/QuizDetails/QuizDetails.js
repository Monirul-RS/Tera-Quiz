import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {
    const quiz = useLoaderData();
    console.log(quiz.data.question);
    return (
        <div>
            <h1 className='text-4xl font-bold mt-4 text-blue-600'>Quiz Topic: {quiz.data.name}</h1>
            <h3 className='text-2xl font-semibold'>Total Quiz: {quiz.data.questions.length}</h3>
            <div className='mt-6'>
                <div className='border-4 rounded-lg  mt-14 mx-6 shadow-lg shadow-indigo-500/50 bg-slate-50'>
                    <h3 className='text-2xl pt-5 font-semibold text-blue-600'>1.{quiz.data.questions[0].question}</h3>
                    <div className='grid grid-cols-2 text-xl text-blue-600'>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[0].options[0]} name="quiz" /> {quiz.data.questions[0].options[0]}
                        </div>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[0].options[1]} name="quiz" /> {quiz.data.questions[0].options[1]}
                        </div>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[0].options[2]} name="quiz" /> {quiz.data.questions[0].options[2]}
                        </div>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[0].options[3]} name="quiz" /> {quiz.data.questions[0].options[3]}
                        </div>
                    </div>
                </div>
                <div className='border-4 rounded-lg mt-14 mx-6 shadow-lg shadow-indigo-500/50 bg-slate-50'>
                    <h3 className='text-2xl pt-5 font-semibold text-blue-600'>2.{quiz.data.questions[1].question}</h3>
                    <div className='grid grid-cols-2 text-xl text-blue-600'>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[1].options[0]} name="quiz" /> {quiz.data.questions[1].options[0]}
                        </div>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[1].options[1]} name="quiz" /> {quiz.data.questions[1].options[1]}
                        </div>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[1].options[2]} name="quiz" /> {quiz.data.questions[1].options[2]}
                        </div>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[1].options[3]} name="quiz" /> {quiz.data.questions[1].options[3]}
                        </div>
                    </div>
                </div>
                <div className='border-4 rounded-lg mt-14 mx-6 shadow-lg shadow-indigo-500/50 bg-slate-50'>
                    <h3 className='text-2xl pt-5 font-semibold text-blue-600'>3.{quiz.data.questions[2].question}</h3>
                    <div className='grid grid-cols-2 text-xl text-blue-600'>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[2].options[0]} name="quiz" /> {quiz.data.questions[2].options[0]}
                        </div>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[2].options[1]} name="quiz" /> {quiz.data.questions[2].options[1]}
                        </div>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[2].options[2]} name="quiz" /> {quiz.data.questions[2].options[2]}
                        </div>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[2].options[3]} name="quiz" /> {quiz.data.questions[2].options[3]}
                        </div>
                    </div>
                </div>
                <div className='border-4 rounded-lg mt-14 mx-6 shadow-lg shadow-indigo-500/50 bg-slate-50 '>
                    <h3 className='text-2xl pt-5 font-semibold text-blue-600'>4.{quiz.data.questions[3].question}</h3>
                    <div className='grid grid-cols-2 text-xl text-blue-600'>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[3].options[0]} name="quiz" /> {quiz.data.questions[3].options[0]}
                        </div>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[3].options[1]} name="quiz" /> {quiz.data.questions[3].options[1]}
                        </div>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[3].options[2]} name="quiz" /> {quiz.data.questions[3].options[2]}
                        </div>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[3].options[3]} name="quiz" /> {quiz.data.questions[3].options[3]}
                        </div>
                    </div>
                </div>
                <div className='border-4 rounded-lg mt-14 mx-6 shadow-lg shadow-indigo-500/50 bg-slate-50 '>
                    <h3 className='text-2xl pt-5 font-semibold text-blue-600'>5.{quiz.data.questions[4].question}</h3>
                    <div className='grid grid-cols-2 text-xl text-blue-600'>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[4].options[0]} name="quiz" /> {quiz.data.questions[4].options[0]}
                        </div>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[4].options[1]} name="quiz" /> {quiz.data.questions[4].options[1]}
                        </div>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[4].options[2]} name="quiz" /> {quiz.data.questions[4].options[2]}
                        </div>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[4].options[3]} name="quiz" /> {quiz.data.questions[4].options[3]}
                        </div>
                    </div>
                </div>
                <div className='border-4 rounded-lg mt-14 mx-6 shadow-lg shadow-indigo-500/50 bg-slate-50 '>
                    <h3 className='text-2xl pt-5 font-semibold text-blue-600'>6.{quiz.data.questions[5].question}</h3>
                    <div className='grid grid-cols-2 text-xl text-blue-600'>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[5].options[0]} name="quiz" /> {quiz.data.questions[5].options[0]}
                        </div>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[5].options[1]} name="quiz" /> {quiz.data.questions[5].options[1]}
                        </div>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[5].options[2]} name="quiz" /> {quiz.data.questions[5].options[2]}
                        </div>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[5].options[3]} name="quiz" /> {quiz.data.questions[5].options[3]}
                        </div>
                    </div>
                </div>
                <div className='border-4 rounded-lg mt-14 mx-6 shadow-lg shadow-indigo-500/50 bg-slate-50 '>
                    <h3 className='text-2xl pt-5 font-semibold text-blue-600'>7.{quiz.data.questions[6].question}</h3>
                    <div className='grid grid-cols-2 text-xl text-blue-600'>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[6].options[0]} name="quiz" /> {quiz.data.questions[6].options[0]}
                        </div>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[6].options[1]} name="quiz" /> {quiz.data.questions[6].options[1]}
                        </div>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[6].options[2]} name="quiz" /> {quiz.data.questions[6].options[2]}
                        </div>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[6].options[3]} name="quiz" /> {quiz.data.questions[6].options[3]}
                        </div>
                    </div>
                </div>
                <div className='border-4 rounded-lg mt-14 mb-14 mx-6 shadow-lg shadow-indigo-500/50 bg-slate-50 '>
                    <h3 className='text-2xl pt-5 font-semibold text-blue-600'>8.{quiz.data.questions[7].question}</h3>
                    <div className='grid grid-cols-2 text-xl text-blue-600'>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[7].options[0]} name="quiz" /> {quiz.data.questions[7].options[0]}
                        </div>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[7].options[1]} name="quiz" /> {quiz.data.questions[7].options[1]}
                        </div>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[7].options[2]} name="quiz" /> {quiz.data.questions[7].options[2]}
                        </div>
                        <div className='border-4 rounded-xl p-8 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[7].options[3]} name="quiz" /> {quiz.data.questions[7].options[3]}
                        </div>
                    </div>
                </div>
                


            </div>

        </div>
    );
};

export default QuizDetails;