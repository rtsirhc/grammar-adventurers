import React from 'react';

const Character = ({ name, dialogue, position = "left" }) => {
    return (
        <div className={`flex items-end gap-4 mb-8 ${position === "right" ? "flex-row-reverse" : "flex-row"}`}>
            {/* Character Avatar Circle */}
            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-adventure-blue">
                <img
                    src="/src/assets/characters_sample.png"
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Speech Bubble */}
            <div className={`bg-white p-6 rounded-2xl shadow-md border-2 border-slate-100 max-w-lg relative ${position === "right" ? "rounded-br-none" : "rounded-bl-none"}`}>
                <h3 className="font-bold text-adventure-blue mb-1">{name}</h3>
                <p className="text-lg leading-relaxed">{dialogue}</p>
            </div>
        </div>
    );
};

export default Character;
