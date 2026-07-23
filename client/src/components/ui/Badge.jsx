import clsx from "clsx";

const variants = {
    primary:
        "bg-indigo-100 text-indigo-700",

    secondary:
        "bg-slate-100 text-slate-700",

    success:
        "bg-emerald-100 text-emerald-700",

    warning:
        "bg-amber-100 text-amber-700",

    danger:
        "bg-red-100 text-red-700",

    info:
        "bg-sky-100 text-sky-700",

    purple:
        "bg-purple-100 text-purple-700",
};

const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-sm",
    lg: "px-3 py-1.5 text-base",
};

const Badge = ({
    children,
    variant = "primary",
    size = "md",
    rounded = true,
    icon,
    className = "",
}) => {

    return (
        <span
            className={clsx(
                "inline-flex items-center gap-1 font-medium",
                rounded ? "rounded-full" : "rounded-lg",
                variants[variant],
                sizes[size],
                className
            )}
        >
            {icon && icon}

            {children}
        </span>
    );

};

export default Badge;