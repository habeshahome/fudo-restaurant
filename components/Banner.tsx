import Image from 'next/image'
import SliderFoodImage from '../public/img/Slider Food Image.png'
import Button from './Button'

const Banner = () => {
  return (
 

      <div className="grid grid-cols-12">
          <div className="z-10 row-span-full col-start-1 col-span-6 self-end">
              <div className="font-bold"> 
                <h1> Different Spice For A Different Taste </h1>
              </div>
              <div className="py-4"> 
                <p> 
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, 
                    nulla enim posuere quis consequat. 
                </p>
              </div>

              <div className="flex py-4"> 
                <Button 
                  title="Get Started"
                  url="/forms"/> 
              </div>
          </div>
          <div className="z-0 row-span-full col-start-5 col-span-7 col-end-13 mr-0 justify-end">
            <Image src={SliderFoodImage} alt="" width="831px" height="500px" />
          </div>
      </div>
 
  )
}

export default Banner