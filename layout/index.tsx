import React from "react";
import Link from "next/link";

export default function MainLayout({
    children,
}:{
    children: React.ReactNode
}){
    return(
        <>
        <div className='flex flex-col min-h-screen'>
            <header className="bg-blue-300 text-white p-4">
                <div className="container mx-auto flex justify-between items-center gap-10">
                    <h1 className="text-md font-bold">Next JS APP</h1>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/about'>About</Link>
                        </li>
                        <li className="text-md font-bold">
                            <Link href='/profile/tegar'>Profile</Link>
                        </li>
                    </ul>
                </div>
            </header>

            <main className="flex-1 container mx-auto p-4">
                {children}
            </main>

            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>&copy; {new Date().getFullYear()} TegarDrajad SanberCode Next JS</p>
            </footer>
        </div>
        </>
    )
}