
const ResourceContent = ({ resource }) => {

    return (

        <section
            className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
            "
        >

            <h2 className="mb-6 text-2xl font-semibold">

                About this Resource

            </h2>

            <p
                className="
                    whitespace-pre-wrap
                    leading-8
                    text-slate-700
                "
            >

                {resource.description}

            </p>

        </section>

    );

};

export default ResourceContent;