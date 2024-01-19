import './About.css'
import aboutPhoto from '../../assets/images/about.png'
import Cv from '../../assets/images/cv.pdf'
import { useFirebase } from '../../hooks/UseFirebse'

export default function About (){
    const {data: abouts} = useFirebase('abouts')


    return (
        <section className="aboutme container" id="about">
            <h1 className="title gradient-text">about me</h1>
            <div className="about-box-wrapper">
                {abouts && abouts.map((about, index) => (
                    <div className="about-box" key={index}>
                        <div className="img-container">
                            <div className="img" style={{backgroundImage: `url(${about.image})`}} ></div>
                        </div>
                        <div className="title">{about.title}</div>
                        <div className="des">{about.des}</div>
                    </div>
                ))}
            </div>
            <div className="description">
                <div className="vector">
                    <img src={aboutPhoto} alt="" />
                </div>
                <div className="des">
                    <div className="main">
                        Nasir Ahmad Ahamdy, a 19-year-old Full Stack Web Developer hailing from Afghanistan. With a passion for crafting seamless online experiences, I delve into the intricacies of web development, ensuring fast, responsive, and intuitive designs. Born in 2004, I am dedicated to pushing the boundaries of web technology.
                    </div>
                    <div className="more">
                        My journey in the vast realm of web development began at a young age. Armed with a relentless curiosity, I've honed my skills to become a versatile Full Stack Developer. Embracing challenges and constantly evolving, I strive to create dynamic and innovative solutions, shaping the digital landscape.
                    </div>
                    <a href={Cv} className="gradient-text my-cv">Downlaod my resume (PDF)</a>
                </div>
            </div>
        </section>
    )
}