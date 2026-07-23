import clsx from "clsx";

const EmptyState = ({
    icon,
    title = "Nothing here yet",
    description = "There's no data available at the moment.",
    action,
    className = "",
}) => {
    return (
        <div
            className={clsx(
                "flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center",
                className
            )}
        >
            {icon && (
                <div className="mb-4 rounded-full bg-indigo-100 p-4 text-indigo-600">
                    {icon}
                </div>
            )}

            <h3 className="text-lg font-semibold text-slate-900">
                {title}
            </h3>

            <p className="mt-2 max-w-md text-sm text-slate-500">
                {description}
            </p>

            {action && (
                <div className="mt-6">
                    {action}
                </div>
            )}
        </div>
    );
};

export default EmptyState;