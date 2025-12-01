import asp_net from "../../assets/asp_net.png";
import MainFeaturesGrid from "../../components/Projects/MainFeaturesGrid";
import ToolsUsed from "../../components/Projects/ToolsUsed";

const features = [
    {
        title: "Gestión en Tiempo Real",
        body: "Los usuarios pueden gestionar y monitorear sus servicios en tiempo real, con actualizaciones constantes que mantienen la plataforma dinámica y eficiente.",
        icon: "bi-clock"
    },
    {
        title: "Optimización de Procesos",
        body: "Una vez que los servicios están gestionados, se optimizan los procesos de manera eficiente, con herramientas que garantizan que el usuario pueda seguir el estado de cada tarea.",
        icon: "bi-gear-wide-connected"
    },
    {
        title: "Interfaz Intuitiva",
        body: "La plataforma cuenta con una interfaz fácil de usar, diseñada para que los usuarios gestionen sus servicios de manera rápida y sencilla sin complicaciones.",
        icon: "bi-ui-checks"
    },
    {
        title: "Cambios y Acciones Registradas Mediante Logs",
        body: "Todos los cambios y acciones realizadas dentro del portal se registran de manera detallada mediante logs, asegurando una trazabilidad y seguridad en la plataforma.",
        icon: "bi-journal-text"
    }
];

const tools = [
    {
        title: "Frameworks",
        body: "ASP.NET MVC",
        icon: "bi-window"
    },
    {
        title: "Lenguajes",
        body: "C#, HTML5, CSS3",
        icon: "bi-code"
    },
    {
        title: "Backend & Base de Datos",
        body: "Microsoft SQL Server & Microsoft Entity Framework",
        icon: "bi-database-fill"
    },
    {
        title: "Entornos de Desarrollo",
        body: "Visual Studio 2022",
        icon: "bi-laptop"
    },
    {
        title: "Control de Versiones",
        body: "Git & GitHub",
        icon: "bi-git"
    }
];

const PortalWeb = () => {
    return (
        <div className="container my-5">
            <h1 className="text-center mb-2">Portal Web para Gestión de Servicios</h1>
            <p className="text-center custom-content">
                Desarrollo de portal web para la gestión, administración y monitoreo de servicios ofrecidos por la empresa.
            </p>

            <div className="row mb-3">
                <div className="col-md-6 mx-auto mb-3 my-auto">
                    <img
                        src={asp_net}
                        className="bg-white img-fluid rounded shadow"
                    />
                </div>
            </div>

            <p className="custom-content">
                El portal web está diseñado para la gestión eficiente de los servicios, ofreciendo una plataforma donde los usuarios pueden administrar, 
                cambiar parámetros y optimizar sus tareas y servicios contratados. 
                Utiliza ASP.NET MVC para crear una arquitectura robusta y escalable, con C# como lenguaje de programación principal. 
                El backend está gestionado con Microsoft SQL Server y Microsoft Entity Framework para la manipulación eficiente de datos en la base de datos.
            </p>

            <MainFeaturesGrid features={features} />

            <section className="mt-5">
                <h2 className="text-center">Tecnología y Buenas Prácticas</h2>
                <p className="custom-content">
                    El portal web ha sido desarrollado utilizando ASP.NET MVC, C#, HTML, y CSS, lo que proporciona una plataforma eficiente para la gestión de servicios. 
                    Microsoft Entity Framework se utiliza para la interacción con la base de datos Microsoft SQL Server, garantizando la integración eficiente y el manejo seguro de los datos.
                </p>
            </section>

            <ToolsUsed tools={tools} />
        </div>
    );
}

export default PortalWeb;
