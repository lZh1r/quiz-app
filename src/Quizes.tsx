import HomePage from "./pages/HomePage.tsx";
import {JSX} from "react";

interface Quiz {
    id: number,
    title: string,
    description: string,
    element: JSX.Element
}

export const quizes: Quiz[] = [
    {
        id: 0,
        title: "Brainrot Test",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus vestibulum" +
            " diam, in dapibus massa condimentum ut. Curabitur nec scelerisque dui. Nulla ullamcorper, sem eget hendrerit mollis",
        element: <HomePage/>
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
]