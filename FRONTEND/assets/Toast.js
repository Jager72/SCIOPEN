import * as React from "react"
import Svg, {Circle, G, Path} from "react-native-svg"

function Toast({width, height}) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 486.4 486.4"
            width={width}
            height={height}
        >
            <Path
                d="M451.2 202.8c24-23.2 35.2-53.6 35.2-87.2 0-74.4-61.6-96.8-139.2-96.8-41.6 0-78.4 6.4-104 24-25.6-17.6-63.2-24-104.8-24C60.8 19.6 0 41.2 0 115.6c0 33.6 11.2 64 35.2 87.2v190.4c0 48.8-25.6 89.6 23.2 89.6h370.4c48.8 0 23.2-40.8 23.2-89.6V202.8h-.8z"
                fill="#ad6b1a"
            />
            <Path
                d="M451.2 187.6c24-23.2 35.2-53.6 35.2-87.2 0-74.4-61.6-96.8-139.2-96.8-41.6 0-78.4 6.4-104 24-25.6-17.6-63.2-24-104.8-24C60.8 4.4 0 26 0 100.4c0 33.6 11.2 64 35.2 87.2V378c0 48.8-25.6 88.8 23.2 88.8h370.4c48.8 0 23.2-40 23.2-88.8V187.6h-.8z"
                fill="#e5a641"
            />
            <Path
                d="M428 466.8c48.8 0 23.2-40 23.2-88.8V187.6c24-23.2 35.2-53.6 35.2-87.2 0-74.4-61.6-96.8-139.2-96.8-41.6 0-78.4 6.4-104 24-25.6-17.6-64-24-105.6-24"
                fill="#c47e22"
            />
            <Path
                d="M419.2 194c16-19.2 25.6-44 25.6-71.2 0-60.8-52-78.4-115.2-78.4-33.6 0-64.8 5.6-85.6 19.2-20.8-14.4-51.2-19.2-85.6-19.2-63.2 0-116.8 17.6-116.8 78.4 0 27.2 9.6 52 25.6 71.2v155.2c0 40-14.4 85.6 24.8 85.6h301.6c40 0 24.8-46.4 24.8-85.6V194h.8z"
                fill="#f2e5a2"
            />
            <G fill="#e2ce8d">
                <Path
                    d="M394.4 434.8c40 0 24.8-46.4 24.8-85.6V194c16-19.2 25.6-44 25.6-71.2 0-60.8-52-78.4-115.2-78.4-33.6 0-64.8 5.6-85.6 19.2-20.8-14.4-50.4-19.2-84.8-19.2"/>
                <Circle cx={147.2} cy={160.4} r={20}/>
                <Circle cx={248} cy={380.4} r={20}/>
            </G>
            <Circle cx={379.2} cy={123.6} r={20} fill="#f2e5a2"/>
            <G fill="#e2ce8d">
                <Circle cx={139.2} cy={335.6} r={12.8}/>
                <Circle cx={123.2} cy={235.6} r={10.4}/>
                <Circle cx={196} cy={286} r={10.4}/>
            </G>
            <Circle cx={323.2} cy={230.8} r={10.4} fill="#f2e5a2"/>
            <G fill="#e2ce8d">
                <Circle cx={103.2} cy={107.6} r={8}/>
                <Circle cx={188} cy={210} r={8}/>
            </G>
            <Circle cx={304.8} cy={138} r={8} fill="#f2e5a2"/>
            <Circle cx={257.6} cy={279.6} r={4.8} fill="#e2ce8d"/>
            <Circle cx={367.2} cy={274} r={4.8} fill="#f2e5a2"/>
        </Svg>
    )
}

export default Toast
