import React from 'react';

const Quiz = ({ question }) => {
    return (
        <div className='custom-quiz'>
            {question.options.map((option) => (
                <div className='flex border border-sky-400 p-4 rounded-lg bg-slate-100'>
                    
                        <div>
                            <input type="radio" value={option} className='mr-2 mt-4' /> {option}
                        </div>
                    
                    {/* <div>{option}</div> */}

                </div>
            ))}

        </div>
    );
};

export default Quiz;