import React, { useState } from 'react';
import StoryPage from '../components/StoryPage';
import Character from '../components/Character';

const Chapter4_ThereIsAre = () => {
    return (
        <StoryPage
            title="Chapter 4: What is in the Backpack?"
            NextChapterPath="/chapter/5"
            PrevChapterPath="/chapter/3"
            ChapterContent={
                <div className="space-y-8">
                    <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-200">
                        <h2 className="text-2xl font-bold text-orange-600 mb-2">There IS vs. There ARE</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                            <p>👉 We use <strong>There is</strong> for ONE thing (Singular).</p>
                            <p>👉 We use <strong>There are</strong> for MANY things (Plural).</p>
                        </div>
                    </div>

                    <Character
                        name="Leo"
                        dialogue={
                            <span>
                                Let's check my backpack! <br />
                                <span className="text-orange-600 font-bold">There is</span> one map. <br />
                                <span className="text-orange-600 font-bold">There are</span> three apples.
                            </span>
                        }
                    />

                    <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-slate-200">
                        <h3 className="text-xl font-bold text-center mb-6 text-adventure-blue">Look at the picture!</h3>

                        <div className="flex justify-center mb-6">
                            <div className="bg-slate-100 p-8 rounded-xl border-4 border-slate-300 relative w-64 h-48 flex items-center justify-center">
                                <div className="text-6xl">🍎 🍎 🍎</div>
                                <div className="absolute top-2 right-2 text-4xl">🗺️</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-orange-100 p-4 rounded-lg text-center">
                                <p className="font-bold text-xl">How many maps?</p>
                                <p className="text-orange-600 font-bold text-2xl mt-2">There IS 1 map.</p>
                            </div>
                            <div className="bg-orange-100 p-4 rounded-lg text-center">
                                <p className="font-bold text-xl">How many apples?</p>
                                <p className="text-orange-600 font-bold text-2xl mt-2">There ARE 3 apples.</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        />
    );
};

export default Chapter4_ThereIsAre;
