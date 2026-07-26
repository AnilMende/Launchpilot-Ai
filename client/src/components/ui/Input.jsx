import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import clsx from "clsx";

const Input = ({
    label,
    error,
    helperText,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    type = "text",
    required = false,
    className = "",
    ...props
}) => {

    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";

    return (
        <div className="w-full">

            {/* Label */}
            {label && (
                <label className="mb-2 block text-sm font-medium text-slate-700">
                    {label}
                    {required && (
                        <span className="ml-1 text-red-500">*</span>
                    )}
                </label>
            )}

            <div className="relative">

                {/* Left Icon */}
                {LeftIcon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                        <LeftIcon size={18} />
                    </div>
                )}

                {/* Input */}
                <input
                    type={
                        isPassword
                            ? (showPassword ? "text" : "password")
                            : type
                    }
                    className={clsx(
                        "w-full rounded-xl border bg-white py-2.5 transition",
                        "focus:outline-none focus:ring-2 focus:ring-indigo-500",
                        "disabled:cursor-not-allowed disabled:bg-slate-100",

                        LeftIcon ? "pl-10" : "pl-4",
                        (isPassword || RightIcon) ? "pr-10" : "pr-4",

                        error
                            ? "border-red-500"
                            : "border-slate-300",

                        className
                    )}
                    {...props}
                />

                {/* Password Toggle */}
                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                    >
                        {showPassword ? (
                            <EyeOff size={18} />
                        ) : (
                            <Eye size={18} />
                        )}
                    </button>
                )}

                {/* Right Icon */}
                {!isPassword && RightIcon && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                        <RightIcon size={18} />
                    </div>
                )}

            </div>

            {/* Helper/Error Text */}
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

export default Input;