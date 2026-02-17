import React, { useEffect } from 'react';
import StoryPage from '../components/StoryPage';
import Character from '../components/Character';
import { useGame } from '../context/GameContext';
import timeMachineImg from '../assets/time_machine.png';

const Chapter7_SimplePast = () => {
    const { isTimeMachineActive, toggleTimeMachine } = useGame();

    // Reset machine state when leaving chapter? 
    // Maybe better to keep it if they navigate back/forth? 
    // Let's keep it persistent, but ensure they can turn it off.

    return (
        <StoryPage
            title="Chapter 7: The Time Machine"
            NextChapterPath="/test"
            PrevChapterPath="/chapter/6"
            ChapterContent={
                <div className="space-y-8">
                    <div className={`transition-colors duration-1000 p-6 rounded-xl border-4 ${isTimeMachineActive ? "bg-gray-800 border-gray-600 text-white" : "bg-indigo-50 border-indigo-200 text-slate-800"}`}>
                        <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
                            {isTimeMachineActive ? "🕰️ THE PAST (Yesterday)" : "🚀 THE PRESENT (Today)"}
                        </h2>
                        <p className="text-lg">
                            {isTimeMachineActive
                                ? "We are in the past! Everything is different here. We use the SIMPLE PAST tense."
                                : "Ready to travel back in time? Click the Time Machine!"}
                        </p>

                        <div className="flex justify-center my-6">
                            <button
                                onClick={() => toggleTimeMachine()}
                                className="transform transition hover:scale-105 hover:rotate-2 focus:outline-none"
                            >
                                <img
                                    src={timeMachineImg}
                                    alt="Time Machine"
                                    className={`w-64 h-64 object-contain transition-all duration-1000 ${isTimeMachineActive ? "grayscale sepia brightness-50" : "drop-shadow-2xl filter hover:brightness-110"}`}
                                />
                                <p className="text-center font-bold mt-2 animate-pulse">
                                    {isTimeMachineActive ? "Click to Return to Present" : "CLICK TO TRAVEL!"}
                                </p>
                            </button>
                        </div>
                    </div>

                    <Character
                        name="Leo"
                        dialogue={
                            isTimeMachineActive
                                ? "Wow! Yesterday, I **was** at school. I **played** soccer."
                                : "Today, I **am** here. I **play** video games."
                        }
                    />

                    <Character
                        name="Mia"
                        position="right"
                        dialogue={
                            isTimeMachineActive
                                ? "Yesterday, I **went** to the park. I **saw** a dog."
                                : "Today, I **go** to the park. I **see** a dog."
                        }
                    />

                    {isTimeMachineActive && (
                        <div className="bg-gray-100 p-6 rounded-xl shadow-lg border-2 border-gray-300 text-slate-800">
                            <h3 className="text-xl font-bold text-center mb-6">The Magic Verbs List</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-center border-b-2 border-gray-400 pb-2">Regular Verbs (+ed)</h4>
                                    <ul className="space-y-2 text-lg">
                                        <li className="flex justify-between"><span>Play</span> <span>➡️ Played</span></li>
                                        <li className="flex justify-between"><span>Watch</span> <span>➡️ Watched</span></li>
                                        <li className="flex justify-between"><span>Visit</span> <span>➡️ Visited</span></li>
                                        <li className="flex justify-between"><span>Walk</span> <span>➡️ Walked</span></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-center border-b-2 border-red-400 pb-2 text-red-600">Irregular Verbs (Change!)</h4>
                                    <ul className="space-y-2 text-lg">
                                        <li className="flex justify-between font-bold text-red-500"><span>Go</span> <span>➡️ Went</span></li>
                                        <li className="flex justify-between font-bold text-red-500"><span>See</span> <span>➡️ Saw</span></li>
                                        <li className="flex justify-between font-bold text-red-500"><span>Eat</span> <span>➡️ Ate</span></li>
                                        <li className="flex justify-between font-bold text-red-500"><span>Have</span> <span>➡️ Had</span></li>
                                        <li className="flex justify-between font-bold text-red-500"><span>Am/Is</span> <span>➡️ Was</span></li>
                                        <li className="flex justify-between font-bold text-red-500"><span>Are</span> <span>➡️ Were</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            }
        />
    );
};

export default Chapter7_SimplePast;
