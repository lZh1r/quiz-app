import QuizTitleCard from "../elements/QuizTitleCard.tsx";

import {quizes} from "../Quizes.tsx";

export default function HomePage() {
    return (
        <div className="bg-dark h-screen">
            <h1 className="font-primary text-4xl text-white text-center p-3">Simple Quiz App</h1>
            <div className="md:grid grid-cols-3">
                {quizes.map((quiz) => <QuizTitleCard key={quiz.id} title={quiz.title} description={quiz.description} path={`/${quiz.id}`}/> )}
            </div>
        </div>
    )
}