import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

const Card = ({ data, reference }) => {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.1 }} dragElastic={.1} className='flex-shrink-0 relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full left-0'>
                <div className='flex items-center justify-between px-8 py-3 mb-3'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>

                        {data.close ? <IoMdClose /> : <MdOutlineFileDownload />}


                    </span>
                </div>

                {data.tag.isOpen && (<div className={`tag w-full p-4 ${data.tag.tagColor === 'blue' ? "bg-sky-600" : "bg-green-500"} flex items-center justify-center`}>
                    <h3 className='text-sm font-semibold '>{data.tag.tagTitle}</h3>
                </div>)}
                {/* && works like if first satement is true then second statement will be executed */}




            </div>
        </motion.div>
    )
}

export default Card