import {QuizQuestion} from "../utils/Quizes.tsx";
import AnswerButton from "./AnswerButton.tsx";
import {useEffect, useState, MouseEvent} from "react";
import {Link} from "react-router";

export default function QuestionCard({questions}: {questions: QuizQuestion[]}) {

    const [score, setScore] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [correctOption, setCorrectOption] = useState("");
    const [options, setOptions] = useState([""]);
    const [done, setDone] = useState(false);

    useEffect(() => {
        setCorrectOption(questions[questionIndex].correctOption);
        setOptions(questions[questionIndex].options);
    }, [questionIndex, questions]);

    function handleAnswer(e:MouseEvent<HTMLButtonElement>) {
        const scoreChange = e.currentTarget.id === correctOption ? 1 : 0;
        setScore(s => s + scoreChange);
        if (questions.length - 1 === questionIndex) {
            setDone(true);
            return;
        }
        setQuestionIndex(i => i + 1);
    }

    return (
        <div className="font-primary bg-card-back rounded-4xl p-5 m-10">
            {done ?
                <div className="md:h-[80vh] flex flex-col justify-center font-primary">
                    <h2 className="text-3xl text-white text-center p-3">
                        Your Score:
                    </h2>
                    <h1 className="text-4xl text-white text-center p-3">
                        {score} / {questions.length}
                    </h1>
                    <Link className="place-self-center" to="/">
                        <button className="text-white cursor-pointer m-4 outline-2 outline-solid outline-white
                        rounded-2xl p-3 bg-button-back hover:bg-button-highlight">Go to Hub</button>
                    </Link>
                </div> :
                <div className="md:h-[80vh] flex flex-col justify-between font-primary">
                    <h2 className="text-2xl text-white text-center p-3">
                        Question {questionIndex + 1} / {questions.length}
                    </h2>
                    <p className="text-gray-300 text-center text-xl">{questions[questionIndex].text}</p>
                    <div className="grid grid-cols-2">
                        {
                            [...options].sort(() => Math.random() - 0.5).map((text, index) => (
                            <AnswerButton key={index} text={text} onClick={handleAnswer}/>
                        ))}
                    </div>
                </div>
            }

        </div>
    );
}