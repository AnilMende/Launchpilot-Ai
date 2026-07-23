import clsx from "clsx";

const Card = ({
    children,
    title,
    description,
    header,
    footer,
    hover = false,
    padding = true,
    onClick,
    className = "",
}) => {

    return (
        <div
            onClick={onClick}
            className={clsx(
                "rounded-2xl border border-slate-200 bg-white shadow-sm",
                "transition-all duration-200",

                hover &&
                    "hover:-translate-y-1 hover:shadow-lg",

                onClick &&
                    "cursor-pointer",

                className
            )}
        >

            {header}

            {(title || description) && (
                <div className="border-b border-slate-100 px-6 py-4">

                    {title && (
                        <h3 className="text-lg font-semibold text-slate-900">
                            {title}
                        </h3>
                    )}

                    {description && (
                        <p className="mt-1 text-sm text-slate-500">
                            {description}
                        </p>
                    )}

                </div>
            )}

            <div
                className={clsx(
                    padding && "p-6"
                )}
            >
                {children}
            </div>

            {footer && (
                <div className="border-t border-slate-100 px-6 py-4">
                    {footer}
                </div>
            )}

        </div>
    );

};

export default Card;