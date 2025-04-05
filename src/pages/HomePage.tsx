import QuizTitleCard from "../elements/QuizTitleCard.tsx";

export default function HomePage() {
    return (
        <div className="bg-dark h-screen">
            <h1 className="font-primary text-4xl text-white text-center p-3">Simple Quiz App</h1>
            <div className="md:grid grid-cols-3">
                <QuizTitleCard title="Test" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus vestibulum diam, in dapibus massa condimentum ut. Curabitur nec scelerisque dui. Nulla ullamcorper, sem eget hendrerit mollis" path="/0"/>
                <QuizTitleCard title="Test" description="Lorem ipsum" path="/0"/>
                <QuizTitleCard title="Test" description="Lorem ipsum" path="/0"/>
                <QuizTitleCard title="Test" description="Lorem ipsum" path="/0"/>
            </div>
        </div>
    )
}