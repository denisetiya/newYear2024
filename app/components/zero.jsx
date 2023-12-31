import * as React from "react"
import {motion} from 'framer-motion'
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={70}
    viewBox="0 0 30 30"
    {...props}
    fill="#fff"
    stroke="#000"
    strokeWidth={0.6}
  >
    <motion.path
      initial={{pathLength:0, opacity: 0 }}
      animate={{pathLength:1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut", delay:0.5 }}
    d="M14.99 25.27c-1.824 0-3.23-.516-4.218-1.547-.993-1.031-1.485-2.5-1.485-4.406V9.55c0-2.039.477-3.597 1.438-4.672.957-1.07 2.379-1.609 4.265-1.609 1.914 0 3.348.54 4.297 1.61.957 1.074 1.438 2.632 1.438 4.671v9.766c0 1.93-.496 3.402-1.485 4.422-.992 1.023-2.406 1.531-4.25 1.531Zm0-3.969c.32 0 .582-.144.782-.437a1.8 1.8 0 0 0 .312-1.047V9.16c0-.625-.074-1.098-.219-1.422-.148-.332-.437-.5-.875-.5-.43 0-.71.168-.843.5-.137.324-.203.797-.203 1.422v10.656c0 .398.093.746.28 1.047.196.293.454.437.766.437Zm0 0" />
  </svg>
)
export default SvgComponent
