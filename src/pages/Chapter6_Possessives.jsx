import React, { useState } from 'react';
import StoryPage from '../components/StoryPage';
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
        { id: 'binoculars', emoji: '🔭', name: 'Telescope', owner: 'Sam' }
    ];

    const people = [
        { name: 'Mia', image: miaImg, pronoun: 'Her' },
        { name: 'Leo', image: leoImg, pronoun: 'His' },
        { name: 'Ivy', image: ivyImg, pronoun: 'Her' },
        { name: 'Sam', image: samImg, pronoun: 'His' }
    ];

    const handleItemClick = (item) => {
        if (!completed.includes(item.id)) setSelectedItem(item);
    };

    const handlePersonClick = (person) => {
        if (selectedItem && selectedItem.owner === person.name) {
            setCompleted([...completed, selectedItem.id]);
            setSelectedItem(null);
        } else if (selectedItem) {
            alert(`That's not ${person.name}'s item! Try again.`);
        }
    };

    return (
        <StoryPage
            title='Chapter 6: The "Ownership Tags"'
            NextChapterPath="/chapter/7/title"
            PrevChapterPath="/chapter/6/title"

            ChapterContent={
                <div className="space-y-5 text-lg">
                    {/* Explanation */}
                    <div className="bg-red-50 p-5 rounded-xl border-l-8 border-red-400 shadow-sm">
                        <h3 className="font-bold text-xl text-red-700 mb-2">📖 Possessives</h3>
                        <p className="text-slate-700">
                            These words act like <strong>name tags</strong> on your belongings.
                        </p>
                    </div>

                    {/* The Concept */}
                    <div className="bg-white p-5 rounded-xl border-2 border-red-200 shadow-sm">
                        <h4 className="font-bold text-lg text-red-600 mb-3">💡 The Concept: Ownership Tags</h4>
                        <div className="grid grid-cols-2 gap-2 text-base">
                            <div className="bg-blue-50 p-3 rounded-lg text-center"><strong>My</strong> (me)</div>
                            <div className="bg-blue-50 p-3 rounded-lg text-center"><strong>Your</strong> (you)</div>
                            <div className="bg-green-50 p-3 rounded-lg text-center"><strong>His</strong> (a boy)</div>
                            <div className="bg-pink-50 p-3 rounded-lg text-center"><strong>Her</strong> (a girl)</div>
                            <div className="bg-purple-50 p-3 rounded-lg text-center"><strong>Our</strong> (us)</div>
                            <div className="bg-orange-50 p-3 rounded-lg text-center"><strong>Their</strong> (them)</div>
                        </div>
                    </div>

                    {/* Mini Game */}
                    <div className="bg-yellow-50 p-4 rounded-xl border-2 border-yellow-200">
                        <h4 className="font-bold text-yellow-700 mb-2">🎮 Mini Game: "Mix and Match"</h4>
                        <p className="text-slate-600 text-base mb-3">Click an item, then click the correct owner!</p>

                        <div className="bg-white p-4 rounded-xl shadow border-2 border-slate-100">
                            <p className="font-bold text-center mb-4 text-adventure-blue">
                                {completed.length === items.length
                                    ? "🎉 Great job! All items returned!"
                                    : selectedItem ? `Give the ${selectedItem.name} ${selectedItem.emoji} to...`
                                        : "Click an item to pick it up!"}
                            </p>

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
                            </div>
                        </div>
                    </div>
                </div>
            }

            CharacterArea={
                <div className="grid grid-cols-2 gap-4 w-full h-full items-end p-4">
                    {people.map(person => (
                        <div key={person.name} onClick={() => handlePersonClick(person)} className="relative cursor-pointer transition transform hover:scale-105 group flex flex-col items-center">
                            <img src={person.image} alt={person.name} className="h-40 md:h-48 object-contain mx-auto drop-shadow-xl" />
                            <span className="mt-1 bg-adventure-blue text-white px-2 py-1 rounded-full text-xs font-bold">{person.name}</span>
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
