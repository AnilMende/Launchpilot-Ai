import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "../ui";

const PasswordInput = ({
    label,
    error,
    ...props
}) => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="space-y-2">

            {label && (
                <label className="block text-sm font-medium text-slate-700">
                    {label}
                </label>
            )}

            <div className="relative">

                <Input
                    {...props}
                    type={showPassword ? "text" : "password"}
                    className="pr-12"
                />

                <button
                    type="button"
                    onClick={() => setShowPassword(prev => !prev)}
                    className="absolute inset-y-0 right-3 flex items-center text-slate-500 transition hover:text-slate-700"
                    aria-label={
                        showPassword
                            ? "Hide password"
                            : "Show password"
                    }
                >
                    {showPassword ? (
                        <EyeOff size={18} />
                    ) : (
                        <Eye size={18} />
                    )}
                </button>

            </div>

            {error && (
                <p className="text-sm text-red-600">
                    {error}
                </p>
            )}

        </div>
    );

};

export default PasswordInput;