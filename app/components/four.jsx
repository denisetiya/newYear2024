import * as React from "react"
import {motion} from 'framer-motion'
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    {...props}
    width={70}
    fill="#fff"
    stroke="#000"
    strokeWidth={0.6}
  >
    <motion.path
      initial={{pathLength:0, opacity: 0 }}
      animate={{pathLength:1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut"}}
      d="M14.877 24.74v-3.422H8.456v-3.36l4.078-14.844h6.734v14.61h1.156v3.594h-1.156v3.421Zm-2.562-7.016h2.562V6.834Zm0 0"
    />
  </svg>
)
export default SvgComponent