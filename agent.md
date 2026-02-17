# Grammar Adventurers

## Project Definition
An interactive storybook web application for 11-year-old ESL students (A1-A2 level). The app features a group of diverse, adventurous friends who explore different grammar points. Each grammar point is a chapter in their story. The app includes mini-games, a "Time Machine" feature for the Simple Past tense, and a Mock Test for students to practice. It is designed to be projected in the classroom and also accessible via a link for home practice.

## Decisions Made
- **Target**: 11-year-olds, A1-A2 English proficiency.
- **Theme/Colors**: Bright, colorful, adventurous.
- **Scoring**: Practice games have no scoring (just feedback). Mock Test has scoring.
- **Timer**: Not specified for games, but implicit for the test? (Will confirm).
- **Images**: Custom generated characters (diverse group of kids) + Time Machine illustration.
- **AI Features**: None requested (images generated pre-build).
- **Data Storage**: Local state for the session. No persistent database needed for the MVP (unless user wants to save test results across sessions, but "practice" implies transient is okay. "Mock Test" usually implies seeing a result at the end).
- **Deployment**: GitHub + Vercel.
- **Device Support**: Classroom TV (primary) + Desktops/Tablets/Tablets (secondary for home use).

## Technology Stack
- **Framework**: Vite + React
- **Styling**: Tailwind CSS
- **Routing**: React Router (implied for navigation)
- **State Management**: React State / Context (for global theme/Time Machine effect)

## Project Phases

### Phase 2: Foundation
- Set up Tailwind CSS with the "bright and colorful" palette.
- Implement the "Time Machine" global context (grayscale toggle).
- Create the Main Layout (Navigation, Storybook Frame).
- Create the "Character" component for dialogue/stories.
- Verify: App loads, navigation works, grayscale toggle works.

### Phase 3: Asset Generation
- Propose art styles to the user.
- Generate Character images (The Adventurers).
- Generate Time Machine image.
- Generate background/prop images for chapters.

### Phase 4: Core Content (Chapters 1-7)
- **Chapter 1 (Simple Present)**: Story implementation, s/es rule interactive highlight.
- **Chapter 2 (Verb to be)**: Story + Matching Game implementation.
- **Chapter 3 (Do/Does)**: Story + Interactive questions.
- **Chapter 4 (There is/There are)**: Story scene.
- **Chapter 5 (Prepositions)**: Story + Visual preposition game.
- **Chapter 6 (Possessives)**: Story + Drag and drop game.
- **Chapter 7 (Simple Past)**: Time Machine activation logic (triggers global grayscale), regular/irregular verb charts.

### Phase 5: Mock Test
- Create Question Bank (20 items).
- Create 5 Reading Tasks.
- Implement Test Interface (Multiple Choice).
- Implement Results Screen.

### Phase 6: Polishing & Review
- Mobile responsiveness check.
- Content proofreading.
- Transitions and animations.

### Phase 7: Deployment
- Deploy to Vercel.
- Final Verification.

---

## Phase Completion Log

(To be filled)
