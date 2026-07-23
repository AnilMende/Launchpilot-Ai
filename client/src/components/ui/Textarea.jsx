import clsx from "clsx";

const Textarea = ({
    label,
    error,
    helperText,
    required = false,
    rows = 5,
    className = "",
    ...props
}) => {

    return (
        <div className="w-full">

            {label && (
                <label className="mb-2 block text-sm font-medium text-slate-700">

                    {label}

                    {required && (
                        <span className="ml-1 text-red-500">*</span>
                    )}

                </label>
            )}

            <textarea
                rows={rows}
                className={clsx(
                    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3",
                    "transition duration-200",
                    "focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500",
                    "disabled:cursor-not-allowed disabled:bg-slate-100",
                    "resize-y",
                    error && "border-red-500 focus:border-red-500 focus:ring-red-500",
                    className
                )}
                {...props}
            />

            {error ? (
                <p className="mt-1 text-sm text-red-500">
                    {error}
                </p>
            ) : (
                helperText && (
                    <p className="mt-1 text-sm text-slate-500">
                        {helperText}
                    </p>
                )
            )}

        </div>
    );

};

export default Textarea;