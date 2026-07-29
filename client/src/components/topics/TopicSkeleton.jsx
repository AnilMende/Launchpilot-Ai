

const TopicSkeleton = ({ count = 6 }) => {

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

            {Array.from({ length: count }).map((_, index) => (

                <div
                    key={index}
                    className="
                        animate-pulse
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-6
                        shadow-sm
                    "
                >

                    {/* Header */}

                    <div className="flex items-start justify-between">

                        <div className="h-14 w-14 rounded-2xl bg-slate-200" />

                        <div className="h-6 w-24 rounded-full bg-slate-200" />

                    </div>

                    {/* Title */}

                    <div className="mt-6 h-6 w-2/3 rounded bg-slate-200" />

                    {/* Description */}

                    <div className="mt-4 space-y-2">

                        <div className="h-4 rounded bg-slate-200" />

                        <div className="h-4 rounded bg-slate-200" />

                        <div className="h-4 w-4/5 rounded bg-slate-200" />

                    </div>

                    {/* Footer */}

                    <div className="mt-8 h-5 w-32 rounded bg-slate-200" />

                </div>

            ))}

        </div>

    );

};

export default TopicSkeleton;