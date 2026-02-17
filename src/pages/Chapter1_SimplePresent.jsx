import React, { useState } from 'react';
import StoryPage from '../components/StoryPage';
import Character from '../components/Character';
import leoImg from '../assets/leo.png';
import miaImg from '../assets/mia.png';

const Chapter1_SimplePresent = () => {
    const [showRule, setShowRule] = useState(false);

    return (
        <StoryPage
            title="Chapter 1: The &quot;Super S&quot; Hero"
            NextChapterPath="/chapter/2/title"
            PrevChapterPath="/chapter/1/title"

            ChapterContent={
                <div className="space-y-5 text-lg">
                    {/* Explanation */}
                    <div className="bg-yellow-50 p-5 rounded-xl border-l-8 border-yellow-400 shadow-sm">
                        <h3 className="font-bold text-xl text-yellow-700 mb-2">📖 Simple Present</h3>
                        <p className="text-slate-700">
                            We use the Simple Present for things we do <strong>every single day</strong>, like a routine.
                        </p>
                    </div>

                    {/* The Concept */}
                    <div className="bg-white p-5 rounded-xl border-2 border-yellow-200 shadow-sm">
                        <h4 className="font-bold text-lg text-yellow-600 mb-3">💡 The Concept</h4>
                        <p className="text-slate-700 mb-3">
                            Most people just use the plain verb:
                        </p>
                        <div className="bg-green-50 p-3 rounded-lg mb-3 text-center">
                            <span className="text-green-700 font-bold text-xl">I study &nbsp;·&nbsp; They eat &nbsp;·&nbsp; We play</span>
                        </div>
                        <p className="text-slate-700 mb-3">
                            However, <strong>He</strong>, <strong>She</strong>, and <strong>It</strong> are <em>"Special"</em> and need the <strong className="text-red-500">"Super S"</strong> at the end of their verbs!
                        </p>
                        <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200 text-center">
                            <p className="font-bold text-red-600 text-2xl mb-2">He / She / It + <span className="text-3xl">S</span> 🦸</p>
                            <ul className="text-left inline-block text-slate-700 space-y-1 mt-2">
                                <li>I eat ➡️ He eat<strong className="text-red-500 text-xl">s</strong></li>
                                <li>I study ➡️ She studi<strong className="text-red-500 text-xl">es</strong></li>
                                <li>I watch ➡️ He watch<strong className="text-red-500 text-xl">es</strong></li>
                                <li>I play ➡️ She play<strong className="text-red-500 text-xl">s</strong></li>
                            </ul>
                        </div>
                    </div>

                    {/* Mini Activity */}
                    <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
                        <h4 className="font-bold text-blue-600 mb-2">🎭 Activity: "Routine Charades"</h4>
                        <p className="text-slate-600 text-base">
                            Act out a daily routine like <em>"wake up"</em>. The class guesses: <strong>"He wakes up!"</strong> or <strong>"She plays!"</strong>.
                            Remember to add the <strong className="text-red-500">Super S</strong>! 🌟
                        </p>
                    </div>
                </div>
            }

            CharacterArea={
                <>
                    <Character
                        name="Leo"
                        image={leoImg}
                        dialogue="Every day, I wake up at 7 AM. He wakes up early too!"
                        isTalking={true}
                    />
                    <Character
                        name="Mia"
                        image={miaImg}
                        dialogue="She studies English. He plays soccer. The Super S is everywhere!"
                        isTalking={true}
                    />
                </>
            }
        />
    );
};

export default Chapter1_SimplePresent;
