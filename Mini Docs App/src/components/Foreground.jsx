import React, { useRef } from 'react'
import Card from './Card'


const Foreground = () => {

    const ref = useRef(null)


    const data = [
        {desc:'Lorem ipsum dolor sit amet consectetur adipisicing.',
            filesize:'0.9 MB' ,
            close:false , 
            tag:{isOpen:true, tagTitle:"Download Now", tagColor:"green"}
        },
        {desc:'Lorem ipsum dolor sit amet consectetur adipisicing.',
            filesize:'0.9 MB' ,
            close:false , 
            tag:{isOpen:true, tagTitle:"Upload", tagColor:"blue"}
        },
        {desc:'Lorem ipsum dolor sit amet consectetur adipisicing.',
            filesize:'0.9 MB' ,
            close:false , 
            tag:{isOpen:true, tagTitle:"Download Now", tagColor:"green"}
        },

    ]
  return (
    <div ref={ref} className='w-full h-full top-0 left-0 fixed z-[3] flex gap-10 flex-wrap p-5'>

        {data.map((item,index)=>(
            <Card data = {item} reference={ref} />
        ))}


    </div>
  )
}

export default Foreground