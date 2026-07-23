import { useEffect } from "react";
import { X } from "lucide-react";
import clsx from "clsx";

const Modal = ({
    isOpen,
    onClose,
    title,
    description,
    children,
    footer,
    size = "md",
    closeOnOverlay = true,
}) => {

    useEffect(() => {

        if (!isOpen) return;

        const handleKeyDown = (event) => {

            if (event.key === "Escape") {
                onClose();
            }

        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };

    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const sizes = {
        sm: "max-w-md",
        md: "max-w-lg",
        lg: "max-w-2xl",
        xl: "max-w-4xl",
    };

    return (

        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={() => {
                if (closeOnOverlay) {
                    onClose();
                }
            }}
        >

            <div
                onClick={(e) => e.stopPropagation()}
                className={clsx(
                    "w-full rounded-2xl bg-white shadow-xl",
                    "max-h-[90vh] overflow-hidden",
                    sizes[size]
                )}
            >

                <div className="flex items-start justify-between border-b px-6 py-4">

                    <div>

                        {title && (
                            <h2 className="text-xl font-semibold text-slate-900">
                                {title}
                            </h2>
                        )}

                        {description && (
                            <p className="mt-1 text-sm text-slate-500">
                                {description}
                            </p>
                        )}

                    </div>

                    <button
                        onClick={onClose}
                        className="rounded-lg p-2 transition hover:bg-slate-100"
                    >
                        <X size={20} />
                    </button>

                </div>

                <div className="max-h-[60vh] overflow-y-auto p-6">

                    {children}

                </div>

                {footer && (

                    <div className="border-t px-6 py-4">

                        {footer}

                    </div>

                )}

            </div>

        </div>

    );

};

export default Modal;