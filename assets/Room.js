import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Room({width,height}) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 58 58" 
    >
      <Path fill="#bfa380" d="M13 3.5h32v54H13z" />
      <Path fill="#7a6857" d="M13 57.5h-3V.5l3 3zM45 57.5h3V.5l-3 3z" />
      <Path fill="#6b5b4b" d="M45 3.5H13l-3-3h38z" />
      <Path fill="#dbd6d2" d="M0 54.5h10v3H0zM48 54.5h10v3H48z" />
      <Path d="M38 33.5h-4.5a1.5 1.5 0 010-3H38v3z" fill="#e7eced" />
      <Path
        d="M36 28.943V30.5h2v3h-2v1.557c0 .797.646 1.443 1.443 1.443h2.114c.797 0 1.443-.646 1.443-1.443v-6.114c0-.797-.646-1.443-1.443-1.443h-2.114c-.797 0-1.443.646-1.443 1.443z"
        fill="#6c797a"
      />
    </Svg>
  )
}

export default Room
