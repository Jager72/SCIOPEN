import * as React from "react"
import Svg, {Path} from "react-native-svg"

function User({width, height}) {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 443.18 443.18"
        >
            <Path
                d="M218.206 214.47V1.065c-58.835 0-106.702 47.867-106.702 106.703 0 58.835 47.867 106.702 106.702 106.702z"
                fill="#005ece"
            />
            <Path
                d="M324.909 107.768c0-58.836-47.867-106.703-106.703-106.703V214.47c58.836 0 106.703-47.867 106.703-106.702zM389.93 439.545v-26.676c0-7.329-.465-14.552-1.36-21.643-10.676-84.507-83.01-150.08-170.365-150.08v198.399z"
                fill="#3fac03"
            />
            <Path
                d="M46.481 412.87v26.675h171.724v-198.4c-94.685 0-171.724 77.04-171.724 171.724z"
                fill="#005ece"
            />
        </Svg>
    )
}

export default User
