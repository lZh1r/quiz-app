import QuestionCard from "../elements/QuestionCard.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router";
import {quizes, QuizQuestion} from "../utils/Quizes.tsx";
import {useEffect, useState} from "react";

export default function QuizPage({quizName, questions, id}: {quizName: string, questions: QuizQuestion[], id:number}) {

    const [maxScore, setMaxScore] = useState(0);

    useEffect(() => {
        quizes[id].maxScore = maxScore;
    }, [maxScore]);

    function getMaxScore(score:number) {
        setMaxScore(score);
    }

    return (
        <div>
            <div>
                <Link to={'/'}>
                    <FontAwesomeIcon icon={faHouse} className="md:text-4xl text-3xl text-gray-400 outline-solid outline-2 outline-gray-400 rounded-4xl p-2
            cursor-pointer hover:outline-white hover:text-white m-2 float-left"/>
                </Link>
                <h1 className="font-primary md:text-4xl text-3xl text-white text-center p-3 place-self-center">{quizName}</h1>
            </div>
            <QuestionCard exportMaxScore={getMaxScore} questions={questions}/>
        </div>
    );
}