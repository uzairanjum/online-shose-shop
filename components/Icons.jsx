import React from 'react'
import { IoMdHeartEmpty} from 'react-icons/io'
import { BsCart } from 'react-icons/bs'
import { BiMenuAltRight } from 'react-icons/bi'
import { VscChromeClose } from 'react-icons/vsc'

export default function Icons({mobileMenu, setMobileMenu}) {
  return (
    <div className="flex items-center gap-2 text-black">
    <div className="w-8 md:w-12 h-8 md:h-12 flex rounded-full justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
    <IoMdHeartEmpty className='text-[19px] md:text-[24px]'/>
    <div className="w-[14px]  min-w-[14px] md:h-[18px]  md:min-w-[18px]  sm:h-[16px]  sm:min-w-[16px]  sm:text-[10px]  max-sm:h-[16px]  max-sm:min-w-[16px]  max-sm:text-[10px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]
    ">5</div>
    </div>

    <div className="w-8 md:w-12 h-8 md:h-12  flex rounded-full justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
    <BsCart className='text-[15px] md:text-[20px]'/>
    <div className="w-[14px] md:h-[18px]  min-w-[14px] md:min-w-[18px] sm:h-[16px]  sm:min-w-[16px]  sm:text-[10px]  max-sm:h-[16px]  max-sm:min-w-[16px]  max-sm:text-[10px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]
    ">3</div>
    </div>


    <div className="w-8 md:w-12 h-8 md:h-12 flex rounded-full justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
{mobileMenu   ? (<VscChromeClose  className="text-[16px]"  onClick={() =>setMobileMenu(false)}/>) : (<BiMenuAltRight  className="text-[20px]"  onClick={() =>setMobileMenu(true)}/>)}
    </div>
   


      
    </div>
  )
}
