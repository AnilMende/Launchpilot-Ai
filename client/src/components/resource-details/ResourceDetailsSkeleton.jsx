
const ResourceDetailsSkeleton = () => {

    return (

        <div className="space-y-8 animate-pulse">

            <div
                className="
                    rounded-3xl
                    bg-slate-200
                    h-72
                "
            />

            <div className="grid gap-8 lg:grid-cols-3">

                <div className="space-y-5 lg:col-span-2">

                    <div className="h-6 rounded bg-slate-200" />
                    <div className="h-6 rounded bg-slate-200" />
                    <div className="h-6 w-4/5 rounded bg-slate-200" />
                    <div className="h-6 rounded bg-slate-200" />
                    <div className="h-6 w-3/4 rounded bg-slate-200" />

                </div>

                <div className="space-y-6">

                    <div className="h-64 rounded-3xl bg-slate-200" />

                    <div className="h-52 rounded-3xl bg-slate-200" />

                </div>

            </div>

        </div>

    );

};

export default ResourceDetailsSkeleton;