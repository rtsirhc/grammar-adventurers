import React from 'react';
import StoryPage from '../components/StoryPage';
import Character from '../components/Character';
import { useGame } from '../context/GameContext';
import timeMachineImg from '../assets/time_machine_v2.png';
import leoImg from '../assets/leo.png';
import miaImg from '../assets/mia.png';

const Chapter7_SimplePast = () => {
    const { isTimeMachineActive, toggleTimeMachine } = useGame();

    // Force reset grayscale when the user leaves this page
    React.useEffect(() => {
        return () => {
            // Always force OFF when unmounting
            toggleTimeMachine(false);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // empty deps: only runs on unmount

    const handleToggle = () => {
        toggleTimeMachine(!isTimeMachineActive);
    };

    return (
        <StoryPage
            title="Chapter 7: The Time Machine"
            NextChapterPath="/test-intro"
            PrevChapterPath="/chapter/7/title"

            ChapterContent={
                <div className="space-y-5 text-base overflow-y-auto max-h-[75vh] pr-2">

                    {/* Time Machine Button */}
                    <div className="flex justify-center">
                        <button
                            onClick={handleToggle}
                            className="group relative transition transform hover:scale-105 focus:outline-none"
                        >
                            <img
                                src={timeMachineImg}
                                alt="Time Machine"
                                className={`w-40 h-40 object-contain transition-all duration-700 ${isTimeMachineActive ? "sepia brightness-75" : "drop-shadow-2xl group-hover:brightness-110"}`}
                            />
                            <div className={`absolute -bottom-5 left-1/2 transform -translate-x-1/2 px-5 py-2 rounded-full font-bold shadow-lg animate-pulse whitespace-nowrap border-2 text-sm ${isTimeMachineActive ? "bg-red-600 text-white border-red-800" : "bg-indigo-600 text-white border-indigo-400"}`}>
                                {isTimeMachineActive ? "🔴 RETURN TO PRESENT" : "⚡ TRAVEL TO THE PAST"}
                            </div>
                        </button>
                    </div>

                    {/* a. The "ED" Ending */}
                    <div className="bg-indigo-50 p-5 rounded-xl border-l-8 border-indigo-400 shadow-sm">
                        <h3 className="font-bold text-lg text-indigo-700 mb-2">a. The "ED" Ending (Regular Verbs)</h3>
                        <p className="text-slate-700 mb-2">
                            For many verbs, we just add a <strong>"tail"</strong> to the word to show it happened <strong>yesterday</strong>.
                        </p>
                        <div className="bg-white p-3 rounded-lg border border-indigo-200">
                            <p className="font-bold text-indigo-600 mb-1">Just add <span className="text-2xl text-red-500">-ed</span>!</p>
                            <ul className="list-disc pl-5 text-slate-700 space-y-1">
                                <li>Play ➡️ Play<strong className="text-red-500">ed</strong></li>
                                <li>Watch ➡️ Watch<strong className="text-red-500">ed</strong></li>
                                <li>Help ➡️ Help<strong className="text-red-500">ed</strong></li>
                                <li>Study ➡️ Studi<strong className="text-red-500">ed</strong></li>
                            </ul>
                        </div>
                    </div>

                    {/* b. Irregular Verbs */}
                    <div className="bg-red-50 p-5 rounded-xl border-l-8 border-red-400 shadow-sm">
                        <h3 className="font-bold text-lg text-red-700 mb-2">b. The "Changing" Verbs (Irregular Verbs)</h3>
                        <p className="text-slate-700 mb-2">
                            Some verbs are <strong>"rebels"</strong> and change their whole shape when they go into the past!
                        </p>
                        <div className="bg-white p-3 rounded-lg border border-red-200">
                            <p className="font-bold text-red-600 mb-2">Common Irregular Verbs:</p>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <div className="bg-red-50 p-2 rounded">Go ➡️ <strong>Went</strong></div>
                                <div className="bg-red-50 p-2 rounded">Eat ➡️ <strong>Ate</strong></div>
                                <div className="bg-red-50 p-2 rounded">See ➡️ <strong>Saw</strong></div>
                                <div className="bg-red-50 p-2 rounded">Have ➡️ <strong>Had</strong></div>
                                <div className="bg-red-50 p-2 rounded">Make ➡️ <strong>Made</strong></div>
                                <div className="bg-red-50 p-2 rounded">Come ➡️ <strong>Came</strong></div>
                                <div className="bg-red-50 p-2 rounded">Take ➡️ <strong>Took</strong></div>
                                <div className="bg-red-50 p-2 rounded">Give ➡️ <strong>Gave</strong></div>
                                <div className="bg-red-50 p-2 rounded">Say ➡️ <strong>Said</strong></div>
                                <div className="bg-red-50 p-2 rounded">Get ➡️ <strong>Got</strong></div>
                                <div className="bg-red-50 p-2 rounded">Run ➡️ <strong>Ran</strong></div>
                                <div className="bg-red-50 p-2 rounded">Write ➡️ <strong>Wrote</strong></div>
                            </div>
                        </div>
                    </div>

                    {/* c. The "Did" Helper */}
                    <div className="bg-purple-50 p-5 rounded-xl border-l-8 border-purple-400 shadow-sm">
                        <h3 className="font-bold text-lg text-purple-700 mb-2">c. The "Did" Helper (Questions & Negatives)</h3>
                        <p className="text-slate-700 mb-2">
                            Just like <em>Do/Does</em> help in the present, <strong>Did</strong> is the helper for the past.
                        </p>
                        <div className="bg-white p-3 rounded-lg border border-purple-200">
                            <p className="text-slate-700 mb-1">
                                When <strong>Did</strong> shows up, the main verb goes back to its <strong>normal form</strong>!
                            </p>
                            <ul className="list-disc pl-5 text-slate-600 space-y-1 text-sm">
                                <li><strong>Did</strong> you study? (NOT: Did you studi<em>ed</em>)</li>
                                <li>I <strong>didn't</strong> go to school. (NOT: didn't <em>went</em>)</li>
                            </ul>
                        </div>
                    </div>

                    {/* d. Past "To Be" */}
                    <div className="bg-green-50 p-5 rounded-xl border-l-8 border-green-400 shadow-sm">
                        <h3 className="font-bold text-lg text-green-700 mb-2">d. Past "To Be" (Was / Were)</h3>
                        <p className="text-slate-700 mb-2">
                            <em>Am/Is/Are</em> also have past versions to describe how things <strong>felt</strong> or <strong>where people were</strong>.
                        </p>
                        <div className="bg-white p-3 rounded-lg border border-green-200">
                            <div className="space-y-2">
                                <div className="flex items-center gap-3 bg-blue-50 p-2 rounded">
                                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full font-bold">WAS</span>
                                    <span>I / He / She / It</span>
                                </div>
                                <div className="flex items-center gap-3 bg-green-50 p-2 rounded">
                                    <span className="bg-green-600 text-white px-3 py-1 rounded-full font-bold">WERE</span>
                                    <span>You / We / They</span>
                                </div>
                            </div>
                            <ul className="list-disc pl-5 text-slate-600 space-y-1 mt-2 text-sm">
                                <li>I <strong>was</strong> happy yesterday.</li>
                                <li>They <strong>were</strong> at the park.</li>
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
                        dialogue={isTimeMachineActive ? "Yesterday, I played soccer. I went to the park!" : "Today, I play soccer. I go to the park!"}
                        isTalking={true}
                    />
                    <Character
                        name="Mia"
                        image={miaImg}
                        dialogue={isTimeMachineActive ? "I was happy! We were at school. She ate lunch." : "I am happy! We are at school. She eats lunch."}
                        isTalking={true}
                    />
                </>
            }
        />
    );
};

export default Chapter7_SimplePast;
