import { useFirebase } from '../../hooks/UseFirebse'
import Typewriter from 'typewriter-effect';

import './Projects.css'

export default function Projects (){
    const {data: projects, err, isLoading} = useFirebase('projects')

    return(
        <section className="projects container" id="projects">
                {err && (<div>{err}</div>)}
            <h1 className="title gradient-text">Projects</h1>
            <div className="des">
                <span className="text">
                    <Typewriter 
                        options={{
                            autoStart:true,
                            loop: true,
                            delay: 50,
                            strings: ['Coding for me is like a journey; each project opens up adventurous ideas, and with the best execution, it presents an endless story of creativity and coding.']
                        }}
                    />
                </span>
            </div>
            <div className="box-wrapper">
                {projects && projects.map((project, index) => (
                    <div className="box" key={index}>
                        <div className="owl-carousel owl-theme">
                            {project.images.map((img, index) => {
                                <div className="item" loading="lazy" style={{backgroundImage: `url(${img})`}}></div>
                            })}
                        </div>
                        <img src={`${project.images[0]}`} />
                        <p className="title gradient-text">{project.title}</p>
                        <div className="des">
                            {project.description}
                            <a href={project.link} target="_blank">read more</a>
                        </div>
                    </div>
                ))}              
                <div className="cover"></div>
            </div>
        </section>
    )
}