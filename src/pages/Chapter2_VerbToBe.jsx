import React from 'react';
import StoryPage from '../components/StoryPage';
import Character from '../components/Character';
import MatchingGame from '../components/MatchingGame';
import samImg from '../assets/sam.png';
import ivyImg from '../assets/ivy.png';

const Chapter2_VerbToBe = () => {
    return (
        <StoryPage
            title='Chapter 2: The "Identity Sticker"'
            NextChapterPath="/chapter/3/title"
            PrevChapterPath="/chapter/2/title"

            ChapterContent={
                <div className="space-y-5 text-lg">
                    {/* Explanation */}
                    <div className="bg-pink-50 p-5 rounded-xl border-l-8 border-pink-400 shadow-sm">
                        <h3 className="font-bold text-xl text-pink-700 mb-2">📖 Verb "To Be"</h3>
                        <p className="text-slate-700">
                            Think of the Verb <em>To Be</em> as a <strong>sticker</strong> that tells us <strong>what</strong> or <strong>who</strong> someone is.
                        </p>
                    </div>

                    {/* The Concept */}
                    <div className="bg-white p-5 rounded-xl border-2 border-pink-200 shadow-sm">
                        <h4 className="font-bold text-lg text-pink-600 mb-3">💡 The Concept: Match the Right Sticker!</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
                                <span className="bg-blue-500 text-white px-3 py-1 rounded-full font-bold text-xl">AM</span>
                                <span className="text-slate-700">I <strong>am</strong> Leo. (I always gets <em>am</em>)</span>
                            </div>
                            <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                                <span className="bg-green-500 text-white px-3 py-1 rounded-full font-bold text-xl">IS</span>
                                <span className="text-slate-700">He/She/It <strong>is</strong> (singular gets <em>is</em>)</span>
                            </div>
                            <div className="flex items-center gap-3 bg-purple-50 p-3 rounded-lg">
                                <span className="bg-purple-500 text-white px-3 py-1 rounded-full font-bold text-xl">ARE</span>
                                <span className="text-slate-700">You/We/They <strong>are</strong> (the group gets <em>are</em>)</span>
                            </div>
                        </div>
                    </div>

                    {/* Mini Game Instructions */}
                    <div className="bg-yellow-50 p-4 rounded-xl border-2 border-yellow-200">
                        <h4 className="font-bold text-yellow-700 mb-2">🎮 Mini Game: Match the Pairs!</h4>
                        <p className="text-slate-600 text-base mb-3">Connect the subject with the correct verb sticker.</p>
                        <MatchingGame
                            pairs={[
                                { id: 1, left: "I", right: "Am" },
                                { id: 2, left: "She", right: "Is" },
                                { id: 3, left: "They", right: "Are" },
                                { id: 4, left: "We", right: "Are" },
                            ]}
                        />
                    </div>
                </div>
            }

            CharacterArea={
                <>
                    <Character
                        name="Sam"
                        image={samImg}
                        dialogue="I am Sam. He is Leo. We are friends!"
                        isTalking={true}
                    />
                    <Character
                        name="Ivy"
                        image={ivyImg}
                        dialogue="She is Mia. The desk is brown. We are all students!"
                        isTalking={true}
                    />
                </>
            }
        />
    );
};

export default Chapter2_VerbToBe;
