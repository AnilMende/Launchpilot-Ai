import clsx from "clsx";
import {
    CheckCircle,
    AlertCircle,
    AlertTriangle,
    Info,
    X,
} from "lucide-react";

const variants = {
    success: {
        container:
            "bg-green-50 border-green-200 text-green-800",
        icon: CheckCircle,
    },

    error: {
        container:
            "bg-red-50 border-red-200 text-red-800",
        icon: AlertCircle,
    },

    warning: {
        container:
            "bg-amber-50 border-amber-200 text-amber-800",
        icon: AlertTriangle,
    },

    info: {
        container:
            "bg-sky-50 border-sky-200 text-sky-800",
        icon: Info,
    },
};

const Alert = ({
    variant = "info",
    title,
    children,
    dismissible = false,
    onClose,
    className = "",
}) => {

    const Icon = variants[variant].icon;

    return (
        <div
            className={clsx(
                "flex gap-3 rounded-xl border p-4",
                variants[variant].container,
                className
            )}
        >
            <Icon className="mt-0.5 h-5 w-5 shrink-0" />

            <div className="flex-1">

                {title && (
                    <h4 className="font-semibold">
                        {title}
                    </h4>
                )}

                <div className="text-sm">
                    {children}
                </div>

            </div>

            {dismissible && (
                <button
                    onClick={onClose}
                    className="transition hover:opacity-70"
                >
                    <X size={18} />
                </button>
            )}
        </div>
    );
};

export default Alert;