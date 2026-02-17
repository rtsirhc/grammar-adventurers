import React from 'react';
import characterImg from '../assets/characters_sample.png';

const Character = ({ name, dialogue, position = "left" }) => {
    return (
        <div className={`flex items-center gap-6 mb-10 ${position === "right" ? "flex-row-reverse text-right" : "flex-row text-left"}`}>

            {/* Character Avatar with Name Badge */}
            <div className="flex flex-col items-center">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-white shadow-xl overflow-hidden bg-adventure-blue transform hover:scale-105 transition duration-300">
                    <img
                        src={characterImg}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className={`mt-[-15px] z-10 px-4 py-1 rounded-full text-white font-bold shadow-md text-sm uppercase tracking-wide ${position === "right" ? "bg-adventure-red" : "bg-adventure-blue"}`}>
                    {name}
                </div>
            </div>

            {/* Dialogue Text (No Bubble) */}
            <div className="max-w-xl">
                <p className="text-2xl font-comic leading-relaxed text-slate-700 drop-shadow-sm">
                    "{dialogue}"
                </p>
            </div>

        </div>
    );
};

export default Character;
