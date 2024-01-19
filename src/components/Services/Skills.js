import './Services.css'
import { useFirebase } from '../../hooks/UseFirebse'

export default function Skills(){
    const {data: skills, err, isLoading} = useFirebase('skills')

    return(
        <>
            <h1 className="title gradient-text">my skills</h1>
            <ul className="services_container">
                {skills && skills.map((skill,index) => (
                <li key={index}>
                    <div className="img" style={{backgroundImage: `url(${skill.image})`}}></div>
                    <div className="title">{skill.title}</div>
                    <div className="des">{skill.description}</div>
                </li>
            ))}
            </ul>
        </>
    )
}