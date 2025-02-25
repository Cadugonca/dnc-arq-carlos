import './List.css'
import { useState, useEffect, useContext } from 'react'

// Component
import Button from '../Button/Button'

// ASSETS
import LikeFilled from '../../assets/likeFilled.svg'
import Like from '../../assets/like.svg'

//UTILS
import { getApiData } from '../../services/apiServices'

// Context
import { AppContext } from '../../contexts/AppContext'
2
function  List(){
    const [projects, setProjects] = useState([])
    const [favProjects, setFavProjects] = useState([])
    const appContext = useContext(AppContext)

    const handleSavedProjects = (id) => {
        setFavProjects((prevFavProjects) => {
            if (!Array.isArray(prevFavProjects)) prevFavProjects = []; // Garante que é um array
    
            if (prevFavProjects.includes(id)) {
                const filterArray = prevFavProjects.filter((projectId) => projectId !== id);
                sessionStorage.setItem('favProjects', JSON.stringify(filterArray));
                return filterArray; // Retorna o novo estado atualizado
            } else {
                const newFavProjects = [...prevFavProjects, id];
                sessionStorage.setItem('favProjects', JSON.stringify(newFavProjects));
                return newFavProjects; // Retorna o novo estado atualizado
            }
        });
    };
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectsResponse = await getApiData('projects')
                setProjects(projectsResponse)
            } catch {
                setProjects([])
            }
        }

        fetchData() 
    }, [])

    useEffect(() => {
        const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects')) || []; // Garante que sempre será um array
        setFavProjects(savedFavProjects);
    }, []);
    

    
    
    return (
        <div className="projects-section">
                <div className="projects-hero">
                        <h2>{appContext.languages[appContext.language].projects.title}</h2>
                        <p>{appContext.languages[appContext.language].projects.subtitle}</p>
                        </div>
                <div className="projects-grid">
                    {
                     projects ?
                        projects.map((project) => (
                                <div className="projects-card d-flex jc-center al-center fd-column" key={project.id}>
                                        <div className="thumb tertiary-background"
                                            style={{backgroundImage: `url(${project.thumb})`}}> 
                                         
                                         </div>
                                            <h3>{project.title}</h3>
                                            <p>{project.subtitle}</p>

                                            <Button buttonStyle="unstyled" onClick={() => handleSavedProjects(project.id)}>
                                            <img src={(favProjects ?? []).includes(project.id) ? LikeFilled : Like} height="20px"/>
                                            </Button>
                                </div>
                        ))
                        :
                        null
                    }
                </div>
          </div>
    )
}

export default List