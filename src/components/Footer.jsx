import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const links = [
    {href: 'https://instagram.com', icon: <FaInstagram size={40}/>},
    {href: 'https://facebook.com', icon: <FaFacebook size={40}/>},
    {href: 'https://youtube.com', icon: <FaYoutube size={40}/>},


]

const Footer = () => {
  return (
    <footer className='w-screen bg-blue-500 py-10 text-black'>
        <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
            <p className='text-center text-xl md:text-left'>&copy; hpliondance 2022. All rights reserved</p>

            <div className='flex justify-center gap-4 md:justify-start'>
                {links.map((link) => (
                    <a key={link.href} href={link.href} target='_blank' rel='noopener noreferrer' className='text-black transition-colors duration-500 ease-in-out hover:text-white'>{link.icon}</a>
                ))}

            </div>

            <div className="text-center text-xl md:text-right font-circular-web flex items-center gap-2">
                <span>Developed by Peter Nguyen</span>
                <a
                    href="https://github.com/peternguy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-white transition-colors"
                >
                    <FaGithub size={20} />
                </a>
                <a
                    href="https://www.linkedin.com/in/therealpnguyen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-white transition-colors"
                >
                    <FaLinkedin size={20} />
                </a>
            </div>
        </div>

    </footer>
  )
}

export default Footer