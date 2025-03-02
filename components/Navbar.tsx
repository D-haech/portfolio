"use client"

import Link from 'next/link'
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const navLinks = [
    {title:'about', path: '#about'},
    {title:'portfolio', path: '#portfolio'},
    {title:'stack', path: '#stack'},
    {title:'contact', path: '#contact'},
    
]

export default function Navbar(){
    const [nav, setNav] = useState<boolean>(false);

    const toggleNav = () =>{setNav(!nav)}

    const closeNav = ()=>{setNav(false)}

    return(
        <>
        <div className='z-50 fixed flex justify-center w-full text-white font-bold'>
           <div className="border border-white/20 mt-8 backdrop-blur-3x1 rounded-3x1 hidden md:flex"></div>
        </div>
        </>
    );
}