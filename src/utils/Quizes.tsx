import HomePage from "../pages/HomePage.tsx";
import {JSX} from "react";
import QuizPage from "../pages/QuizPage.tsx";

interface Quiz {
    id: number,
    title: string,
    description: string,
    element: JSX.Element
}

export interface QuizQuestion {
    text: string,
    correctOption: string,
    options: string[]
}

const sampleTest:QuizQuestion[] = [
    {
        text: "John Who?",
        correctOption: "Pork",
        options: [
            "Dork",
            "Snork",
            "Gork",
            "Pork"
        ]
    },
    {
        text: "Who is John's Biggest Rival?",
        correctOption: "Tim Cheese",
        options: [
            "Johny Deez",
            "Tim Cheese",
            "Leopard Brown",
            "Pig Johnson"
        ]
    },
    {
        text: "Who was in Gaza?",
        correctOption: "Bombardiro Crocodilo",
        options: [
            "Bombardiro Crocodilo",
            "Lirili Larila",
            "Glorbo",
            "Trippi Troppi"
        ]
    }
];

export const quizes: Quiz[] = [
    {
        id: 0,
        title: "Brainrot Test",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus vestibulum" +
            " diam, in dapibus massa condimentum ut. Curabitur nec scelerisque dui. Nulla ullamcorper, sem eget hendrerit mollis",
        element: <QuizPage quizName="Brainrot Test" questions={sampleTest}/>
    },
    {
        id: 1,
        title: "IQ Test",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus vestibulum" +
            " diam, in dapibus massa condimentum ut. Curabitur nec scelerisque dui. Nulla ullamcorper, sem eget hendrerit mollis",
        element: <HomePage/>
    },
    {
        id: 2,
        title: "Who is Your Spirit Animal?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus vestibulum" +
            " diam, in dapibus massa condimentum ut. Curabitur nec scelerisque dui. Nulla ullamcorper, sem eget hendrerit mollis",
        element: <HomePage/>
    },
    {
        id: 3,
        title: "Sigma Test",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus vestibulum" +
            " diam, in dapibus massa condimentum ut. Curabitur nec scelerisque dui. Nulla ullamcorper, sem eget hendrerit mollis",
        element: <HomePage/>
    }
];