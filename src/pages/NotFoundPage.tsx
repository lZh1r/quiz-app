import {Link} from "react-router";

export default function NotFoundPage() {
    return (
        <div className="font-primary h-screen flex flex-col justify-center text-center">
            <h1 className="text-white text-4xl p-3">Oops!</h1>
            <p className="text-gray-300 text-2xl">Looks like this page does not exist...</p>
            <Link to="/">
                <button className="text-white cursor-pointer m-4 outline-2 outline-solid outline-white
                        rounded-2xl p-3 bg-button-back hover:bg-button-highlight">Go to Hub</button>
            </Link>
        </div>
    );
}