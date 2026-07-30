

const ArticleDetailsSkeleton = () => {

    return (

        <div className="space-y-8 animate-pulse">

            <div
                className="
                    h-80
                    rounded-3xl
                    bg-slate-200
                "
            />

            <div className="space-y-4">

                <div className="h-10 w-2/3 rounded bg-slate-200" />

                <div className="h-6 w-full rounded bg-slate-200" />

                <div className="h-6 w-4/5 rounded bg-slate-200" />

            </div>

            <div
                className="
                    rounded-3xl
                    bg-white
                    p-8
                    shadow-sm
                "
            >

                {[1,2,3,4,5,6].map((item) => (

                    <div
                        key={item}
                        className="
                            mb-5
                            h-5
                            rounded
                            bg-slate-200
                        "
                    />

                ))}

            </div>

        </div>

    );

};

export default ArticleDetailsSkeleton;