type Callback = () => void

export default function AnswerButton({text, onClick}: {text: string, onClick:Callback}) {
    return (
        <button className="text-white cursor-pointer m-4 outline-2 outline-solid outline-white
                w-[80%] rounded-2xl p-2 bg-button-back hover:bg-button-highlight place-self-center"
                onClick={onClick}>{text}</button>
    )
}