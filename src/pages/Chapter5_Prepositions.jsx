import React, { useState } from 'react';
import StoryPage from '../components/StoryPage';
import Character from '../components/Character';
import miaImg from '../assets/mia.png';

const Chapter5_Prepositions = () => {
    const [catPosition, setCatPosition] = useState('on');

    return (
        <StoryPage
            title="Chapter 5: Prepositions"
            NextChapterPath="/chapter/6/title"
            PrevChapterPath="/chapter/5/title"

            ChapterContent={
                <div className="space-y-5 text-lg">
                    {/* Explanation */}
                    <div className="bg-blue-50 p-5 rounded-xl border-l-8 border-blue-400 shadow-sm">
                        <h3 className="font-bold text-xl text-blue-700 mb-2">📖 Prepositions</h3>
                        <p className="text-slate-700">
                            Prepositions tell us exactly <strong>where</strong> a "friend" or a "pencil" is hiding.
                        </p>
                    </div>

                    {/* The Concept */}
                    <div className="bg-white p-5 rounded-xl border-2 border-blue-200 shadow-sm">
                        <h4 className="font-bold text-lg text-blue-600 mb-3">💡 The Concept</h4>
                        <p className="text-slate-700 mb-3">Use these words to show <strong>position</strong>:</p>
                        <div className="grid grid-cols-5 gap-2 text-center">
                            <div className="bg-blue-100 p-2 rounded-lg font-bold text-blue-700">IN</div>
                            <div className="bg-blue-100 p-2 rounded-lg font-bold text-blue-700">ON</div>
                            <div className="bg-blue-100 p-2 rounded-lg font-bold text-blue-700">AT</div>
                            <div className="bg-blue-100 p-2 rounded-lg font-bold text-blue-700">UNDER</div>
                            <div className="bg-blue-100 p-2 rounded-lg font-bold text-blue-700">NEXT TO</div>
                        </div>
                    </div>

                    {/* Mini Game */}
                    <div className="bg-yellow-50 p-4 rounded-xl border-2 border-yellow-200">
                        <h4 className="font-bold text-yellow-700 mb-2">🎮 Mini Game: Move the Cat!</h4>
                        <p className="text-slate-600 text-base mb-3">Click the buttons to move the cat around the box!</p>

                        <div className="grid grid-cols-2 gap-3">
                            <button onClick={() => setCatPosition('on')} className={`p-3 rounded-xl border-b-4 font-bold transition ${catPosition === 'on' ? 'bg-blue-500 text-white border-blue-700' : 'bg-white border-slate-200 hover:bg-blue-50'}`}>ON</button>
                            <button onClick={() => setCatPosition('in')} className={`p-3 rounded-xl border-b-4 font-bold transition ${catPosition === 'in' ? 'bg-blue-500 text-white border-blue-700' : 'bg-white border-slate-200 hover:bg-blue-50'}`}>IN</button>
                            <button onClick={() => setCatPosition('under')} className={`p-3 rounded-xl border-b-4 font-bold transition ${catPosition === 'under' ? 'bg-blue-500 text-white border-blue-700' : 'bg-white border-slate-200 hover:bg-blue-50'}`}>UNDER</button>
                            <button onClick={() => setCatPosition('next_to')} className={`p-3 rounded-xl border-b-4 font-bold transition ${catPosition === 'next_to' ? 'bg-blue-500 text-white border-blue-700' : 'bg-white border-slate-200 hover:bg-blue-50'}`}>NEXT TO</button>
                        </div>

                        <div className="mt-4 text-center text-2xl font-bold text-slate-700">
                            The cat is <span className="text-blue-500 underline decoration-wavy">{catPosition.replace('_', ' ').toUpperCase()}</span> the box.
                        </div>
                    </div>
                </div>
            }

            CharacterArea={
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* The Box Scene */}
                    <div className="relative w-72 h-72">
                        {/* The Box */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center">
                            <span className="text-[120px] leading-none drop-shadow-lg">📦</span>
                        </div>

                        {/* The Cat */}
                        <div className={`absolute transition-all duration-500 text-7xl z-20
                            ${catPosition === 'on' ? 'bottom-[155px] left-1/2 -translate-x-1/2' : ''}
                            ${catPosition === 'in' ? 'bottom-[80px] left-1/2 -translate-x-1/2 z-0 opacity-70' : ''}
                            ${catPosition === 'under' ? '-bottom-[10px] left-1/2 -translate-x-1/2 z-0' : ''}
                            ${catPosition === 'next_to' ? 'bottom-4 -right-2' : ''}
                        `}>
                            🐱
                        </div>
                    </div>

                    {/* Mia watching */}
                    <div className="absolute bottom-0 right-0">
                        <Character name="Mia" image={miaImg} isTalking={false} />
                    </div>
                </div>
            }
        />
    );
};

export default Chapter5_Prepositions;
