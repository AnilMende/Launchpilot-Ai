

const ResourceSkeleton = () => {

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
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-6
                    "
                >

                    {/* Header */}

                    <div className="mb-5 flex items-center justify-between">

                        <div className="h-12 w-12 rounded-xl bg-slate-200" />

                        <div className="h-6 w-20 rounded-full bg-slate-200" />

                    </div>

                    {/* Title */}

                    <div className="space-y-3">

                        <div className="h-6 w-3/4 rounded bg-slate-200" />

                        <div className="h-6 w-1/2 rounded bg-slate-200" />

                    </div>

                    {/* Description */}

                    <div className="mt-5 space-y-2">

                        <div className="h-4 rounded bg-slate-200" />

                        <div className="h-4 rounded bg-slate-200" />

                        <div className="h-4 w-2/3 rounded bg-slate-200" />

                    </div>

                    {/* Footer */}

                    <div className="mt-6 flex items-center justify-between">

                        <div className="h-8 w-24 rounded-full bg-slate-200" />

                        <div className="h-5 w-16 rounded bg-slate-200" />

                    </div>

                </div>

            ))}

        </div>

    );

};

export default ResourceSkeleton;