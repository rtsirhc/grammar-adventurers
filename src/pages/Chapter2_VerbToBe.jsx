import React, { useState } from 'react';
import StoryPage from '../components/StoryPage';
import Character from '../components/Character';
import MatchingGame from '../components/MatchingGame';

const Chapter2_VerbToBe = () => {
    const [gameCompleted, setGameCompleted] = useState(false);

    const pairs = [
        { id: 1, left: "I", right: "am" },
        { id: 2, left: "You", right: "are" },
        { id: 3, left: "He/She/It", right: "is" },
        { id: 4, left: "We/They", right: "are" },
    ];

    return (
        <StoryPage
            title="Chapter 2: Being an Adventurer"
            NextChapterPath="/chapter/3"
            PrevChapterPath="/chapter/1"
            ChapterContent={
                <div className="space-y-8">
                    <div className="bg-pink-50 p-6 rounded-xl border-2 border-pink-200">
                        <h2 className="text-2xl font-bold text-pink-600 mb-2">The Verb "To Be"</h2>
                        <p className="text-lg">This special verb tells us <strong>who</strong> or <strong>what</strong> something is. It describes feelings, jobs, and facts!</p>
                    </div>

                    <Character
                        name="Mia"
                        dialogue={
                            <span>
                                I <strong className="text-pink-500">am</strong> a photographer. It <strong className="text-pink-500">is</strong> my favorite hobby!
                            </span>
                        }
                    />

                    <Character
                        name="Leo"
                        position="right"
                        dialogue={
                            <span>
                                You <strong className="text-pink-500">are</strong> a great photographer, Mia! We <strong className="text-pink-500">are</strong> a great team.
                            </span>
                        }
                    />

                    <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-slate-200">
                        <h3 className="text-xl font-bold text-center mb-4 text-adventure-blue">Mini Game: Match the Pairs!</h3>
                        <p className="text-center text-gray-600 mb-4">Click a Subject (like "I") and then click its Verb (like "am").</p>

                        {!gameCompleted ? (
                            <MatchingGame
                                pairs={pairs}
                                onComplete={() => setGameCompleted(true)}
                            />
                        ) : (
                            <div className="text-center p-8 anim-bounce">
                                <h2 className="text-4xl">🎉 Great Job! 🎉</h2>
                                <p className="text-xl mt-2">You matched them all!</p>
                            </div>
                        )}
                    </div>
                </div>
            }
        />
    );
};

export default Chapter2_VerbToBe;
