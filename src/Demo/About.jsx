import React from 'react'
import "../App.css";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
        <Link className='absolute bottom-[40px] right-[50px] text-black font-bold hover:border-b-black' to="/about">About me</Link>
    </div>
  )
}

export default About