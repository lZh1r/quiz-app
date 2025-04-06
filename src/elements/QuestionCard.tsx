import {QuizQuestion} from "../utils/Quizes.tsx";
import AnswerButton from "./AnswerButton.tsx";
import {useEffect, useState, MouseEvent} from "react";

export default function QuestionCard({questions}: {questions: QuizQuestion[]}) {

    const [score, setScore] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [correctOption, setCorrectOption] = useState("");
    const [options, setOptions] = useState([""])

    useEffect(() => {
        setCorrectOption(questions[questionIndex].correctOption);
        setOptions(questions[questionIndex].options);
    }, [questionIndex, questions]);

    function handleAnswer(e:MouseEvent<HTMLButtonElement>) {
        setQuestionIndex(i => i + 1);
        const scoreChange = e.currentTarget.id === correctOption ? 1 : 0;
        setScore(s => s + scoreChange);
    }

    return (
        <div className="bg-card-back rounded-4xl p-5 m-10 md:h-[80vh] flex flex-col justify-between font-primary">
            <h2 className="font-primary text-2xl text-white text-center p-3">Question {questionIndex + 1} / {questions.length}</h2>
            <p className="text-gray-300 text-center text-xl">{questions[questionIndex].text}</p>
            <div className="grid grid-cols-2">
                {options.map((text, index) => (
                    <AnswerButton key={index} text={text} onClick={handleAnswer}/>
                ))}
            </div>
        </div>
    )
}