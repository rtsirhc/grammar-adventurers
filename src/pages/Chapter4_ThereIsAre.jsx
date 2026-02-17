import React from 'react';
import StoryPage from '../components/StoryPage';
import Character from '../components/Character';
import samImg from '../assets/sam.png';
import ivyImg from '../assets/ivy.png';

const Chapter4_ThereIsAre = () => {
    return (
        <StoryPage
            title='Chapter 4: The "Counting Game"'
            NextChapterPath="/chapter/5/title"
            PrevChapterPath="/chapter/4/title"

            ChapterContent={
                <div className="space-y-5 text-lg">
                    {/* Explanation */}
                    <div className="bg-orange-50 p-5 rounded-xl border-l-8 border-orange-400 shadow-sm">
                        <h3 className="font-bold text-xl text-orange-700 mb-2">📖 There is / There are</h3>
                        <p className="text-slate-700">
                            Use this to talk about <strong>what exists</strong> in the room right now.
                        </p>
                    </div>

                    {/* The Concept */}
                    <div className="bg-white p-5 rounded-xl border-2 border-orange-200 shadow-sm">
                        <h4 className="font-bold text-lg text-orange-600 mb-3">💡 The Concept</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                                <span className="bg-blue-500 text-white px-3 py-2 rounded-full font-bold text-lg whitespace-nowrap">THERE IS</span>
                                <span className="text-slate-700">For <strong>1 thing</strong> (Singular)</span>
                            </div>
                            <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
                                <span className="bg-green-500 text-white px-3 py-2 rounded-full font-bold text-lg whitespace-nowrap">THERE ARE</span>
                                <span className="text-slate-700">For <strong>2 or more things</strong> (Plural)</span>
                            </div>
                        </div>
                    </div>

                    {/* Activity */}
                    <div className="bg-yellow-50 p-4 rounded-xl border-2 border-yellow-200">
                        <h4 className="font-bold text-yellow-700 mb-2">🎒 Activity: "What's in my Backpack?"</h4>
                        <p className="text-slate-600 text-base mb-3">Look at the items and make sentences!</p>

                        <div className="bg-white p-6 rounded-xl shadow-inner border-4 border-slate-200 text-center">
                            <div className="text-6xl mb-4">🎒 🍎 🍎 🗺️ ✏️</div>
                            <ul className="text-left mt-4 text-lg space-y-2 inline-block">
                                <li>✅ <strong>There is</strong> a map.</li>
                                <li>✅ <strong>There is</strong> a pencil.</li>
                                <li>✅ <strong>There are</strong> two apples.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            }

            CharacterArea={
                <>
                    <Character
                        name="Sam"
                        image={samImg}
                        dialogue="There is a sandwich in my bag! Wait... there are two!"
                        isTalking={true}
                    />
                    <Character
                        name="Ivy"
                        image={ivyImg}
                        dialogue="There are many books on the desk. There is one pencil."
                        isTalking={true}
                    />
                </>
            }
        />
    );
};

export default Chapter4_ThereIsAre;
