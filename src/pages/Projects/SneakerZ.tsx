import sneakerz from "../../assets/sneakerz.png";
import MainFeaturesGrid from "../../components/Projects/MainFeaturesGrid";
import ToolsUsed from "../../components/Projects/ToolsUsed";

const features = [
    {
        title: "Autenticidad Verificada",
        body: "Cada par de zapatillas tiene una autenticidad verificada por expertos. Solo productos auténticos están disponibles en la plataforma para garantizar una experiencia segura para los compradores.",
        icon: "bi-shield-check"
    },
    {
        title: "Subasta en Tiempo Real",
        body: "Los usuarios pueden pujar por zapatillas en tiempo real, con precios que se actualizan constantemente, creando un ambiente dinámico y competitivo para los compradores.",
        icon: "bi-currency-dollar"
    },
    {
        title: "Precios Transparentes",
        body: "Los precios de las zapatillas son transparentes, con detalles sobre las tendencias de precios pasados y las valoraciones actuales del mercado para ayudar a los compradores a tomar decisiones informadas.",
        icon: "bi-bar-chart-line"
    },
    {
        title: "Envío Rápido y Seguro",
        body: "Una vez que se completa la transacción, las zapatillas se envían de manera rápida y segura, con opciones de seguimiento y seguro para el envío, asegurando que el comprador reciba el producto sin inconvenientes.",
        icon: "bi-truck"
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
        title: "Backend & Base de Datos",
        body: "Firebase & MongoDB Atlas",
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


const SneakerZ = () => {
    return (
        <div className="container my-5">
            <h1 className="text-center mb-2">SneakerZ (Proyecto en progreso)</h1>
            <p className="text-center custom-content">
                Aplicación Web para la Compra y Venta de Zapatillas Nuevas y con Autenticidad Verificada
            </p>

            <div className="row mb-3">
                <div className="col-md-12 mx-auto mb-3 my-auto">
                    <img
                        src={sneakerz}
                        className="img-fluid rounded shadow"
                    />
                </div>
            </div>

            <p className="custom-content">
                SneakerZ es una aplicación web innovadora diseñada para la compra y venta de zapatillas nuevas, con autenticidad verificada.
                Los usuarios pueden comprar y vender las zapatillas a través de la plataforma, garantizando transacciones seguras.
                Además, se contará con un grupo de expertos que verificarán la autenticidad de las zapatillas.
                Integrada con Firebase y MongoDB Atlas, la aplicación ofrece una experiencia de usuario fluida con datos en tiempo real, autenticación segura, y almacenamiento en la nube.
            </p>

            <MainFeaturesGrid features={features} />

            <section className="mt-5">
                <h2 className="text-center">Tecnología y Buenas Prácticas</h2>
                <p className="custom-content">
                    SneakerZ está siendo desarrollada utilizando Vite, React y TypeScript, lo que permite una arquitectura eficiente y moderna para aplicaciones web.
                    Firebase y MongoDB Atlas se utilizará para la autenticación segura, almacenamiento en la nube y la sincronización en tiempo real de las zapatillas, precios y estados de transacción.
                </p>
            </section>

            <ToolsUsed tools={tools} />
        </div>
    );
}

export default SneakerZ;
