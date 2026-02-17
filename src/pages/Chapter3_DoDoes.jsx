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
            title="Chapter 3: Do or Does?"
            NextChapterPath="/chapter/4/title"
            PrevChapterPath="/chapter/3/title"

            ChapterContent={
                <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-xl border-2 border-purple-200 mb-6">
                        <h3 className="font-bold text-purple-600">The Rule:</h3>
                        <ul className="list-disc pl-5">
                            <li><strong>Do</strong> you / we / they / I ...?</li>
                            <li><strong>Does</strong> he / she / it ...?</li>
                        </ul>
                    </div>

                    <h3 className="font-bold text-lg text-purple-700 mb-4">Click the correct word to complete the sentence!</h3>

                    <div className="space-y-4">
                        <div className="p-3 bg-white rounded shadow border border-slate-100">
                            <p className="font-bold mb-2">1. ______ you like pizza?</p>
                            <div className="flex gap-2">
                                <button onClick={() => checkAnswer(1, 'Do')} className={`px-3 py-1 rounded ${answers[1] === 'Do' ? 'bg-green-500 text-white' : 'bg-slate-200'}`}>Do</button>
                                <button onClick={() => checkAnswer(1, 'Does')} className={`px-3 py-1 rounded ${answers[1] === 'Does' ? 'bg-red-500 text-white' : 'bg-slate-200'}`}>Does</button>
                            </div>
                        </div>

                        <div className="p-3 bg-white rounded shadow border border-slate-100">
                            <p className="font-bold mb-2">2. ______ Leo play soccer?</p>
                            <div className="flex gap-2">
                                <button onClick={() => checkAnswer(2, 'Do')} className={`px-3 py-1 rounded ${answers[2] === 'Do' ? 'bg-red-500 text-white' : 'bg-slate-200'}`}>Do</button>
                                <button onClick={() => checkAnswer(2, 'Does')} className={`px-3 py-1 rounded ${answers[2] === 'Does' ? 'bg-green-500 text-white' : 'bg-slate-200'}`}>Does</button>
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
                        dialogue="Yes I do! But does it take videos?"
                        isTalking={true}
                    />
                </>
            }
        />
    );
};

export default Chapter3_DoDoes;
