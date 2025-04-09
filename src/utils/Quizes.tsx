import HomePage from "../pages/HomePage.tsx";
import {JSX} from "react";
import QuizPage from "../pages/QuizPage.tsx";

interface Quiz {
    id: number,
    maxScore?: number,
    title: string,
    description: string,
    element: JSX.Element
}

export interface QuizQuestion {
    text: string,
    correctOption: string,
    options: string[]
}

export const quizQuestionCollection:QuizQuestion[][] = [
    [
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
        },
        {
            text: "Who is Subaru?",
            correctOption: "Patrick Star",
            options: [
                "Patrick Star",
                "Spongebob",
                "Squidward",
                "Mr. Crabs"
            ]
        },
        {
            text: "HAHA! This is John Pork Lore Test now! Why are John Pork and Tim Cheese enemies?",
            correctOption: "John Pork took Tim's Wife",
            options: [
                "John Pork took Tim's Wife",
                "Racism",
                "Tim Cheese killed John's Family",
                "Bob Bacon betrayed Tim Cheese"
            ]
        },
        {
            text: "Who was Tim's and John's Third Friend?",
            correctOption: "Simon Claw",
            options: [
                "Simon Claw",
                "Bob Bacon",
                "Pengu",
                "Henry Butter"
            ]
        },
        {
            text: "How was Tim Cheese's Life Destroyed",
            correctOption: "He got fed up with Bob Bacon's bs after Simon Claw got caught and Tim became homeless",
            options: [
                "He got fed up with Bob Bacon's bs after Simon Claw got caught and Tim became homeless",
                "John Pork killed Simon and injured Tim badly during a fierce fight",
                "The IRS started investigating Bob Bacon's business, which lead to his imprisonment and Tim's poverty",
                "Tim Cheese Respect Button"
            ]
        },
        {
            text: "After John's death who decided to avenge him?",
            correctOption: "Marvin Beak and Pengu",
            options: [
                "Simon Claw",
                "Marvin Beak and Pengu",
                "Haram Pig and Agent 5.5",
                "Poppy the Pigeon and Friends"
            ]
        },
        {
            text: "What is the name of Pengu's partner?",
            correctOption: "Polly",
            options: [
                "Polly",
                "Molly",
                "Holly",
                "Dolly"
            ]
        },
        {
            text: "Who killed Pengu's partner?",
            correctOption: "Simon Claw",
            options: [
                "Simon Claw",
                "Tim Cheese",
                "Bob Bacon",
                "Agent 5.5"
            ]
        },
    ]
];

export const quizes:Quiz[] = [
    {
        id: 0,
        title: "Brainrot Test",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus vestibulum" +
            " diam, in dapibus massa condimentum ut. Curabitur nec scelerisque dui. Nulla ullamcorper, sem eget hendrerit mollis",
        element: <QuizPage quizName="Brainrot Test" questions={quizQuestionCollection[0]} id={0}/>
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