import Image from 'next/image'
import React from 'react'

const CurvedLine = () => {
  return (
    <div>
        <Image
              src={"/assets/curved_line.svg"}
              alt="curved line"
              width={500}
              height={200}
              className=' md:w-[100%] w-[90%]'
            />
    </div>
  )
}

export default CurvedLine