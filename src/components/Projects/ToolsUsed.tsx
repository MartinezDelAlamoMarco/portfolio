interface Tool {
    title: string;
    body: string;
    icon: string;
}

interface ToolsUsedProps {
    tools: Tool[];
}

const ToolsUsed = ({ tools }: ToolsUsedProps) => {
    return (
        <section className="mt-5">
            <h2 className="text-center"><i className="bi bi-tools me-3"></i>Herramientas Utilizadas</h2>
            <ul className="list-group list-group-flush mt-3 rounded-3 custom-content">
                {
                    tools.map(({ title, body, icon }) => {
                        return (
                            <li className="list-group-item"><i className={`bi ${icon} me-3`}></i><strong>{title}:</strong> {body}</li>
                        );
                    })
                }
            </ul>
        </section>
    )
}

export default ToolsUsed