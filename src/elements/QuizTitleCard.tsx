import { motion } from "motion/react";
import {Link} from "react-router";
import {quizes} from "../utils/Quizes.tsx";

export default function QuizTitleCard({title, description, path, id}: {title:string, description:string, path:string, id:number}) {

    const quizMaxScore = quizes[id].maxScore;

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 350
            }}
            animate={{
                opacity: 1,
                y: 0
            }}
            transition={{
                duration: 1,
                y: {
                    ease: [0, 0.71, 0.2, 1.01],
                    duration: 0.8,
                    delay: id / 10
                },
                delay: id / 10
            }}
            className="bg-card-back rounded-4xl p-5 m-5 flex flex-col justify-between font-primary">
            <div>
                <div className="flex justify-between text-white md:text-2xl text-xl mb-3">
                    <h2>{title}</h2>
                    {quizMaxScore !== undefined && <h2>{quizMaxScore}/{quizes[id].length}</h2>}
                </div>
                <p className="text-gray-400 max-md:text-sm">{description}</p>
            </div>
            <Link to={path}>
                <button className="text-white max-md:text-sm cursor-pointer mt-4 outline-2 outline-solid outline-white
                w-[100%] rounded-2xl p-2 bg-button-back hover:bg-button-highlight">Start</button>
            </Link>
        </motion.div>
    );
}