import React from 'react';
import { Link } from 'react-router-dom';

const IndexPage = () => {
    const chapters = [
        { id: 1, title: "Simple Present", desc: "Daily Routines", color: "bg-adventure-red" },
        { id: 2, title: "Verb 'To Be'", desc: "Am, Is, Are", color: "bg-pink-400" },
        { id: 3, title: "Do / Does", desc: "Questions", color: "bg-purple-400" },
        { id: 4, title: "There Is / Are", desc: "Counting", color: "bg-orange-400" },
        { id: 5, title: "Prepositions", desc: "Where is it?", color: "bg-adventure-blue" },
        { id: 6, title: "Possessives", desc: "My, Your, His", color: "bg-red-500" },
        { id: 7, title: "Simple Past", desc: "The Time Machine", color: "bg-indigo-600" },
    ];

    return (
        <div className="min-h-screen bg-amber-50 flex flex-col items-center py-12 px-4">
            <h1 className="text-5xl font-comic font-bold text-slate-800 mb-12 underline decoration-wavy decoration-adventure-blue">Table of Contents</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
                {chapters.map((chapter) => (
                    <Link
                        key={chapter.id}
                        to={`/chapter/${chapter.id}/title`}
                        className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-105 border-2 border-slate-100 group"
                    >
                        <div className={`w-16 h-16 ${chapter.color} rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-inner group-hover:rotate-12 transition`}>
                            {chapter.id}
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-700 group-hover:text-adventure-blue transition">{chapter.title}</h2>
                            <p className="text-slate-500">{chapter.desc}</p>
                        </div>
                    </Link>
                ))}

                {/* Mock Test Link */}
                <Link to="/test-intro" className="md:col-span-2 flex items-center justify-center gap-4 bg-green-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-105 border-2 border-green-300 group mt-4">
                    <span className="text-4xl">🎓</span>
                    <div>
                        <h2 className="text-3xl font-bold text-green-700">Final Mock Test</h2>
                        <p className="text-green-600 text-center">Are you ready?</p>
                    </div>
                </Link>
            </div>

            <div className="mt-12">
                <Link to="/" className="text-slate-400 hover:text-slate-600 font-bold">⬅️ Back to Cover</Link>
            </div>
        </div>
    );
};

export default IndexPage;
