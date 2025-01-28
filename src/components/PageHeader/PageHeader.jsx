import React from 'react'

function PageHeader({title}) {
  return (
    <div className='py-20'>
        <div className='min-h-[200px] rounded-3xl sm:min-h-[200px] hero-bg-color flex items-center justify-center'>
            <div>
                <h1 className='text-primary text-5xl font-titleFont font-bold'>{title}</h1>
            </div>
        </div>
    </div>
  )
}

export default PageHeader