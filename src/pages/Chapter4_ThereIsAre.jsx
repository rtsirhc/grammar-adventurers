import React from 'react';
import StoryPage from '../components/StoryPage';
import Character from '../components/Character';
import samImg from '../assets/sam.png';

const Chapter4_ThereIsAre = () => {
    return (
        <StoryPage
            title="Chapter 4: What's In The Bag?"
            NextChapterPath="/chapter/5/title"
            PrevChapterPath="/chapter/4/title"

            ChapterContent={
                <div className="space-y-6">
                    <div className="bg-orange-50 p-4 rounded-xl border-l-8 border-orange-400">
                        <h3 className="font-bold text-xl text-orange-600 mb-2">Rule:</h3>
                        <ul className="list-disc pl-5 text-lg">
                            <li><strong>There is</strong> (1 thing)</li>
                            <li><strong>There are</strong> (2+ things)</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-inner border-4 border-slate-200 text-center">
                        <div className="text-6xl mb-4">🎒 🍎 🍎 🗺️</div>
                        <p className="text-2xl font-bold text-slate-800">In my bag...</p>
                        <ul className="text-left mt-4 text-lg space-y-2 inline-block">
                            <li>✅ <strong>There is</strong> a map.</li>
                            <li>✅ <strong>There are</strong> two apples.</li>
                        </ul>
                    </div>
                </div>
            }

            CharacterArea={
                <Character
                    name="Sam"
                    image={samImg}
                    dialogue="Look! There is a sandwich too. Wait... where is it?"
                    isTalking={true}
                />
            }
        />
    );
};

export default Chapter4_ThereIsAre;
