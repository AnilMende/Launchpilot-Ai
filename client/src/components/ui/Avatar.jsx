import { useMemo, useState } from "react";
import clsx from "clsx";

const sizes = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-14 w-14 text-lg",
};

const Avatar = ({
    src,
    alt = "User",
    name = "",
    size = "md",
    showStatus = false,
    status = "offline",
    className = "",
}) => {

    const [imageError, setImageError] = useState(false);

    const initials = useMemo(() => {

        if (!name) return "?";

        return name
            .trim()
            .split(" ")
            .slice(0, 2)
            .map(word => word[0]?.toUpperCase())
            .join("");

    }, [name]);

    return (

        <div className="relative inline-block">

            {src && !imageError ? (

                <img
                    src={src}
                    alt={alt}
                    onError={() => setImageError(true)}
                    className={clsx(
                        "rounded-full object-cover border border-slate-200",
                        sizes[size],
                        className
                    )}
                />

            ) : (

                <div
                    className={clsx(
                        "flex items-center justify-center rounded-full",
                        "bg-indigo-100 font-semibold text-indigo-700",
                        "border border-slate-200",
                        sizes[size],
                        className
                    )}
                >
                    {initials}
                </div>

            )}

            {showStatus && (
                <span
                    className={clsx(
                        "absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white",
                        status === "online"
                            ? "bg-green-500"
                            : "bg-slate-400"
                    )}
                />
            )}

        </div>

    );

};

export default Avatar;