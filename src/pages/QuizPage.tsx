import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router";
import {quizes, QuizQuestion} from "../utils/Quizes.tsx";
import {MouseEvent, useEffect, useState} from "react";
import {motion, useAnimation} from "motion/react";
import AnswerButton from "../elements/AnswerButton.tsx";

export default function QuizPage({quizName, questions, id}: {quizName: string, questions: QuizQuestion[], id:number}) {

    const [maxScore, setMaxScore] = useState(quizes[id].maxScore === undefined ? 0 : quizes[id].maxScore);

    useEffect(() => {
        quizes[id].maxScore = maxScore;
    }, [maxScore]);

    const [score, setScore] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [correctOption, setCorrectOption] = useState("");
    const [options, setOptions] = useState([""]);
    const [done, setDone] = useState(false);

    const controls = useAnimation();

    useEffect(() => {
        setCorrectOption(questions[questionIndex].correctOption);
        setOptions(questions[questionIndex].options);
    }, [id, questionIndex, questions]);

    async function handleAnswer(e:MouseEvent<HTMLButtonElement>) {

        const scoreChange = e.currentTarget.id === correctOption ? 1 : 0;

        await controls.start({
            opacity: 0,
            transition: {duration: 0.3}
        });

        setScore(s => s + scoreChange);
        if (questions.length - 1 === questionIndex) {
            setDone(true);
            const newMaxScore = maxScore < score + scoreChange ? score + scoreChange : maxScore;
            setMaxScore(newMaxScore);
            return;
        }
        setQuestionIndex(i => i + 1);

        await controls.start({
            opacity: 1,
            transition: {duration: 0.3}
        });
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
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                className="font-primary bg-card-back rounded-4xl p-5 m-10">
                {done ?
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.8}}
                        className="md:h-[80vh] flex flex-col justify-center font-primary">
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
                    </motion.div> :
                    <motion.div
                        initial={{opacity: 1}}
                        animate={controls}
                        className="md:h-[80vh] flex flex-col justify-between font-primary">
                        <h2

                            className="text-2xl text-white text-center p-3">
                            Question {questionIndex + 1} / {questions.length}
                        </h2>
                        <p className="text-gray-300 text-center text-xl">{questions[questionIndex].text}</p>
                        <div className="md:grid md:grid-cols-2 flex flex-col justify-center">
                            {
                                [...options].sort(() => Math.random() - 0.5).map((text, index) => (
                                    <AnswerButton key={index} text={text} onClick={handleAnswer}/>
                                ))}
                        </div>
                    </motion.div>
                }
            </motion.div>
        </div>
    );
}