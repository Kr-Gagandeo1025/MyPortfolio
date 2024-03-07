import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Nav = () => {
  return (
    <>
        <nav className="flex justify-between p-2 backdrop-blur-md bg-transparent fixed w-screen z-40">
            <ul>
                <li className="font-bold text-xl">kg.</li>
            </ul>
            <ul>
                <li className="underline">
                    <MenuIcon/>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Nav