import { useEffect, useState } from "react";

export default function Card({ username }) {
    
    const [user, setUser] = useState("");

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`).then( (res) => {return res.json()}).then(data => {
            setUser(data) 
        })
    }, [username]);

    return (
        <section className="rounded-lg shadow-[-10px_10px_20px_rgba(0,0,0,0.5)] h-[500px] w-[20rem] text-[1.5rem] border-2 border-slate-500 bg-slate-700 flex flex-col justify-around items-center">

            <img src={user.avatar_url} className="rounded-lg cursor-pointer transition-all duration-[0.2s] hover:shadow-[1px_1px_20px_rgba(150,200,255,0.5)] h-[40%] shadow-[-10px_10px_20px_rgba(0,0,0,0.3)]"></img>

            <div className="flex flex-col text-slate-300 text-shadow-[-2px_-2px_10px_rgba(0,0,0,1.0)] w-[70%]">
                <h2>Nome: <p className="text-[1rem]">{user.name}</p> </h2>
                <h2>Bio: <p className="text-[1rem]">{user.bio}</p> </h2>
            </div>
        </section>
    )
}