import { GitHub, LinkRounded } from '@mui/icons-material'
import React from 'react'

const ProjectCard = () => {
  return (
    <div className='p-4 flex flex-col rounded-lg bg-slate-900 max-w-[90vw] lg:max-w-[33%] mb-6'>
      <div className='flex'>
        <div className="z-10  bg-[url('https://lh3.googleusercontent.com/pw/AP1GczOcGPq3Dtv46UQFNqQegLPQs_x8A0_NRGuGUeaiZeDXKBG9JPpDi1kZb_-toHtzjulr4Zg3eTvbd4c-usJWKrWAPHyMe1rCwkqXXg7Q_Xf4ULfyk8n1p_ogeHqpezfSev1TskjMiWVJAwWlZINky9_JETw2lsrhSP7iWAFWmmWI9qewClKHEe3lDrJ9AlOqm1IVOCDOvNCUHOtLWPccFbwwWYvnDmxo2ZJk6X6aV_CXFl6TGof82V9O7lzrAVuXQxWjZOnbsftpFSG7iErja7pUKPub0p8nY5QLP-tfoUtuFiNpoXvd6iUJnFnOLYoKjQdeW2mSTJzXp2mclSXKXhpxfpqdpXRv10jISHGlCXEjtQBBq29XAlLSQ9l8h067752VMkjkXpV1OqQN7skxy9pvhvAAO9dKKlx8nGBVDpBEvCPM2Sfc6MQiWN8grrN7GeU2DeRsDze5EpMdRAMZeHE4qXXyPt8DK8ROjhwpJ-BECNwngNK-uP-act-vuDTI-XlRDdl8fmUPY3nsIYyUs-26VvO3aTAAHC6m_aigWEtQkZAhorEyL_YNwDOsW4Y8nG1ub_NbVk2Z6eLziITZpp8KNDvsCRi-fdvTex7kLsU56M4S8RFI00SovcMWd5hlStbI0txDFJgyztiuZvl83xqBQYpQQ3Z88a2GMbF4LILHOshAkwVYp3vkgu9JqVCGMcz0UFeLhG-P85gaAjdcSP5CLoa4J_TGhgdBBOXWgWvbO9_QBR-9npOZPu70wVWa-bh1ae5Yvsprfawv-XpDn1lFXDcMnX-12ru--2bHioMKRq1D3QTCDsYKzpSzQUNFv4plifdiqtonccG2zrtn6FkvtUZVCZTjLFaIjrxKgasmhQ-_iMVmI__rjtkVOgiIc54j6DcaDRDxdO9i8DHOuytDSQ=w1721-h968-s-no?authuser=0')] w-[600px] h-[400px] bg-cover p-2 mb-5 rounded-xl transition-all ease-in-out flex items-center"><p className="text-2xl h-full text-black backdrop-brightness-[0.7] p-4 rounded-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum tempore quis possimus earum, voluptate minima nam ex libero at natus.</p></div>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl'>Project Name</h1>
        <div className="icons flex gap-2 justify-between items-center">
          <button className='p-2 bg-slate-400 rounded-full'><LinkRounded/></button>
          <button className='p-2 bg-slate-400 rounded-full'><GitHub/></button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard