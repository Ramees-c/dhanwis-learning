import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'

import img1 from "../../assets/images/gallery/g1.jpg"
import img2 from "../../assets/images/gallery/g2.jpg"
import img3 from "../../assets/images/gallery/g3.jpg"
import img4 from "../../assets/images/gallery/g4.jpg"
import img5 from "../../assets/images/gallery/g5.jpg"

function GalleryPage() {

    const Images = [
        img1,
        img2,
        img3,
        img4,
        img5
    ]

  return (
    <div>
        <div className="container">
            {/* page header */}
            <PageHeader title='Gallery' />

            <div className='columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4'>
                {
                    Images.map((image,index) => (
                        <div key={index} className='mb-4 break-inside-avoid'> 
                            <img src={image} alt="image" className='w-full object-cover rounded-lg cursor-pointer hover:scale-110 duration-300' />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default GalleryPage