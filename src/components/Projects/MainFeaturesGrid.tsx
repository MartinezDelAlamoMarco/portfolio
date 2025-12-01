interface Feature {
    title: string;
    body: string;
    icon: string;
}

interface MainFeaturesGridProps {
    features: Feature[];
}

const MainFeaturesGrid = ({ features }: MainFeaturesGridProps) => {
    return (
        <section className="mt-5">
            <h2 className="text-center">Características Principales</h2>
            <div className="row g-4 mt-3">
                {
                    features.map(({ title, body, icon } ) => {
                        return (
                            <div className="col-md-6">
                                <div className="card h-100 shadow-sm">
                                    <div className="card-body">
                                        <h5 className="card-title"><i className={`bi ${icon} me-3`}></i>{title}</h5>
                                        <p className="card-text custom-content">
                                            {body}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    )
}

export default MainFeaturesGrid