import React, { useState } from 'react';
import StoryPage from '../components/StoryPage';
import Character from '../components/Character';
import miaImg from '../assets/mia.png';

const Chapter5_Prepositions = () => {
    const [catPosition, setCatPosition] = useState('on'); // on, in, under, next_to

    return (
        <StoryPage
            title="Chapter 5: Where is the Cat?"
            NextChapterPath="/chapter/6/title"
            PrevChapterPath="/chapter/5/title"

            ChapterContent={
                <div className="space-y-6">
                    <h3 className="font-bold text-xl text-blue-600 mb-4">Click the buttons to move the cat!</h3>

                    <div className="grid grid-cols-2 gap-4">
                        <button onClick={() => setCatPosition('on')} className={`p-3 rounded-xl border-b-4 font-bold transition ${catPosition === 'on' ? 'bg-blue-500 text-white border-blue-700' : 'bg-white border-slate-200 hover:bg-blue-50'}`}>ON</button>
                        <button onClick={() => setCatPosition('in')} className={`p-3 rounded-xl border-b-4 font-bold transition ${catPosition === 'in' ? 'bg-blue-500 text-white border-blue-700' : 'bg-white border-slate-200 hover:bg-blue-50'}`}>IN</button>
                        <button onClick={() => setCatPosition('under')} className={`p-3 rounded-xl border-b-4 font-bold transition ${catPosition === 'under' ? 'bg-blue-500 text-white border-blue-700' : 'bg-white border-slate-200 hover:bg-blue-50'}`}>UNDER</button>
                        <button onClick={() => setCatPosition('next_to')} className={`p-3 rounded-xl border-b-4 font-bold transition ${catPosition === 'next_to' ? 'bg-blue-500 text-white border-blue-700' : 'bg-white border-slate-200 hover:bg-blue-50'}`}>NEXT TO</button>
                    </div>

                    <div className="mt-8 text-center text-2xl font-bold text-slate-700">
                        The cat is <span className="text-blue-500 underline decoration-wavy">{catPosition.replace('_', ' ').toUpperCase()}</span> the box.
                    </div>
                </div>
            }

            CharacterArea={
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* The Box Scene */}
                    <div className="relative w-64 h-64">
                        {/* The Box */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-orange-300 border-4 border-orange-500 rounded-lg z-10 flex items-center justify-center shadow-lg">
                            <span className="text-orange-700 font-bold opacity-50 text-4xl">BOX</span>
                        </div>

                        {/* The Cat */}
                        <div className={`absolute transition-all duration-500 text-6xl z-20
                    ${catPosition === 'on' ? 'bottom-[160px] left-1/2 -translate-x-1/2' : ''}
                    ${catPosition === 'in' ? 'bottom-[60px] left-1/2 -translate-x-1/2 z-0 opacity-80' : ''}
                    ${catPosition === 'under' ? '-bottom-[40px] left-1/2 -translate-x-1/2 z-20 scale-y-50 origin-top' : ''} 
                    ${catPosition === 'next_to' ? 'bottom-0 -right-8' : ''}
                `}>
                            🐱
                        </div>
                    </div>

                    {/* Mia watching */}
                    <div className="absolute bottom-0 right-0 scale-75 origin-bottom-right">
                        <Character name="Mia" image={miaImg} />
                    </div>
                </div>
            }
        />
    );
};

export default Chapter5_Prepositions;
