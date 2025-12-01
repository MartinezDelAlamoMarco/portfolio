import marketplaceInterfaceImage from "../../assets/second_life_hub.png";
import marketplaceImage from "../../assets/secondlifehub_logo.png";
import MainFeaturesGrid from "../../components/Projects/MainFeaturesGrid";
import ToolsUsed from "../../components/Projects/ToolsUsed";

const features = [
    {
        title: "Subida de Productos Personalizada",
        body: "Publica artículos fácilmente con imágenes, descripciones detalladas, precios y categorías específicas. Personaliza parámetros como estado del producto (reservado, vendido, etc.).",
        icon: "bi-upload"
    },
    {
        title: "Perfiles Personalizados",
        body: "Personaliza tu propio perfil con un nombre de usuario y una foto de perfil. Administra anuncios, favoritos y el historial de compras y ventas desde un perfil configurable.",
        icon: "bi-person-fill"
    },
    {
        title: "Mensajes en Tiempo Real",
        body: "Chat directo en tiempo real entre compradores y vendedores para facilitar la negociación y organización de entregas.",
        icon: "bi-chat"
    },
    {
        title: "Actualizaciones en Tiempo Real",
        body: "Todos los cambios, como el estado de los productos o el precio, se actualizan al instante en la base de datos en la nube, garantizando que la información esté siempre al día.",
        icon: "bi-arrow-repeat"
    }
];

const tools = [
    {
        title: "Frameworks",
        body: "Flutter",
        icon: "bi-phone"
    },
    {
        title: "Lenguajes",
        body: "Dart",
        icon: "bi-code"
    },
    {
        title: "Backend & Base de Datos",
        body: "Firebase",
        icon: "bi-database-fill"
    },
    {
        title: "APIs",
        body: "Geolocalización",
        icon: "bi-geo-fill"
    },
    {
        title: "Entornos de Desarrollo",
        body: "Android Studio",
        icon: "bi-laptop"
    },
    {
        title: "Control de Versiones",
        body: "Git & GitHub",
        icon: "bi-git"
    }
];



const SecondLifeHub = () => {
    return (
        <div className="container my-5">
            <h1 className="text-center mb-2">SecondLifeHub</h1>
            <p className="text-center custom-content">
                Marketplace para la Compra y Venta de Productos de Segunda Mano
            </p>

            <div className="row mb-3">
                <div className="col-md-5 mx-auto mb-3 my-auto">
                    <img
                        src={marketplaceImage}
                        className="img-fluid rounded shadow"
                    />
                </div>
                <div className="col-md-7 mx-auto mb-3 my-auto">
                    <img
                        src={marketplaceInterfaceImage}
                        className="img-fluid rounded"
                    />
                </div>
            </div>

            <p className="custom-content">
                SecondLifeHub es una aplicación multiplataforma compatible con Android, iOS y navegadores web, desarrollada en Flutter con Dart, diseñada para conectar a personas interesadas en la compraventa de artículos de segunda mano de manera segura,
                organizada y eficiente. Gracias a su integración con Firebase, la plataforma ofrece una experiencia fluida con datos en tiempo real, autenticación segura y almacenamiento escalable.
            </p>

            <MainFeaturesGrid features={features} />

            <section className="mt-5">
                <h2 className="text-center">Tecnología y Buenas Prácticas</h2>
                <p className="custom-content">
                    SecondLifeHub ha sido diseñada aplicando principios de arquitectura modular y escalable, garantizando un código limpio y mantenible. La integración con Firebase permite autenticación segura, almacenamiento eficiente y sincronización en tiempo real, ofreciendo una experiencia ágil y confiable.
                </p>
            </section>

            <ToolsUsed tools={tools} />
        </div>
    );
};

export default SecondLifeHub;
