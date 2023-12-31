'use client'
import React from 'react'
import Two from '../components/two'
import Zero from '../components/zero'
import Three from '../components/three'
import Four from '../components/four'
import TwoA from '../components/twoA'
import {motion} from 'framer-motion'
import { useState, useEffect } from 'react'
import TypingEffect from '../components/typing'
import firework from '../assets/firework.json'
import firewirk2 from '../assets/firework2.json'
import Lottie from 'lottie-react'
import firework3 from '../assets/firework3.json'
import firework4 from '../assets/firework4.json'


function home() {

  const [next,setNext] = useState(false)
  const [opacity2,setOpacity2] = useState(1)
  const [y2, setY2] = useState(0)
  const [x1, setX1] = useState(0)
  const [opa1,setOpa1] = useState(1)

  setTimeout(() => {
    setNext(true);
  }, 7000);

  setTimeout(() => {
    setOpacity2(0)
    setY2(200)
  },4000)

  setTimeout(() => {
    setOpa1(0)
    setX1(100)
  },6000)


  return (
    <div className='flex justify-center items-center w-full flex-col h-screen relative'>
      <div className='flex '>
        <motion.div>
          <Two/>
        </motion.div>
        <div>
          <Zero/>
        </div>
        <div>
          <TwoA/>
        </div>
        {
          next == false ? (
          <motion.div
            initial={{opacity:1, y:0}}
            animate={{opacity:opa1, y:x1}}
            transition={{duration:1.3}}
          >
            <Three/>
          </motion.div>
          ) : (
          <div>
            <Four/>
          </div>
          )
        }
 
      </div>

      <div className='h-16'>
        {
          next == false ? (
            <motion.div
              initial={{opacity:0,y:200}}
              animate={{opacity:opacity2,y:y2}}
              transition={{duration:2, delay:2.5}}
            >
              Thanks to 2023
            </motion.div>
          ):(
            <div className='text-lg'>
              <TypingEffect text='Happy New Year 🎉'/>
              <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:2, delay:4}}
                className='text-xs text-center'
              >
                with a new ambitions
              </motion.div>
            </div>
          )
        }  
      </div>
        {
          next == false ? (
            null
          ) : (
            <div>
              <div className='absolute top-0 left-0 w-full h-48 flex'>
              <div>
                <Lottie animationData={firework} />
              </div>
              <div>
                <Lottie animationData={firewirk2}/>
              </div>
            </div>

            <div className='absolute bottom-10 w-full left-0 flex h-36'>
              <div>
                <Lottie animationData={firework3}/>
              </div>
              <div>
                <Lottie animationData={firework4} />
              </div>
            </div>
            </div>

          )
        }


    </div>
  )
}

export default home
