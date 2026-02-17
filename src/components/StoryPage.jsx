import React from 'react';
import { useGame } from '../context/GameContext';

const StoryPage = ({ title, ChapterContent, NextChapterPath, PrevChapterPath }) => {
    const { isTimeMachineActive } = useGame();

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen p-8 ${isTimeMachineActive ? 'bg-gray-200' : 'bg-gradient-to-br from-adventure-blue to-adventure-green'}`}>
            <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-5xl w-full border-8 border-white bg-opacity-90 backdrop-blur-sm min-h-[80vh] flex flex-col relative overflow-hidden">

                {/* Header */}
                <div className="flex justify-between items-center mb-8 border-b-4 border-slate-100 pb-4">
                    <h1 className="text-4xl font-comic font-bold text-adventure-blue">{title}</h1>
                    <div className="flex gap-2">
                        {/* Visual indicator for current mode */}
                        {isTimeMachineActive && <span className="text-xs font-bold bg-gray-800 text-white px-2 py-1 rounded">PAST MODE</span>}
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-grow">
                    {ChapterContent}
                </div>

                {/* Navigation Footer */}
                <div className="mt-8 flex justify-between items-center">
                    {PrevChapterPath ? (
                        <a href={PrevChapterPath} className="px-6 py-3 bg-slate-200 hover:bg-slate-300 rounded-full font-bold text-slate-700 transition transform hover:scale-105">
                            ⬅️ Previous
                        </a>
                    ) : <div></div>}

                    {NextChapterPath ? (
                        <a href={NextChapterPath} className="px-6 py-3 bg-adventure-yellow hover:bg-yellow-400 rounded-full font-bold text-white shadow-lg transition transform hover:scale-105">
                            Next Adventure ➡️
                        </a>
                    ) : <div></div>}
                </div>

            </div>
        </div>
    );
};

export default StoryPage;
