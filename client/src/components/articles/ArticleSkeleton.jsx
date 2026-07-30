

const ArticleSkeleton = () => {

    return (

        <div
            className="
                grid
                grid-cols-1
                gap-6
                md:grid-cols-2
                xl:grid-cols-3
            "
        >

            {[1, 2, 3, 4, 5, 6].map((item) => (

                <div
                    key={item}
                    className="
                        animate-pulse
                        overflow-hidden
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                    "
                >

                    {/* Image */}

                    <div className="h-52 bg-slate-200" />

                    <div className="space-y-4 p-6">

                        {/* Badge */}

                        <div className="h-6 w-28 rounded-full bg-slate-200" />

                        {/* Title */}

                        <div className="h-6 w-4/5 rounded bg-slate-200" />

                        <div className="h-6 w-2/3 rounded bg-slate-200" />

                        {/* Summary */}

                        <div className="space-y-2">

                            <div className="h-4 rounded bg-slate-200" />

                            <div className="h-4 rounded bg-slate-200" />

                            <div className="h-4 w-3/4 rounded bg-slate-200" />

                        </div>

                        {/* Meta */}

                        <div className="flex justify-between pt-3">

                            <div className="h-4 w-20 rounded bg-slate-200" />

                            <div className="h-4 w-24 rounded bg-slate-200" />

                        </div>

                        {/* Button */}

                        <div className="h-5 w-32 rounded bg-slate-200" />

                    </div>

                </div>

            ))}

        </div>

    );

};

export default ArticleSkeleton;