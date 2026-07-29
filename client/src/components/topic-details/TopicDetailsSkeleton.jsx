

const TopicDetailsSkeleton = () => {

    return (

        <div className="space-y-8 animate-pulse">

            {/* Hero */}

            <div
                className="
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-8
                "
            >

                <div className="flex items-center gap-6">

                    <div className="h-20 w-20 rounded-3xl bg-slate-200" />

                    <div className="flex-1">

                        <div className="h-8 w-64 rounded bg-slate-200" />

                        <div className="mt-4 h-4 w-full rounded bg-slate-200" />
                        <div className="mt-2 h-4 w-5/6 rounded bg-slate-200" />
                        <div className="mt-2 h-4 w-3/4 rounded bg-slate-200" />

                    </div>

                </div>

            </div>

            {/* Stats */}

            <div className="grid gap-6 md:grid-cols-2">

                {[1, 2].map(card => (

                    <div
                        key={card}
                        className="
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            p-6
                        "
                    >

                        <div className="h-14 w-14 rounded-xl bg-slate-200" />

                        <div className="mt-5 h-8 w-20 rounded bg-slate-200" />

                        <div className="mt-3 h-4 w-32 rounded bg-slate-200" />

                    </div>

                ))}

            </div>

            {/* Articles */}

            <div>

                <div className="mb-6 h-8 w-52 rounded bg-slate-200" />

                <div className="grid gap-6 md:grid-cols-2">

                    {[1, 2].map(card => (

                        <div
                            key={card}
                            className="
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                p-6
                            "
                        >

                            <div className="h-5 w-24 rounded bg-slate-200" />

                            <div className="mt-5 h-6 w-2/3 rounded bg-slate-200" />

                            <div className="mt-5 h-4 rounded bg-slate-200" />
                            <div className="mt-2 h-4 rounded bg-slate-200" />
                            <div className="mt-2 h-4 w-4/5 rounded bg-slate-200" />

                        </div>

                    ))}

                </div>

            </div>

            {/* Resources */}

            <div>

                <div className="mb-6 h-8 w-56 rounded bg-slate-200" />

                <div className="grid gap-6 md:grid-cols-2">

                    {[1, 2].map(card => (

                        <div
                            key={card}
                            className="
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                p-6
                            "
                        >

                            <div className="h-14 w-14 rounded-2xl bg-slate-200" />

                            <div className="mt-5 h-6 w-2/3 rounded bg-slate-200" />

                            <div className="mt-4 h-4 rounded bg-slate-200" />
                            <div className="mt-2 h-4 rounded bg-slate-200" />
                            <div className="mt-2 h-4 w-3/4 rounded bg-slate-200" />

                        </div>

                    ))}

                </div>

            </div>

        </div>

    );

};

export default TopicDetailsSkeleton;