import './Services.css'
import Skills from './Skills'
import { useFirebase } from '../../hooks/UseFirebse'

export default function Services(){
    const {data: services, err, isLoading} = useFirebase('services')
    return(
        <section className="services container" id="services">
		<h1 className="title gradient-text">services</h1>
		<ul className="services_container">
			{services && services.map((service,index) => (
                <li key={index}>
                    <div className="img" style={{backgroundImage: `url(${service.image})`}}></div>
                    <div className="title">{service.title}</div>
                    <div className="des">{service.description}</div>
                </li>
            ))}
		</ul>
        <Skills />
	</section>
    )
}