import clsx from "clsx";

const variants = {
    primary:
        "bg-indigo-600 text-white hover:bg-indigo-700",

    secondary:
        "bg-slate-100 text-slate-700 hover:bg-slate-200",

    outline:
        "border border-slate-300 text-slate-700 hover:bg-slate-50",

    danger:
        "bg-red-600 text-white hover:bg-red-700",

    success:
        "bg-green-600 text-white hover:bg-green-700",
};

const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
};

const Button = ({
    children,
    variant = "primary",
    size = "md",
    loading = false,
    fullWidth = false,
    disabled = false,
    className = "",
    ...props
}) => {
    return (
        <button
            disabled={disabled || loading}
            className={clsx(
                "rounded-xl font-medium transition-all duration-200",
                "flex items-center justify-center gap-2",
                "disabled:opacity-50 disabled:cursor-not-allowed",

                variants[variant],
                sizes[size],

                fullWidth && "w-full",

                className
            )}
            {...props}
        >
            {loading && (
                <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
            )}

            {children}
        </button>
    );
};

export default Button;