import QuestionCard from "../elements/QuestionCard.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons";

export default function QuizPage({quizName}: {quizName: string}) {

    return (
        <div>
            <FontAwesomeIcon icon={faHouse} className="text-4xl text-gray-400 outline-solid outline-2 outline-gray-400 rounded-4xl p-2
            cursor-pointer hover:outline-white hover:text-white float-left m-1" />
            <h1 className="font-primary text-4xl text-white text-center p-3">{quizName}</h1>
            <QuestionCard/>
        </div>
    )
}