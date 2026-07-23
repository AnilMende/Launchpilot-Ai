import clsx from "clsx";

const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-[3px]",
    lg: "h-8 w-8 border-4",
};

const Spinner = ({
    size = "md",
    className = "",
}) => {
    return (
        <div
            className={clsx(
                "inline-block animate-spin rounded-full",
                "border-current border-t-transparent",
                "text-indigo-600",
                sizes[size],
                className
            )}
        />
    );
};

export default Spinner;