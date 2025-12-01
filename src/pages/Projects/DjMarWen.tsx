import djMarWenScreenshot from "../../assets/djmarwen_web.png"
import MainFeaturesGrid from "../../components/Projects/MainFeaturesGrid";
import ToolsUsed from "../../components/Projects/ToolsUsed";

const features = [
    {
        title: "Experiencia Minimalista y Dinámica",
        body: "La página web ofrece una experiencia agradable gracias a un diseño minimalista y a animaciones sutiles que mejoran la interacción del usuario sin sobrecargar la interfaz.",
        icon: "bi-ui-checks"
    },
    {
        title: "Navegación Intuitiva",
        body: "Los usuarios pueden acceder fácilmente a la historia del DJ, sus logros, objetivos y materiales con los que trabaja, gracias a una interfaz clara y organizada.",
        icon: "bi-compass"
    },
    {
        title: "Integración con Redes Sociales",
        body: "Se incluyen iconos que redirigen a SoundCloud, Instagram y TikTok, permitiendo a los seguidores conectar con el DJ de manera rápida y directa.",
        icon: "bi-share-fill"
    },
    {
        title: "Formulario de Contacto Eficiente",
        body: "El formulario de contacto permite a los usuarios enviar mensajes directamente al correo electrónico del DJ, facilitando la comunicación con clientes y seguidores.",
        icon: "bi-envelope-fill"
    },
    {
        title: "Tecnología Moderna",
        body: "La web está desarrollada con Vite, React y TypeScript, asegurando una arquitectura eficiente, rápida y escalable.",
        icon: "bi-window"
    },
    {
        title: "Automatización de Emails",
        body: "La integración con la API de Gmail permite enviar emails automáticos desde el formulario, garantizando que cada mensaje llegue directamente al DJ.",
        icon: "bi-mailbox"
    }
];

const tools = [
    {
        title: "Frameworks",
        body: "Vite & React",
        icon: "bi-window"
    },
    {
        title: "Lenguajes",
        body: "JavaScript, TypeScript, HTML5, CSS3",
        icon: "bi-code"
    },
    {
        title: "Backend",
        body: "Firebase & API Gmail",
        icon: "bi-database-fill"
    },
    {
        title: "Entornos de Desarrollo",
        body: "Visual Studio Code",
        icon: "bi-laptop"
    },
    {
        title: "Control de Versiones",
        body: "Git & GitHub",
        icon: "bi-git"
    }
];

const DjMarWen = () => {
    return (
        <div className="container my-5">
            <h1 className="text-center mb-2">Página Web para DJMARWEN</h1>
            <p className="text-center custom-content">
                Página web de ejemplo para un DJ ficticio llamado DJMARWEN. Página web informativa y con formulario de contacto.
            </p>

            <div className="row mb-3">
                <div className="mx-auto mb-3 my-auto">
                    <img
                        src={djMarWenScreenshot}
                        className="img-fluid rounded shadow"
                    />
                </div>
            </div>

            <p className="custom-content">
                La página web de DJMARWEN es una aplicación web minimalista que ofrece una experiencia agradable y dinámica gracias a los efectos y animaciones sutiles que han sido incorporados.
                Los usuarios que visiten la página web podrán navegar por sus distintas pestañas, conociendo acerca de la historia de DJMARWEN, sus aptitudes, logros, objetivos, y materiales con los que trabaja.
            </p>
            <p className="custom-content">
                Además, se cuenta con iconos de redes sociales que redirigirían al SoundCloud, Instagram y TikTok del DJ.
                La página web también incluye un formulario de contacto que permite a los usuarios enviar mensajes directamente al correo electrónico del DJ, facilitando la comunicación y la interacción con sus seguidores y potenciales clientes.
            </p>

            <MainFeaturesGrid features={features} />

            <section className="mt-5">
                <h2 className="text-center">Tecnología y Buenas Prácticas</h2>
                <p className="custom-content">
                    Esta web ha siedo desarrollada utilizando Vite, React y TypeScript, lo que permite una arquitectura eficiente y moderna para aplicaciones web.
                    La API de Gmail es utilizada para enviar emails al correo electrónico del DJ.
                </p>
            </section>

            <ToolsUsed tools={tools} />
        </div>
    );
}

export default DjMarWen;
