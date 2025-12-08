import projects from '../data/projects.json'
import { Card } from "../components/Card"

export const ProjectsPage = () => {

  return (
    <div id="projects" className='bg-white min-h-screen w-full grid content-center justify-center'>
      <div className="container">
        <div className="flex flex-col gap-12 py-12">
          {projects.map(proj => (
            <Card key={proj.id} proj={proj}/>
          ))}
        </div>
      </div>
    </div>
  )
}
