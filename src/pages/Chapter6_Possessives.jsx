import React, { useState } from 'react';
import StoryPage from '../components/StoryPage';
import Character from '../components/Character';

const Chapter6_Possessives = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [completed, setCompleted] = useState([]);

    // Items to give
    const items = [
        { id: 'camera', emoji: '📷', name: 'Camera', owner: 'Mia', pronouns: 'HER' },
        { id: 'skateboard', emoji: '🛹', name: 'Skateboard', owner: 'Leo', pronouns: 'HIS' },
        { id: 'map', emoji: '🗺️', name: 'Map', owner: 'Ivy', pronouns: 'HER' },
        { id: 'binoculars', emoji: '🔭', name: 'Binoculars', owner: 'Sam', pronouns: 'HIS' }
    ];

    // People to receive
    const people = [
        { name: 'Mia', color: 'bg-pink-100', text: '👩' },
        { name: 'Leo', color: 'bg-blue-100', text: '👦' },
        { name: 'Ivy', color: 'bg-yellow-100', text: '👧' },
        { name: 'Sam', color: 'bg-green-100', text: '🧑' }
    ];

    const handleItemClick = (item) => {
        if (!completed.includes(item.id)) {
            setSelectedItem(item);
        }
    };

    const handlePersonClick = (person) => {
        if (selectedItem && selectedItem.owner === person.name) {
            setCompleted([...completed, selectedItem.id]);
            setSelectedItem(null);
        } else if (selectedItem) {
            alert(`Oops! That's not ${person.name}'s item.`); // Simple feedback
        }
    };

    return (
        <StoryPage
            title="Chapter 6: Who Does It Belong To?"
            NextChapterPath="/chapter/7"
            PrevChapterPath="/chapter/5"
            ChapterContent={
                <div className="space-y-8">
                    <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
                        <h2 className="text-2xl font-bold text-red-600 mb-2">Possessive Adjectives</h2>
                        <div className="grid grid-cols-2 gap-4 text-lg">
                            <ul className="list-disc pl-5">
                                <li>My name</li>
                                <li>Your house</li>
                                <li><strong>His</strong> cat (Boy)</li>
                                <li><strong>Her</strong> dog (Girl)</li>
                            </ul>
                            <ul className="list-disc pl-5">
                                <li><strong>Its</strong> ball (Animal/Thing)</li>
                                <li>Our team</li>
                                <li>Their school</li>
                            </ul>
                        </div>
                    </div>

                    <Character
                        name="Leo"
                        dialogue="We mixed up our adventure gear! Can you help us get our things back?"
                    />

                    <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-slate-200 min-h-[400px]">
                        <h3 className="text-xl font-bold text-center mb-6 text-adventure-blue">
                            {selectedItem ? `Give the ${selectedItem.name} to...` : "Click an item to pick it up!"}
                        </h3>

                        {/* Items Area */}
                        <div className="flex justify-center gap-4 mb-8">
                            {items.map(item => {
                                if (completed.includes(item.id)) return null;
                                const isSelected = selectedItem?.id === item.id;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => handleItemClick(item)}
                                        className={`text-5xl p-4 rounded-xl border-4 transition transform hover:scale-110 ${isSelected ? 'bg-yellow-200 border-yellow-400 rotate-12 scale-110 shadow-xl' : 'bg-slate-50 border-slate-200'}`}
                                    >
                                        {item.emoji}
                                    </button>
                                );
                            })}
                            {completed.length === items.length && (
                                <div className="text-green-500 font-bold text-2xl anim-bounce">All items returned! 🎉</div>
                            )}
                        </div>

                        {/* People Area (Drop Zones) */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {people.map(person => (
                                <button
                                    key={person.name}
                                    onClick={() => handlePersonClick(person)}
                                    className={`p-4 rounded-xl border-2 ${person.color} border-slate-300 hover:brightness-95 transition flex flex-col items-center gap-2`}
                                >
                                    <div className="text-4xl">{person.text}</div>
                                    <div className="font-bold">{person.name}</div>
                                    {/* Show collected items */}
                                    <div className="flex bg-white/50 rounded p-1 min-h-[30px] w-full justify-center">
                                        {items.filter(i => i.owner === person.name && completed.includes(i.id)).map(i => (
                                            <span key={i.id} className="text-lg">{i.emoji}</span>
                                        ))}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            }
        />
    );
};

export default Chapter6_Possessives;
