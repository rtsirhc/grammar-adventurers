import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MockTest = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const questions = [
        // Simple Present
        { id: 1, text: "Every day, Leo ______ up at 7 AM.", options: ["wake", "wakes", "waking"], correct: "wakes" },
        { id: 2, text: "I ______ pizza.", options: ["like", "likes", "liking"], correct: "like" },
        { id: 3, text: "She ______ play soccer.", options: ["don't", "doesn't", "isn't"], correct: "doesn't" },

        // Verb To Be
        { id: 4, text: "They ______ my best friends.", options: ["am", "is", "are"], correct: "are" },
        { id: 5, text: "I ______ a student.", options: ["am", "is", "are"], correct: "am" },
        { id: 6, text: "The cat ______ hungry.", options: ["am", "is", "are"], correct: "is" },

        // Do / Does
        { id: 7, text: "______ you speak English?", options: ["Do", "Does", "Is"], correct: "Do" },
        { id: 8, text: "Where ______ he live?", options: ["do", "does", "is"], correct: "does" },
        { id: 9, text: "______ she have a sister?", options: ["Do", "Does", "Are"], correct: "Does" },

        // There is / Prepositions
        { id: 10, text: "______ two apples on the table.", options: ["There is", "There are", "It is"], correct: "There are" },
        { id: 11, text: "The cat is ______ the box. (Inside)", options: ["on", "in", "under"], correct: "in" },
        { id: 12, text: "There ______ a map in the bag.", options: ["is", "are", "am"], correct: "is" },

        // Possessives
        { id: 13, text: "This is Mia. This is ______ camera.", options: ["his", "her", "your"], correct: "her" },
        { id: 14, text: "I have a bike. It is ______ bike.", options: ["my", "your", "his"], correct: "my" },

        // Simple Past
        { id: 15, text: "Yesterday, I ______ to the park.", options: ["go", "goed", "went"], correct: "went" },

        // Reading Tasks
        {
            id: 16,
            type: "reading",
            passage: "Leo: 'Hi, I'm Leo! I love adventure. Yesterday I visited the forest. I saw a big bear!'",
            text: "Where did Leo go yesterday?",
            options: ["The beach", "The forest", "School"],
            correct: "The forest"
        },
        {
            id: 17,
            type: "reading",
            passage: "Mia likes photos. She has a red camera. She takes photos of her cat, Whiskers.",
            text: "What color is Mia's camera?",
            options: ["Blue", "Red", "Black"],
            correct: "Red"
        },
        {
            id: 18,
            type: "reading",
            passage: "Sam is hungry. He wants a burger. But there is only salad in the fridge.",
            text: "What does Sam want?",
            options: ["A burger", "Salad", "Pizza"],
            correct: "A burger"
        },
        {
            id: 19,
            type: "reading",
            passage: "Yesterday was Sunday. Ivy played tennis with her brother. They were happy.",
            text: "Who did Ivy play with?",
            options: ["Her sister", "Her brother", "Leo"],
            correct: "Her brother"
        },
        {
            id: 20,
            type: "reading",
            passage: "The Time Machine is shiny. It has a big red button. Do not touch it!",
            text: "What does the machine have?",
            options: ["A blue button", "A red button", "A green button"],
            correct: "A red button"
        }
    ];

    const handleAnswer = (option) => {
        setSelectedAnswer(option);
        if (option === questions[currentQuestion].correct) {
            setScore(score + 1);
        }

        setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedAnswer(null);
            } else {
                setShowResults(true);
            }
        }, 1000);
    };

    if (showResults) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex flex-col items-center justify-center p-8 text-white">
                <div className="bg-white text-slate-800 p-12 rounded-3xl shadow-2xl text-center max-w-2xl w-full">
                    <h1 className="text-5xl font-comic font-bold mb-6 text-adventure-blue">Test Complete! 🎓</h1>
                    <p className="text-2xl mb-4">You scored:</p>
                    <div className="text-8xl font-bold text-green-500 mb-8">{score} / 20</div>

                    <p className="text-xl mb-8">
                        {score === 20 ? "PERFECT SCORE! You are a Grammar Master! 🌟" :
                            score >= 15 ? "Great job! You are a true adventurer! 🚀" :
                                "Good practice! Try again to get a perfect score! 💪"}
                    </p>

                    <Link to="/" className="inline-block px-8 py-4 bg-adventure-yellow hover:bg-yellow-400 text-white font-bold rounded-full text-xl shadow-lg transition transform hover:scale-105">
                        Back to Home 🏠
                    </Link>
                </div>
            </div>
        );
    }

    const question = questions[currentQuestion];

    return (
        <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4">
            <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white">
                {/* Header */}
                <div className="bg-adventure-blue p-6 text-white flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Mock Test 📝</h2>
                    <div className="text-xl font-bold">Question {currentQuestion + 1} / 20</div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-200 h-2">
                    <div className="bg-green-500 h-2 transition-all duration-500" style={{ width: `${((currentQuestion) / 20) * 100}%` }}></div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                    {question.passage && (
                        <div className="bg-yellow-50 p-6 rounded-xl border-l-8 border-yellow-400 mb-8 text-lg font-serif italic text-slate-700">
                            " {question.passage} "
                        </div>
                    )}

                    <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-slate-800">
                        {question.text}
                    </h3>

                    <div className="grid grid-cols-1 gap-4">
                        {question.options.map((option, idx) => (
                            <button
                                key={idx}
                                onClick={() => !selectedAnswer && handleAnswer(option)}
                                disabled={selectedAnswer !== null}
                                className={`
                                    p-4 rounded-xl text-xl font-bold border-2 transition-all text-left px-8
                                    ${selectedAnswer === option
                                        ? (option === question.correct ? "bg-green-100 border-green-500 text-green-700" : "bg-red-100 border-red-500 text-red-700")
                                        : "bg-white border-slate-200 hover:bg-blue-50 hover:border-blue-300 text-slate-700 shadow-sm"
                                    }
                                `}
                            >
                                <span className="mr-4 inline-block w-8 h-8 rounded-full bg-slate-200 text-slate-500 text-center text-sm leading-8">{String.fromCharCode(65 + idx)}</span>
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MockTest;
