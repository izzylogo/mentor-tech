import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <div className="p-4">
            <div className="mentor-image text-center mb-6">
                <Image 
                    src="/Ellipse 1 (1).png" 
                    alt='mentor-image' 
                    width={100} height={100} 
                    style={{width: "150px", margin: "0px auto"}}
                />
                <h4>Marcus Rapheal</h4>    
            </div>
            <div className="about-mentor">
                <h6 className='uppercase font-light'>about the mentor</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus. Commodo viverra maecenas accumsan lacus vel facilisis. Tincidunt dui ut ornare lectus sit amet. Mi tempus imperdiet nulla malesuada. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Aliquam faucibus purus in massa tempor. Eu augue ut lectus arcu bibendum at varius vel. At erat pellentesque adipiscing commodo elit at imperdiet dui. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Quis vel eros donec ac.</p>
                <p className="language mt-5">Language: English, French</p>
                <div className="rating">Rating: </div>
                <p  className='capitalize'>Review</p>
                <p>Great class, Very articulate - Mario Puzo</p>
                <p>He is very clear in teaching Concepts - Jay Rowing</p>
            </div>
            <button className='uppercase p-3 bg-[#009A84] mt-4 w-full text-white rounded'>choose mercus</button>
        </div>
    </div>
  )
}

export default page