import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import clsx from "clsx";

const colorVariants = {
    indigo: {
        bg: "bg-indigo-50",
        icon: "bg-indigo-100 text-indigo-600",
        hover: "group-hover:bg-indigo-600 group-hover:text-white",
    },
    emerald: {
        bg: "bg-emerald-50",
        icon: "bg-emerald-100 text-emerald-600",
        hover: "group-hover:bg-emerald-600 group-hover:text-white",
    },
    amber: {
        bg: "bg-amber-50",
        icon: "bg-amber-100 text-amber-600",
        hover: "group-hover:bg-amber-600 group-hover:text-white",
    },
    rose: {
        bg: "bg-rose-50",
        icon: "bg-rose-100 text-rose-600",
        hover: "group-hover:bg-rose-600 group-hover:text-white",
    },
};

const QuickActionCard = ({
    title,
    description,
    icon: Icon,
    to,
    color = "indigo",
}) => {

    const styles = colorVariants[color] || colorVariants.indigo;

    return (

        <Link
            to={to}
            className="
                group
                block
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-indigo-200
                hover:shadow-lg
            "
        >

            <div className="flex items-start justify-between">

                <div
                    className={clsx(
                        "flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300",
                        styles.icon,
                        styles.hover
                    )}
                >

                    <Icon size={28} />

                </div>

                <ArrowRight
                    size={18}
                    className="
                        text-slate-400
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-indigo-600
                    "
                />

            </div>

            <div className="mt-6">

                <h3 className="text-lg font-semibold text-slate-900">

                    {title}

                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">

                    {description}

                </p>

            </div>

        </Link>

    );

};

export default QuickActionCard;