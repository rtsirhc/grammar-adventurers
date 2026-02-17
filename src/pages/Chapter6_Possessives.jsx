import React, { useState } from 'react';
import StoryPage from '../components/StoryPage';
import Character from '../components/Character';
import leoImg from '../assets/leo.png';
import miaImg from '../assets/mia.png';
import ivyImg from '../assets/ivy.png';
import samImg from '../assets/sam.png';

const Chapter6_Possessives = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [completed, setCompleted] = useState([]);

    const items = [
        { id: 'camera', emoji: '📷', name: 'Camera', owner: 'Mia' },
        { id: 'skateboard', emoji: '🛹', name: 'Skateboard', owner: 'Leo' },
        { id: 'map', emoji: '🗺️', name: 'Map', owner: 'Ivy' },
        { id: 'binoculars', emoji: '🔭', name: 'Binoculars', owner: 'Sam' }
    ];

    const people = [
        { name: 'Mia', image: miaImg },
        { name: 'Leo', image: leoImg },
        { name: 'Ivy', image: ivyImg },
        { name: 'Sam', image: samImg }
    ];

    const handleItemClick = (item) => {
        if (!completed.includes(item.id)) setSelectedItem(item);
    };

    const handlePersonClick = (person) => {
        if (selectedItem && selectedItem.owner === person.name) {
            setCompleted([...completed, selectedItem.id]);
            setSelectedItem(null);
        } else if (selectedItem) {
            alert(`That's not ${person.name}'s item!`);
        }
    };

    return (
        <StoryPage
            title="Chapter 6: Who Does It Belong To?"
            NextChapterPath="/chapter/7/title"
            PrevChapterPath="/chapter/6/title"

            ChapterContent={
                <div className="space-y-6">
                    <h3 className="font-bold text-xl text-red-600 mb-2 border-b-2 border-red-100 pb-2">Possessive Adjectives</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm md:text-base mb-4">
                        <div>My name</div>
                        <div>Your house</div>
                        <div><strong>His</strong> cat (Boy)</div>
                        <div><strong>Her</strong> dog (Girl)</div>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow border-2 border-slate-100">
                        <p className="font-bold text-center mb-4 text-adventure-blue">
                            {selectedItem ? `Give the ${selectedItem.name} to...` : "Click an item to pick it up!"}
                        </p>

                        {/* Items */}
                        <div className="flex justify-center gap-4 mb-4">
                            {items.map(item => {
                                if (completed.includes(item.id)) return null;
                                const isSelected = selectedItem?.id === item.id;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => handleItemClick(item)}
                                        className={`text-4xl p-3 rounded-xl border-4 transition ${isSelected ? 'bg-yellow-200 border-yellow-400 rotate-12 scale-110' : 'bg-slate-50 border-slate-200 hover:scale-105'}`}
                                    >
                                        {item.emoji}
                                    </button>
                                );
                            })}
                            {completed.length === items.length && (
                                <div className="text-green-500 font-bold text-xl animate-bounce">Great job! 🎉</div>
                            )}
                        </div>
                    </div>
                </div>
            }

            CharacterArea={
                <div className="grid grid-cols-4 gap-2 w-full h-full items-end">
                    {people.map(person => (
                        <div key={person.name} onClick={() => handlePersonClick(person)} className="relative cursor-pointer transition transform hover:scale-105 group">
                            <img src={person.image} alt={person.name} className="h-32 md:h-40 object-contain mx-auto" />
                            {/* Floating collected item */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4">
                                {items.filter(i => i.owner === person.name && completed.includes(i.id)).map(i => (
                                    <span key={i.id} className="text-3xl drop-shadow-md animate-bounce">{i.emoji}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            }
        />
    );
};

export default Chapter6_Possessives;
