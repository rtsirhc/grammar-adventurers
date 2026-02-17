import React, { useState } from 'react';
import StoryPage from '../components/StoryPage';
import Character from '../components/Character';

const Chapter3_DoDoes = () => {
    const [answers, setAnswers] = useState({ q1: null, q2: null });

    const checkAnswer = (q, val) => {
        setAnswers({ ...answers, [q]: val });
    };

    return (
        <StoryPage
            title="Chapter 3: The Secret Helpers"
            NextChapterPath="/chapter/4"
            PrevChapterPath="/chapter/2"
            ChapterContent={
                <div className="space-y-8">
                    <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
                        <h2 className="text-2xl font-bold text-purple-600 mb-2">DO vs. DOES</h2>
                        <p className="text-lg mb-4">These are our helper verbs! We use them to ask questions.</p>
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div className="bg-white p-3 rounded shadow">
                                <strong className="text-purple-600 block text-xl">DO</strong>
                                <span>I, You, We, They</span>
                            </div>
                            <div className="bg-white p-3 rounded shadow">
                                <strong className="text-purple-600 block text-xl">DOES</strong>
                                <span>He, She, It</span>
                            </div>
                        </div>
                    </div>

                    <Character
                        name="Leo"
                        dialogue="Do you like mysteries? I do! But does Mia like mysteries?"
                    />

                    <Character
                        name="Mia"
                        position="right"
                        dialogue="No, I don't! I like taking photos. Does your cat like photos?"
                    />

                    <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-slate-200">
                        <h3 className="text-xl font-bold text-center mb-6 text-adventure-blue">Can you fix the questions?</h3>

                        {/* Question 1 */}
                        <div className="mb-6 border-b pb-6">
                            <p className="text-2xl font-bold text-center mb-4">
                                ___ you want to go on an adventure?
                            </p>
                            <div className="flex justify-center gap-4">
                                <button
                                    onClick={() => checkAnswer('q1', 'Do')}
                                    className={`px-6 py-2 rounded-full font-bold text-xl border-4 ${answers.q1 === 'Do' ? 'bg-green-500 text-white border-green-600' : 'bg-white border-slate-200 hover:bg-slate-50'}`}
                                >
                                    Do
                                </button>
                                <button
                                    onClick={() => checkAnswer('q1', 'Does')}
                                    className={`px-6 py-2 rounded-full font-bold text-xl border-4 ${answers.q1 === 'Does' ? 'bg-red-500 text-white border-red-600' : 'bg-white border-slate-200 hover:bg-slate-50'}`}
                                >
                                    Does
                                </button>
                            </div>
                            {answers.q1 === 'Do' && <p className="text-green-600 text-center mt-2 font-bold">Correct! "You" needs "Do"!</p>}
                            {answers.q1 === 'Does' && <p className="text-red-500 text-center mt-2 font-bold">Try again! Look at the helper box 👆</p>}
                        </div>

                        {/* Question 2 */}
                        <div>
                            <p className="text-2xl font-bold text-center mb-4">
                                Where ___ she keep her map?
                            </p>
                            <div className="flex justify-center gap-4">
                                <button
                                    onClick={() => checkAnswer('q2', 'Do')}
                                    className={`px-6 py-2 rounded-full font-bold text-xl border-4 ${answers.q2 === 'Do' ? 'bg-red-500 text-white border-red-600' : 'bg-white border-slate-200 hover:bg-slate-50'}`}
                                >
                                    do
                                </button>
                                <button
                                    onClick={() => checkAnswer('q2', 'Does')}
                                    className={`px-6 py-2 rounded-full font-bold text-xl border-4 ${answers.q2 === 'Does' ? 'bg-green-500 text-white border-green-600' : 'bg-white border-slate-200 hover:bg-slate-50'}`}
                                >
                                    does
                                </button>
                            </div>
                            {answers.q2 === 'Does' && <p className="text-green-600 text-center mt-2 font-bold">Yes! "She" needs "Does"!</p>}
                            {answers.q2 === 'Do' && <p className="text-red-500 text-center mt-2 font-bold">Oops! "She" is special!</p>}
                        </div>
                    </div>
                </div>
            }
        />
    );
};

export default Chapter3_DoDoes;
