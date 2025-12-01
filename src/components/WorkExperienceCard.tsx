import "./WorkExperienceCard.css"
import DOMPurify from "dompurify";

interface WorkExperienceCardProps {
  jobName: string;
  companyName: string;
  dateStart: Date;
  dateEnd?: Date | null;
  jobDescription: string;
  tools?: string[]; // Nueva propiedad para imágenes de herramientas
}

const WorkExperienceCard = ({
  jobName,
  companyName,
  dateStart,
  dateEnd,
  jobDescription,
  tools = [], // Valor por defecto como array vacío
}: WorkExperienceCardProps) => {
  const formatDate = (date: Date) =>
    date.toLocaleDateString("es-ES", { year: "numeric", month: "long" });

  return (
    <div className="card text-bg-primary">
      <div className="card-header">
        <span className="fw-bold me-5">{companyName}</span>
      </div>
      <div className="card-body">
        <h5 className="card-title">{jobName}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {formatDate(dateStart)} - {dateEnd ? formatDate(dateEnd) : "Actualidad"} ({calcularDiferenciaFechas(dateStart, dateEnd!)})
        </h6>
        <p className="card-text"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(jobDescription) }}
        ></p>
      </div>
      <div className="card-footer">
        {tools.length > 0 && (
          <div className="tools-container">
            {tools.map((tool, index) => (
              <div
                key={index}
                style={{
                  height: "4rem",
                  backgroundColor: "white",
                  borderRadius: "0.5rem",
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0.25rem 0.75rem",
                  padding: "0.5rem 0.75rem",
                }}
              >
                <img
                  src={tool}
                  alt="Herramienta utilizada"
                  style={{
                    height: "100%",
                    width: "auto",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>

            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkExperienceCard;


function calcularDiferenciaFechas(fecha1: Date, fecha2?: Date): string {
  const promedioDiasMes = 30.44;
  const diferenciaMilisegundos = fecha2 ? fecha2.getTime() - fecha1.getTime() : Date.now() - fecha1.getTime();
  const diferenciaDias = diferenciaMilisegundos / (1000 * 60 * 60 * 24);
  const diferenciaMeses = Math.round(diferenciaDias / promedioDiasMes);
  if (diferenciaMeses >= 12) {
    return (Math.round(diferenciaMeses / 12) + (diferenciaMeses < 24 ? " año y " : " años y ") + diferenciaMeses + " meses");
  } else {
    return (diferenciaMeses + " meses");
  }
}