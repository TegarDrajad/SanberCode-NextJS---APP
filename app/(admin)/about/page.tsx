'use client'

// import { useCount } from "@/context"
import { dataStore } from "@/store/dataStore";

export default function About(){
    const {inc} = dataStore();
    return (
        <>
            <div>About Page</div>
            <button className="hover: cursor-pointer" onClick={() => (inc())}>Count ++</button>
        </>
    )
}