import React from 'react';
import StoryPage from '../components/StoryPage';
import Character from '../components/Character';
import { useGame } from '../context/GameContext';
import timeMachineImg from '../assets/time_machine_v2.png';
import leoImg from '../assets/leo.png';
import miaImg from '../assets/mia.png';

const Chapter7_SimplePast = () => {
    const { isTimeMachineActive, toggleTimeMachine } = useGame();

    return (
        <StoryPage
            title="Chapter 7: The Time Machine"
            NextChapterPath="/test-intro"
            PrevChapterPath="/chapter/7/title"

            ChapterContent={
                <div className="space-y-6 flex flex-col items-center">

                    <button
                        onClick={toggleTimeMachine}
                        className="group relative transition transform hover:scale-105 focus:outline-none"
                    >
                        <img
                            src={timeMachineImg}
                            alt="Time Machine"
                            className={`w-64 h-64 object-contain transition-all duration-1000 ${isTimeMachineActive ? "grayscale sepia brightness-50" : "drop-shadow-2xl filter group-hover:brightness-110"}`}
                        />
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-pulse whitespace-nowrap">
                            {isTimeMachineActive ? "RETURN TO PRESENT" : "TRAVEL TO THE PAST"}
                        </div>
                    </button>

                    <div className={`p-4 rounded-xl border-l-4 w-full ${isTimeMachineActive ? "bg-gray-100 border-gray-500 text-slate-600" : "bg-indigo-50 border-indigo-500 text-indigo-900"}`}>
                        <h3 className="font-bold text-lg mb-2">{isTimeMachineActive ? "The Past (Yesterday)" : "The Present (Today)"}</h3>
                        <p>
                            {isTimeMachineActive
                                ? "Everything is different! We use words like 'was', 'went', and 'played'."
                                : "Click the machine to see what happens to the world!"}
                        </p>
                    </div>
                </div>
            }

            CharacterArea={
                <>
                    <Character
                        name="Leo"
                        image={leoImg}
                        dialogue={isTimeMachineActive ? "Yesterday, I **played** soccer." : "Today, I **play** soccer."}
                        isTalking={true}
                    />
                    <Character
                        name="Mia"
                        image={miaImg}
                        dialogue={isTimeMachineActive ? "I **went** to the park." : "I **go** to the park."}
                        isTalking={true}
                    />
                </>
            }
        />
    );
};

export default Chapter7_SimplePast;
