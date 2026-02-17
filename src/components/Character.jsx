import React from 'react';

const Character = ({ name, image, dialogue, isTalking = true }) => {
    return (
        <div className="relative group flex flex-col items-center transition-all duration-500 hover:scale-105">

            {/* Speech Bubble (Only if talking) */}
            {isTalking && dialogue && (
                <div className="absolute bottom-full mb-4 w-64 bg-white p-4 rounded-2xl shadow-xl border-2 border-slate-200 z-20">
                    <p className="text-base font-comic leading-snug text-slate-800">
                        {dialogue}
                    </p>
                    {/* Bubble Tail */}
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-b-2 border-r-2 border-slate-200 rotate-45"></div>
                </div>
            )}

            {/* Character Sprite */}
            <div className="relative z-10 flex flex-col items-center">
                <img
                    src={image}
                    alt={name}
                    className="w-full max-w-[280px] h-auto object-contain drop-shadow-2xl filter hover:brightness-110 transition"
                />

                {/* Name Badge */}
                <div className="mt-1 bg-adventure-blue text-white px-4 py-1 rounded-full text-sm font-bold shadow-md border-2 border-white uppercase tracking-wider whitespace-nowrap">
                    {name}
                </div>
            </div>

        </div>
    );
};

export default Character;
