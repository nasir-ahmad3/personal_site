import './SiteHeader.css'
import HeaderImg from '../../assets/images/header_bg.png'
import Typewriter from 'typewriter-effect';

export default function SiteHeader(){

    const texts = [
        '<span>creative</span>',
        '<span>innovative</span>',
        '<span>imaginative</span>',
        '<span>original</span>',
        '<span>inventive</span>',
    ]


    return (
            <div className="siteHeader container">
                <div className="left">
                    <div className="experince">
                        <Typewriter 
                            options={{
                                autoStart:true,
                                loop: true,
                                delay:100,
                                strings: ['3 years of experince.........']
                            }}
                        />
                    </div>
                    <div className="title">
                        Empowering digital <br />
                        journeys
                        <div>
                        <Typewriter 
                            options={{
                                autoStart:true,
                                loop: true,
                                delay: 200,
                                strings: texts
                            }}
                        />
                        </div>
                    </div>
                    <p className="content">Crafting Exceptional Web Experiences: Unlocking Creativity and Innovation in the Digital World. Seamlessly Blending Design and Functionality to Engage Users. Empowering Brands with Customized Solutions and Cutting-Edge Technologies. Elevate Your Online Presence with Expert Web Development Services Tailored to Your Unique Needs.</p>
                </div>
                <div className="right">
                    <div className="bg"></div>
                    <div className="img" style={{backgroundImage: `url(${HeaderImg})`}} ></div>
                </div>
        </div>
    )
}