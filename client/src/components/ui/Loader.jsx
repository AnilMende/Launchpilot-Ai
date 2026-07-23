import clsx from "clsx";

const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-[3px]",
    lg: "h-12 w-12 border-4",
};

const Loader = ({
    size = "md",
    text,
    fullScreen = false,
    className = "",
}) => {

    const loader = (
        <div
            className={clsx(
                "flex flex-col items-center justify-center gap-3",
                className
            )}
        >
            <div
                className={clsx(
                    "animate-spin rounded-full border-indigo-600 border-t-transparent",
                    sizes[size]
                )}
            />

            {text && (
                <p className="text-sm text-slate-500">
                    {text}
                </p>
            )}
        </div>
    );

    if (fullScreen) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
                {loader}
            </div>
        );
    }

    return loader;
};

export default Loader;