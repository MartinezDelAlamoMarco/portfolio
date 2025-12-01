import { useParams } from 'react-router';

const ProjectDetail = () => {
  // Usamos useParams para obtener el parámetro de la ruta
  const { projectId } = useParams<{ projectId: string }>();

  return (
    <div>
      <h1>Detalles del Proyecto: {projectId}</h1>
      {/* Aquí puedes mostrar más detalles del proyecto basándote en el projectId */}
      <p>Detalles específicos del proyecto {projectId}.</p>
    </div>
  );
};

export default ProjectDetail;
