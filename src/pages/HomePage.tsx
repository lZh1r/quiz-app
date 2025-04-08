import { motion } from "motion/react";
import QuizTitleCard from "../elements/QuizTitleCard.tsx";

import {quizes} from "../utils/Quizes.tsx";

export default function HomePage() {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                duration: 1
            }}
            className="bg-dark">
            <h1 className="font-primary md:text-4xl text-3xl text-white text-center p-3">Simple Quiz App</h1>
            <div className="md:grid grid-cols-3">
                {quizes.map((quiz) => <QuizTitleCard id={quiz.id} key={quiz.id} title={quiz.title} description={quiz.description} path={`/${quiz.id}`}/> )}
            </div>
        </motion.div>
    );
}