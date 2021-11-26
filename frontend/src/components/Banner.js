import '../style/Banner.css'
import React from 'react'
import logospotify from '../assets/logospotify.png'
import { useSpring, animated, config } from 'react-spring'
import { useState } from 'react'

function Welcome() {
    const [flip, set] = useState(true)
    
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        reverse: flip,
        delay: 200,
        config: config.molasses,
        onRest: () => set(!flip),
        
    })

    return <animated.h1 style={props}>Bienvenue sur notre magnifique dashboard 🥳</animated.h1>
}

export default function Banner() {

    const props_banner = useSpring({ to: { opacity: 1 }, from: { opacity: -1 }, delay: 1000 })
    const props_banner_title = useSpring({ to: { opacity: 1 }, from: { opacity: -1 }, delay: 2000 })
    const props_banner_logo = useSpring({ to: { opacity: 1 }, from: { opacity: -1 }, delay: 2500 })
    const welcome = Welcome();

    return (<animated.div style={props_banner}>
        <div>
            <div className='dash-banner'>
                <animated.div style={props_banner_title}>
                    <h1 className='dash-title'>Dashboard</h1>
                </animated.div>

                {welcome}

                <animated.div style={props_banner_logo}>
                    <img src={logospotify} alt='Application musicale' className='dash-logo' />
                </animated.div>

            </div>
        </div>
    </animated.div>
    )
}
