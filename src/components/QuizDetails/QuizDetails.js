import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {
    const quiz = useLoaderData();
    console.log(quiz.data.question);
    return (
        <div>
            <h1 className='text-4xl font-bold mt-4'>Quiz Topic: {quiz.data.name}</h1>
            <h3 className='text-2xl font-semibold'>Total Quiz: {quiz.data.questions.length}</h3>
            <div className='items-center'>
                <div className='border w-1/2  '>
                    <h3 className='text-2xl font-semibold text-blue-600'>1.{quiz.data.questions[0].question}</h3>
                    <div className='grid grid-cols-2 text-xl text-blue-600'>
                        <div className='border p-4 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[0].options[0]} name="quiz" /> {quiz.data.questions[0].options[0]}
                        </div>
                        <div className='border p-4 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[0].options[1]} name="quiz" /> {quiz.data.questions[0].options[1]}
                        </div>
                        <div className='border p-4 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[0].options[2]} name="quiz" /> {quiz.data.questions[0].options[2]}
                        </div>
                        <div className='border p-4 text-left m-6'>
                            <input type="radio" value={quiz.data.questions[0].options[3]} name="quiz" /> {quiz.data.questions[0].options[3]}
                        </div>
                    </div>
                </div>
                <div>
                    <h3>2.{quiz.data.questions[1].question}</h3>
                    <input type="radio" value={quiz.data.questions[1].options[0]} name="quiz" /> {quiz.data.questions[1].options[0]}
                    <input type="radio" value={quiz.data.questions[1].options[1]} name="quiz" /> {quiz.data.questions[1].options[1]}
                    <input type="radio" value={quiz.data.questions[1].options[2]} name="quiz" /> {quiz.data.questions[1].options[2]}
                    <input type="radio" value={quiz.data.questions[1].options[3]} name="quiz" /> {quiz.data.questions[1].options[3]}
                </div>
                <div>
                    <h3>3.{quiz.data.questions[2].question}</h3>
                    <input type="radio" value={quiz.data.questions[2].options[0]} name="quiz" /> {quiz.data.questions[2].options[0]}
                    <input type="radio" value="Male" name="quiz" /> {quiz.data.questions[2].options[1]}
                    <input type="radio" value="Male" name="quiz" /> {quiz.data.questions[2].options[2]}
                    <input type="radio" value="Male" name="quiz" /> {quiz.data.questions[2].options[3]}
                </div>
                <div>
                    <h3>4.{quiz.data.questions[3].question}</h3>
                    <input type="radio" value={quiz.data.questions[3].options[0]} name="quiz" /> {quiz.data.questions[3].options[0]}
                    <input type="radio" value="Male" name="quiz" /> {quiz.data.questions[3].options[1]}
                    <input type="radio" value="Male" name="quiz" /> {quiz.data.questions[3].options[2]}
                    <input type="radio" value="Male" name="quiz" /> {quiz.data.questions[3].options[3]}
                </div>
                <div>
                    <h3>5.{quiz.data.questions[4].question}</h3>
                    <input type="radio" value={quiz.data.questions[4].options[0]} name="quiz" /> {quiz.data.questions[4].options[0]}
                    <input type="radio" value="Male" name="quiz" /> {quiz.data.questions[4].options[1]}
                    <input type="radio" value="Male" name="quiz" /> {quiz.data.questions[4].options[2]}
                    <input type="radio" value="Male" name="quiz" /> {quiz.data.questions[4].options[3]}
                </div>
                <div>
                    <h3>5.{quiz.data.questions[4].question}</h3>
                    <input type="radio" value={quiz.data.questions[4].options[0]} name="quiz" /> {quiz.data.questions[4].options[0]}
                    <input type="radio" value="Male" name="quiz" /> {quiz.data.questions[4].options[1]}
                    <input type="radio" value="Male" name="quiz" /> {quiz.data.questions[4].options[2]}
                    <input type="radio" value="Male" name="quiz" /> {quiz.data.questions[4].options[3]}
                </div>
                <div>
                    <h3>6.{quiz.data.questions[5].question}</h3>
                    <input type="radio" value={quiz.data.questions[5].options[0]} name="quiz" /> {quiz.data.questions[5].options[0]}
                    <input type="radio" value="Male" name="quiz" /> {quiz.data.questions[5].options[1]}
                    <input type="radio" value="Male" name="quiz" /> {quiz.data.questions[5].options[2]}
                    <input type="radio" value="Male" name="quiz" /> {quiz.data.questions[5].options[3]}
                </div>
                <div>
                    <h3>7.{quiz.data.questions[6].question}</h3>
                    <input type="radio" value={quiz.data.questions[6].options[0]} name="quiz" /> {quiz.data.questions[6].options[0]}
                    <input type="radio" value="Male" name="quiz" /> {quiz.data.questions[6].options[1]}
                    <input type="radio" value="Male" name="quiz" /> {quiz.data.questions[6].options[2]}
                    <input type="radio" value="Male" name="quiz" /> {quiz.data.questions[6].options[3]}
                </div>
                <div>
                    <h3>8.{quiz.data.questions[7].question}</h3>
                    <input type="radio" value={quiz.data.questions[7].options[0]} name="quiz" /> {quiz.data.questions[7].options[0]}
                    <input type="radio" value="Male" name="quiz" /> {quiz.data.questions[7].options[1]}
                    <input type="radio" value="Male" name="quiz" /> {quiz.data.questions[7].options[2]}
                    <input type="radio" value="Male" name="quiz" /> {quiz.data.questions[7].options[3]}
                </div>

            </div>

        </div>
    );
};

export default QuizDetails;