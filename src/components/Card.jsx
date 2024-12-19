import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { motion } from 'motion/react';

const colorClassMap = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  // Add more mappings as needed
};

function Card({cardData,reference}) {
  return (
    <motion.div drag dragConstraints = {reference} whileDrag={{scale:1.2}} dragElastic= {0.1} className=' relative p-4 h-64 w-48 bg-zinc-900/90 rounded-xl text-white overflow-hidden'>
        <div className='flex flex-col h-44 justify-between'>
        <FaRegFileAlt/>
        <h2 className='my-2 text-xs'>{cardData.desc}</h2>
        <div className='flex justify-between'>
        <h3 className='text-xs font-semibold'>{cardData.storage}</h3>
        {cardData.showDownload ? <FiDownload/> : <MdOutlineClose/>}
        </div>
        </div>
        {cardData.showFooter.isOpen ? <div className={`p-2 absolute ${colorClassMap[cardData.showFooter.color]} text-center h-12 w-full left-0 bottom-0`}>
            <h3>{cardData.showFooter.text}</h3>
        </div> : null}
        
 </motion.div>
  )
}

export default Card