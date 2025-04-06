import QuestionCard from "../elements/QuestionCard.tsx";

export default function QuizPage({quizName}: {quizName: string}) {

    return (
        <div>
            <h1 className="font-primary text-4xl text-white text-center p-3">{quizName}</h1>
            <QuestionCard/>
        </div>
    )
}