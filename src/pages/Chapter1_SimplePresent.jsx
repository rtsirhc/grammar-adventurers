import React, { useState } from 'react';
import StoryPage from '../components/StoryPage';
import Character from '../components/Character';

const Chapter1_SimplePresent = () => {
    const [highlightRule, setHighlightRule] = useState(false);

    const toggleHighlight = () => setHighlightRule(!highlightRule);

    return (
        <StoryPage
            title="Chapter 1: The Daily Routine"
            NextChapterPath="/chapter/2"
            PrevChapterPath="/"
            ChapterContent={
                <div className="space-y-8">
                    <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-200">
                        <h2 className="text-2xl font-bold text-yellow-600 mb-2">Grammar Rule: Simple Present</h2>
                        <p className="text-lg">We use the Simple Present to talk about <strong>habits, routines, and facts</strong>.</p>
                        <button
                            onClick={toggleHighlight}
                            className="mt-4 px-4 py-2 bg-adventure-yellow text-white font-bold rounded-lg shadow hover:bg-yellow-400 transition"
                        >
                            {highlightRule ? "Hide the Magic Rule ✨" : "Show the Magic Rule ✨"}
                        </button>
                    </div>

                    <Character
                        name="Leo"
                        dialogue="Hi! I am Leo. I am an adventurer. Every day, I wake up at 7 AM."
                    />

                    <Character
                        name="Mia"
                        position="right"
                        dialogue={
                            <span>
                                Yes! Leo <span className={highlightRule ? "text-red-500 font-bold text-2xl bg-yellow-100 px-1 rounded transition-all" : ""}>wakes</span> up early. But I <span className={highlightRule ? "text-green-500 font-bold transition-all" : ""}>sleep</span> until 8 AM!
                            </span>
                        }
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white p-6 rounded-xl shadow border border-slate-200">
                            <h3 className="text-xl font-bold text-center mb-4 text-adventure-blue">I, You, We, They</h3>
                            <ul className="space-y-2 text-center text-lg">
                                <li>I play</li>
                                <li>You eat</li>
                                <li>We study</li>
                                <li>They travel</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow border-2 border-adventure-red relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-adventure-red text-white text-xs font-bold px-2 py-1 rounded-bl">Super Rule!</div>
                            <h3 className="text-xl font-bold text-center mb-4 text-adventure-red">He, She, It (The 3rd Person)</h3>
                            <ul className="space-y-2 text-center text-lg">
                                <li>He play<span className="text-adventure-red font-bold">s</span></li>
                                <li>She eat<span className="text-adventure-red font-bold">s</span></li>
                                <li>It studie<span className="text-adventure-red font-bold">s</span></li>
                                <li>Leo travel<span className="text-adventure-red font-bold">s</span></li>
                            </ul>
                            <p className="text-center text-sm text-gray-500 mt-4 italic">Don't forget the S!</p>
                        </div>
                    </div>
                </div>
            }
        />
    );
};

export default Chapter1_SimplePresent;
