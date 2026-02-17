import React from 'react';
import { Link } from 'react-router-dom';
import { useGame } from '../context/GameContext';

const StoryPage = ({ title, ChapterContent, NextChapterPath, PrevChapterPath, CharacterArea }) => {
    const { isTimeMachineActive } = useGame();

    return (
        <div className={`flex flex-col min-h-screen overflow-hidden ${isTimeMachineActive ? 'bg-gray-200' : 'bg-slate-50'}`}>

            {/* Top Bar with Title */}
            <div className={`p-4 shadow-md z-20 flex justify-between items-center ${isTimeMachineActive ? 'bg-gray-800 text-white' : 'bg-white text-adventure-blue'}`}>
                <h2 className="text-xl md:text-2xl font-comic font-bold truncate">{title}</h2>
                {isTimeMachineActive && <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">TIME MACHINE ACTIVE</span>}
            </div>

            {/* Main Book Content Area */}
            <div className="flex-grow flex flex-col md:flex-row relative">

                {/* Left Page / Top (Mobile): Content & Interactions */}
                <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto flex flex-col justify-center bg-white/50 relative z-10">
                    <div className="max-w-xl mx-auto w-full">
                        {ChapterContent}
                    </div>
                </div>

                {/* Right Page / Bottom (Mobile): Characters & Visuals */}
                <div className={`w-full md:w-1/2 min-h-[40vh] md:min-h-auto relative flex items-end justify-center p-4 border-l-4 border-slate-100 ${isTimeMachineActive ? 'grayscale sepia contrast-125' : ''}`}>
                    {/* Background tint/pattern would go here */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>

                    {/* Character Staging Area */}
                    <div className="w-full h-full flex items-end justify-center gap-4 relative z-0">
                        {CharacterArea}
                    </div>
                </div>

                {/* Page Turn Arrows (Overlay) */}
                <div className="absolute inset-0 pointer-events-none flex justify-between items-center px-4 md:px-8 z-50">
                    {PrevChapterPath ? (
                        <Link to={PrevChapterPath} className="pointer-events-auto opacity-50 hover:opacity-100 transition transform hover:-translate-x-1 duration-300">
                            <div className="w-16 h-16 bg-white/80 backdrop-blur rounded-full shadow-lg flex items-center justify-center text-4xl text-adventure-blue hover:text-adventure-red border-2 border-slate-200">
                                ⬅️
                            </div>
                        </Link>
                    ) : <div></div>}

                    {NextChapterPath ? (
                        <Link to={NextChapterPath} className="pointer-events-auto opacity-80 hover:opacity-100 transition transform hover:translate-x-1 duration-300">
                            <div className="w-16 h-16 bg-white/90 backdrop-blur rounded-full shadow-xl flex items-center justify-center text-4xl text-adventure-green hover:text-green-600 border-2 border-green-200 animate-pulse-slow">
                                ➡️
                            </div>
                        </Link>
                    ) : <div></div>}
                </div>

            </div>
        </div>
    );
};

export default StoryPage;
