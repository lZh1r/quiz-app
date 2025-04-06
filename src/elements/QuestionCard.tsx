
export default function QuestionCard() {


    return (
        <div className="bg-card-back rounded-4xl p-5 m-10 h-[80vh] flex flex-col justify-between">
            <h2 className="font-primary text-2xl text-white text-center p-3">Is this good?</h2>
            <p className="text-gray-400 text-center text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus vestibulum
                diam, in dapibus massa condimentum ut. Curabitur nec scelerisque dui. Nulla ullamcorper, sem eget hendrerit mollis</p>
            <div className="grid grid-cols-2">
                <button className="text-white cursor-pointer m-4 outline-2 outline-solid outline-white
                w-[80%] rounded-2xl p-2 bg-button-back hover:bg-button-highlight place-self-center">Answer option</button>
                <button className="text-white cursor-pointer m-4 outline-2 outline-solid outline-white
                w-[80%] rounded-2xl p-2 bg-button-back hover:bg-button-highlight place-self-center">Answer option</button>
                <button className="text-white cursor-pointer m-4 outline-2 outline-solid outline-white
                w-[80%] rounded-2xl p-2 bg-button-back hover:bg-button-highlight place-self-center">Answer option</button>
                <button className="text-white cursor-pointer m-4 outline-2 outline-solid outline-white
                w-[80%] rounded-2xl p-2 bg-button-back hover:bg-button-highlight place-self-center">Answer option</button>
            </div>
        </div>
    )
}