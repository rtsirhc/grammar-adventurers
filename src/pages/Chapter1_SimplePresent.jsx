import React, { useState } from 'react';
import StoryPage from '../components/StoryPage';
import Character from '../components/Character';
import leoImg from '../assets/leo.png';
import miaImg from '../assets/mia.png';

const Chapter1_SimplePresent = () => {
    const [highlighted, setHighlighted] = useState(false);

    return (
        <StoryPage
            title="Chapter 1: The Daily Routine"
            NextChapterPath="/chapter/2/title"
            PrevChapterPath="/chapter/1/title"

            ChapterContent={
                <div className="space-y-6 text-lg">
                    <div className="bg-yellow-50 p-6 rounded-xl border-l-8 border-yellow-400 shadow-sm">
                        <h3 className="font-bold text-xl text-yellow-600 mb-2">Grammar Rule: Simple Present</h3>
                        <p>We use this for <strong>habits</strong> and <strong>facts</strong>.</p>
                        <button
                            onClick={() => setHighlighted(!highlighted)}
                            className="mt-4 px-4 py-2 bg-yellow-400 text-white font-bold rounded-lg shadow hover:bg-yellow-500 transition"
                        >
                            Show the Magic Rule ✨
                        </button>
                    </div>

                    <div className={`transition-all duration-500 ${highlighted ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                        <div className="bg-red-50 p-4 rounded-xl border-2 border-red-200">
                            <p className="font-bold text-red-500">He / She / It + S</p>
                            <ul className="list-disc pl-5 mt-2 text-slate-700">
                                <li>I play ➡️ He play<strong>s</strong></li>
                                <li>She watch ➡️ She watch<strong>es</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
            }

            CharacterArea={
                <>
                    <Character
                        name="Leo"
                        image={leoImg}
                        dialogue="Hi! I am Leo. Every day, I wake up at 7 AM. I like skateboarding!"
                        isTalking={true}
                    />
                    <Character
                        name="Mia"
                        image={miaImg}
                        dialogue="And Leo wakes up early! He likes mornings. I play with my camera."
                        isTalking={true}
                    />
                </>
            }
        />
    );
};

export default Chapter1_SimplePresent;
