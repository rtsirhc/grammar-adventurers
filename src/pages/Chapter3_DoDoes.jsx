import React, { useState } from 'react';
import StoryPage from '../components/StoryPage';
import Character from '../components/Character';
import leoImg from '../assets/leo.png';
import miaImg from '../assets/mia.png';

const Chapter3_DoDoes = () => {
    const [answers, setAnswers] = useState({});

    const checkAnswer = (qId, answer) => {
        setAnswers({ ...answers, [qId]: answer });
    };

    return (
        <StoryPage
            title='Chapter 3: The "Question Helpers"'
            NextChapterPath="/chapter/4/title"
            PrevChapterPath="/chapter/3/title"

            ChapterContent={
                <div className="space-y-5 text-lg">
                    {/* Explanation */}
                    <div className="bg-purple-50 p-5 rounded-xl border-l-8 border-purple-400 shadow-sm">
                        <h3 className="font-bold text-xl text-purple-700 mb-2">📖 Do / Does</h3>
                        <p className="text-slate-700">
                            In English, verbs are sometimes <em>"shy"</em> and need a <strong>"Helper"</strong> to ask a question or say "No".
                        </p>
                    </div>

                    {/* The Concept */}
                    <div className="bg-white p-5 rounded-xl border-2 border-purple-200 shadow-sm">
                        <h4 className="font-bold text-lg text-purple-600 mb-3">💡 The Concept</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
                                <span className="bg-blue-500 text-white px-4 py-1 rounded-full font-bold text-xl">DO</span>
                                <span className="text-slate-700">Helps the "plain" group: <strong>I, You, We, They</strong></span>
                            </div>
                            <div className="flex items-center gap-3 bg-orange-50 p-3 rounded-lg">
                                <span className="bg-orange-500 text-white px-3 py-1 rounded-full font-bold text-xl">DOES</span>
                                <span className="text-slate-700">Helps the "special" group: <strong>He, She, It</strong></span>
                            </div>
                        </div>

                        <div className="mt-4 bg-yellow-50 p-3 rounded-lg text-base">
                            <p>📝 <strong>Examples:</strong></p>
                            <ul className="list-disc pl-5 mt-1 text-slate-600 space-y-1">
                                <li><strong>Do</strong> you study in the morning?</li>
                                <li><strong>Does</strong> he play in the park?</li>
                                <li>I <strong>don't</strong> like spinach.</li>
                                <li>She <strong>doesn't</strong> play tennis.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Mini Game */}
                    <div className="bg-yellow-50 p-4 rounded-xl border-2 border-yellow-200">
                        <h4 className="font-bold text-yellow-700 mb-2">🎮 Mini Game: "The Secret Interviewer"</h4>
                        <p className="text-slate-600 text-base mb-3">Click the correct helper to complete the question!</p>

                        <div className="space-y-4">
                            <div className="p-3 bg-white rounded shadow border border-slate-100">
                                <p className="font-bold mb-2">1. ______ you like pizza?</p>
                                <div className="flex gap-2">
                                    <button onClick={() => checkAnswer(1, 'Do')} className={`px-4 py-2 rounded-lg font-bold ${answers[1] === 'Do' ? 'bg-green-500 text-white' : 'bg-slate-200 hover:bg-slate-300'}`}>Do</button>
                                    <button onClick={() => checkAnswer(1, 'Does')} className={`px-4 py-2 rounded-lg font-bold ${answers[1] === 'Does' ? 'bg-red-500 text-white' : 'bg-slate-200 hover:bg-slate-300'}`}>Does</button>
                                </div>
                            </div>

                            <div className="p-3 bg-white rounded shadow border border-slate-100">
                                <p className="font-bold mb-2">2. ______ Leo play soccer?</p>
                                <div className="flex gap-2">
                                    <button onClick={() => checkAnswer(2, 'Do')} className={`px-4 py-2 rounded-lg font-bold ${answers[2] === 'Do' ? 'bg-red-500 text-white' : 'bg-slate-200 hover:bg-slate-300'}`}>Do</button>
                                    <button onClick={() => checkAnswer(2, 'Does')} className={`px-4 py-2 rounded-lg font-bold ${answers[2] === 'Does' ? 'bg-green-500 text-white' : 'bg-slate-200 hover:bg-slate-300'}`}>Does</button>
                                </div>
                            </div>

                            <div className="p-3 bg-white rounded shadow border border-slate-100">
                                <p className="font-bold mb-2">3. ______ they study English?</p>
                                <div className="flex gap-2">
                                    <button onClick={() => checkAnswer(3, 'Do')} className={`px-4 py-2 rounded-lg font-bold ${answers[3] === 'Do' ? 'bg-green-500 text-white' : 'bg-slate-200 hover:bg-slate-300'}`}>Do</button>
                                    <button onClick={() => checkAnswer(3, 'Does')} className={`px-4 py-2 rounded-lg font-bold ${answers[3] === 'Does' ? 'bg-red-500 text-white' : 'bg-slate-200 hover:bg-slate-300'}`}>Does</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            CharacterArea={
                <>
                    <Character
                        name="Mia"
                        image={miaImg}
                        dialogue="Do you like my camera? Does it look cool?"
                        isTalking={true}
                    />
                    <Character
                        name="Leo"
                        image={leoImg}
                        dialogue="Yes I do! Does she take photos every day?"
                        isTalking={true}
                    />
                </>
            }
        />
    );
};

export default Chapter3_DoDoes;
