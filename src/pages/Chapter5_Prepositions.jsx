import React, { useState } from 'react';
import StoryPage from '../components/StoryPage';
import Character from '../components/Character';

const Chapter5_Prepositions = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [feedback, setFeedback] = useState(null);

    const questions = [
        {
            id: 1,
            correct: 'ON',
            question: "Where is the cat?",
            sceneClass: "items-end justify-center", // Box bottom, Cat on top
            catClass: "mb-0", // Cat sits on box
            boxContent: ""
        },
        {
            id: 2,
            correct: 'UNDER',
            question: "Where is the cat?",
            sceneClass: "items-end justify-center flex-col",
            catClass: "order-2", // Cat below box? CSS stack might be better
            boxContent: ""
        },
        {
            id: 3,
            correct: 'IN',
            question: "Where is the cat?",
            sceneClass: "items-center justify-center",
            catClass: "opacity-50", // Cat inside (simulated)
            boxContent: "🐱"
        }
    ];

    // Let's refine the visual logic. Easier to just render different DOM structures based on state.
    const renderScene = (type) => {
        switch (type) {
            case 'ON':
                return (
                    <div className="flex flex-col items-center">
                        <div className="text-6xl mb-[-10px] z-10">🐱</div>
                        <div className="w-32 h-32 bg-amber-700 rounded shadow-lg flex items-center justify-center text-white font-bold">BOX</div>
                    </div>
                );
            case 'UNDER':
                return (
                    <div className="flex flex-col items-center">
                        <div className="w-32 h-32 bg-amber-700 rounded shadow-lg flex items-center justify-center text-white font-bold z-10">BOX</div>
                        <div className="text-6xl mt-[-20px]">🐱</div>
                    </div>
                );
            case 'IN':
                return (
                    <div className="relative w-32 h-32 bg-amber-700 rounded shadow-lg flex items-end justify-center overflow-hidden">
                        <div className="text-4xl absolute bottom-2">🐱</div>
                        <div className="absolute inset-x-0 bottom-0 h-16 bg-amber-800 opacity-90"></div>
                        <span className="absolute top-2 text-white font-bold text-xs">BOX</span>
                    </div>
                );
            case 'NEXT TO':
                return (
                    <div className="flex items-end gap-2">
                        <div className="w-32 h-32 bg-amber-700 rounded shadow-lg flex items-center justify-center text-white font-bold">BOX</div>
                        <div className="text-6xl">🐱</div>
                    </div>
                );
            case 'BEHIND':
                return (
                    <div className="relative flex items-center justify-center w-40 h-40">
                        <div className="text-6xl absolute top-0">🐱</div>
                        <div className="w-32 h-32 bg-amber-700 rounded shadow-lg flex items-center justify-center text-white font-bold z-10 relative">BOX</div>
                    </div>
                );
            default: return null;
        }
    };

    const gameLevels = ['ON', 'UNDER', 'IN', 'NEXT TO', 'BEHIND'];
    const currentPreposition = gameLevels[currentQuestion];

    const handleAnswer = (answer) => {
        if (answer === currentPreposition) {
            setFeedback({ type: 'success', text: `Correct! The cat is ${answer} the box!` });
            setTimeout(() => {
                setFeedback(null);
                if (currentQuestion < gameLevels.length - 1) {
                    setCurrentQuestion(currentQuestion + 1);
                } else {
                    setFeedback({ type: 'finish', text: "You found the cat everywhere! 🎉" });
                }
            }, 1500);
        } else {
            setFeedback({ type: 'error', text: "Try again! Look closely! 👀" });
        }
    };

    return (
        <StoryPage
            title="Chapter 5: Where is the Cat?"
            NextChapterPath="/chapter/6"
            PrevChapterPath="/chapter/4"
            ChapterContent={
                <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">Prepositions</h2>
                        <p className="text-lg">Prepositions tell us <strong>WHERE</strong> things are. Look for the cat!</p>
                    </div>

                    <Character
                        name="Mia"
                        dialogue="My cat Whiskers is hiding! Can you help me find him?"
                    />

                    <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-slate-200 flex flex-col items-center min-h-[400px]">
                        <h3 className="text-xl font-bold text-center mb-8 text-adventure-blue">Where is the cat?</h3>

                        <div className="bg-slate-100 p-8 rounded-full w-64 h-64 flex items-center justify-center mb-8 border-4 border-slate-200">
                            {renderScene(currentPreposition)}
                        </div>

                        {feedback?.type === 'finish' ? (
                            <div className="text-center anim-bounce">
                                <h2 className="text-3xl font-bold text-green-500 mb-4">{feedback.text}</h2>
                            </div>
                        ) : (
                            <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                                {['IN', 'ON', 'UNDER', 'NEXT TO', 'BEHIND', 'BETWEEN'].map(prep => (
                                    <button
                                        key={prep}
                                        onClick={() => handleAnswer(prep)}
                                        className="px-4 py-3 bg-white border-2 border-adventure-blue text-adventure-blue font-bold rounded-lg hover:bg-blue-50 active:bg-blue-100 shadow transition"
                                    >
                                        {prep}
                                    </button>
                                ))}
                            </div>
                        )}

                        {feedback && feedback.type !== 'finish' && (
                            <div className={`mt-4 font-bold text-xl ${feedback.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                                {feedback.text}
                            </div>
                        )}
                    </div>
                </div>
            }
        />
    );
};

export default Chapter5_Prepositions;
