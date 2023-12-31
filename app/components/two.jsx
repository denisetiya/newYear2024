import * as React from "react"
import {motion} from 'framer-motion'
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#DC7633"
    viewBox="0 0 375 375"
    {...props}
    width={70}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      transform="translate(85 75)"
      viewBox="0 0 30 30"
      {...props}
    >
      <motion.path
        initial={{pathLength:0, opacity: 0 }}
        animate={{pathLength:1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        fill="#fff"
        stroke="#000"
        strokeWidth={0.6}
        d="M8.987 23.708c0-.988.156-1.898.469-2.734a10.69 10.69 0 0 1 1.14-2.266c.457-.676 1.051-1.46 1.781-2.36.758-.944 1.36-1.741 1.797-2.39.446-.656.828-1.406 1.14-2.25.313-.851.47-1.77.47-2.75 0-.594-.086-1.05-.25-1.375-.168-.332-.47-.5-.907-.5-.73 0-1.093.649-1.093 1.938v2.64H8.987l-.047-1.328c0-1.644.164-2.992.5-4.047.332-1.05.914-1.851 1.75-2.406.844-.562 2.004-.844 3.484-.844 1.813 0 3.211.512 4.203 1.532.989 1.011 1.485 2.449 1.485 4.312 0 1.188-.168 2.266-.5 3.234-.324.961-.727 1.797-1.203 2.516-.48.719-1.118 1.57-1.907 2.547a34.814 34.814 0 0 0-1.421 1.844 15.615 15.615 0 0 0-1.016 1.64h5.89v4.078H8.988Zm0 0"
      />
    </svg>
  </svg>
)
export default SvgComponent