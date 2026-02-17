import React from 'react';
import StoryPage from '../components/StoryPage';
import Character from '../components/Character';
import { useGame } from '../context/GameContext';
import timeMachineImg from '../assets/time_machine_v2.png';
import leoImg from '../assets/leo.png';
import miaImg from '../assets/mia.png';

const Chapter7_SimplePast = () => {
    const { isTimeMachineActive, toggleTimeMachine } = useGame();

    // Reset machine when leaving (handled by cleanup in useEffect would be better, 
    // but for now we rely on the user manually turning it off or we force it in the layout)
    // Actually, user wants it ensuring reset. I'll add a useEffect here.
    React.useEffect(() => {
        return () => {
            if (isTimeMachineActive) toggleTimeMachine();
        };
    }, [isTimeMachineActive, toggleTimeMachine]);

    return (
        <StoryPage
            title="Chapter 7: The Time Machine"
            NextChapterPath="/test-intro"
            PrevChapterPath="/chapter/7/title"

            ChapterContent={
                <div className="space-y-6 flex flex-col items-center w-full">

                    <button
                        onClick={toggleTimeMachine}
                        className="group relative transition transform hover:scale-105 focus:outline-none z-10"
                    >
                        <img
                            src={timeMachineImg}
                            alt="Time Machine"
                            className={`w-48 h-48 md:w-64 md:h-64 object-contain transition-all duration-1000 ${isTimeMachineActive ? "grayscale sepia brightness-50" : "drop-shadow-2xl filter group-hover:brightness-110"}`}
                        />
                        <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full font-bold shadow-lg animate-pulse whitespace-nowrap border-2 ${isTimeMachineActive ? "bg-red-600 text-white border-red-800" : "bg-indigo-600 text-white border-indigo-400"}`}>
                            {isTimeMachineActive ? "🔴 RETURN TO PRESENT" : "⚡ TRAVEL TO THE PAST"}
                        </div>
                    </button>

                    <div className={`p-6 rounded-xl border-l-8 w-full shadow-md transition-colors duration-500 ${isTimeMachineActive ? "bg-gray-100 border-gray-500 text-slate-600" : "bg-indigo-50 border-indigo-500 text-indigo-900"}`}>
                        <h3 className="font-bold text-xl mb-3 border-b pb-2 border-inherit">{isTimeMachineActive ? "Past Tense (Yesterday)" : "Present Tense (Today)"}</h3>

                        {isTimeMachineActive ? (
                            <div className="space-y-4">
                                <p className="font-medium italic">"We use the **Simple Past** for finished actions."</p>
                                <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
                                    <div className="bg-white p-3 rounded shadow-sm">
                                        <span className="block font-bold text-gray-400 text-xs uppercase">Regular (+ed)</span>
                                        <span>Play ➡️ Play<strong>ed</strong></span><br />
                                        <span>Watch ➡️ Watch<strong>ed</strong></span>
                                    </div>
                                    <div className="bg-white p-3 rounded shadow-sm">
                                        <span className="block font-bold text-gray-400 text-xs uppercase">Irregular (Crazy!)</span>
                                        <span>Go ➡️ <strong>Went</strong></span><br />
                                        <span>Is/Am ➡️ <strong>Was</strong></span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p className="text-lg">
                                Click the button to travel back in time! Watch what happens to the verbs.
                            </p>
                        )}
                    </div>
                </div>
            }

            CharacterArea={
                <>
                    <Character
                        name="Leo"
                        image={leoImg}
                        dialogue={isTimeMachineActive ? "Yesterday, I **played** soccer with Sam." : "Today, I **play** soccer with Sam."}
                        isTalking={true}
                    />
                    <Character
                        name="Mia"
                        image={miaImg}
                        dialogue={isTimeMachineActive ? "I **went** to the park. It **was** fun!" : "I **go** to the park. It **is** fun!"}
                        isTalking={true}
                    />
                </>
            }
        />
    );
};

export default Chapter7_SimplePast;
