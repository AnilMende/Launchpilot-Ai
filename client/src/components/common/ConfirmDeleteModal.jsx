import { AlertTriangle } from "lucide-react";

const ConfirmDeleteModal = ({
    open,
    title = "Delete Item",
    message = "Are you sure you want to delete this item?",
    loading = false,
    onClose,
    onConfirm,
}) => {

    if (!open) return null;

    return (

        <div
            className="
                fixed
                inset-0
                z-50
                flex
                items-center
                justify-center
                bg-black/50
                p-4
            "
        >

            <div
                className="
                    w-full
                    max-w-md
                    rounded-2xl
                    bg-white
                    p-6
                    shadow-xl
                "
            >

                <div className="flex items-start gap-4">

                    <div
                        className="
                            rounded-full
                            bg-red-100
                            p-3
                        "
                    >

                        <AlertTriangle
                            size={24}
                            className="text-red-600"
                        />

                    </div>

                    <div>

                        <h2 className="text-xl font-semibold">

                            {title}

                        </h2>

                        <p className="mt-2 text-sm text-slate-600">

                            {message}

                        </p>

                    </div>

                </div>

                <div
                    className="
                        mt-8
                        flex
                        justify-end
                        gap-3
                    "
                >

                    <button

                        type="button"

                        onClick={onClose}

                        disabled={loading}

                        className="
                            rounded-lg
                            border
                            border-slate-300
                            px-4
                            py-2
                            font-medium
                            hover:bg-slate-50
                        "

                    >

                        Cancel

                    </button>

                    <button

                        type="button"

                        onClick={onConfirm}

                        disabled={loading}

                        className="
                            rounded-lg
                            bg-red-600
                            px-4
                            py-2
                            font-medium
                            text-white
                            hover:bg-red-700
                            disabled:opacity-50
                        "

                    >

                        {loading
                            ? "Deleting..."
                            : "Delete"}

                    </button>

                </div>

            </div>

        </div>

    );

};

export default ConfirmDeleteModal;