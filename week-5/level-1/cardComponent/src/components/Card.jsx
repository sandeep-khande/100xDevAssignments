import React from "react";

export function Card({ username, description, interests, linkedIn, twitter }) {

    const openLinkedIn = () => {
        window.open(linkedIn, "_blank")
    }

    const openTwitter = () => {
        window.open(twitter, "_blank")
    }

    return (
        <div className="max-w-md mx-auto bg-gray-600 rounded-md overflow-hidden shadow-md p-6 mb-6" > 
            <h1 className=" text-2xl font-bold mb-2 " >{username}</h1>
            <h2 className=" mb-4" >{description}</h2>
            <h1 className=" text-lg font-semibold mb-2 " >{interests}</h1>
            <div className=" flex gap-3 justify-center " >
                <button onClick={openLinkedIn}>LinkedIn</button>
                <button onClick={openTwitter}>Twitter</button>
            </div>
        </div>
    )
}