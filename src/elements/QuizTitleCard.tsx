import {Link} from "react-router";

export default function QuizTitleCard({title, description, path}: {title:string, description:string, path:string}) {

    return (
        <div className="bg-card-back rounded-4xl p-5 m-5 flex flex-col justify-between">
            <div>
                <h2 className="text-white text-2xl mb-3">{title}</h2>
                <p className="text-gray-400">{description}</p>
            </div>

            <Link to={path}>
                <button className="text-white cursor-pointer mt-4 outline-2 outline-solid outline-white
                w-[100%] rounded-2xl p-2 bg-button-back hover:bg-button-highlight">Start</button>
            </Link>
        </div>
    )
}