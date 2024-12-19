import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {

    const ref = useRef(null);
    const data = [
        {
            desc : "The react-dom package provides DOM-specific methods that can be used at the top level of your app.",
            storage : "0.9mb",
            showDownload : true,
            showFooter : {
                isOpen :true,
                text : "Downloadinggg..",
                color : "blue",
            }
        },
        {
            desc : "Portal is a recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. ",
            storage : "0.9mb",
            showDownload : true,
            showFooter : {
                isOpen :true,
                text : "Download Now",
                color : "green",
            }
        },
        {
            desc : "The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the real DOM.",
            storage : "0.6mb",
            showDownload : false,
            showFooter : {
                isOpen :true,
                text : "Error Generated",
                color : "red",
            }
        },
        {
            desc : "If the behaviour of a component is independent of its state then it can be a stateless component. You can use either a function or a class for creating stateless components. ",
            storage : "0.6mb",
            showDownload : true,
            showFooter : {
                isOpen :false,
                text : "Hello Brother",
                color : "green",
            }
        },
    ]
  return (
    <div ref={ref} className='flex flex-wrap gap-8 p-4 fixed w-full h-screen z-3'>
        {data.map((item,index) => (
            <Card cardData ={item} reference = {ref}/>
        ))}
    </div>
  )
}

export default Foreground