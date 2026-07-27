import clsx from "clsx";

const colorVariants = {
    indigo: {
        bg: "bg-indigo-50",
        icon: "bg-indigo-100 text-indigo-600",
        text: "text-indigo-600",
    },
    emerald: {
        bg: "bg-emerald-50",
        icon: "bg-emerald-100 text-emerald-600",
        text: "text-emerald-600",
    },
    amber: {
        bg: "bg-amber-50",
        icon: "bg-amber-100 text-amber-600",
        text: "text-amber-600",
    },
    rose: {
        bg: "bg-rose-50",
        icon: "bg-rose-100 text-rose-600",
        text: "text-rose-600",
    },
    sky: {
        bg: "bg-sky-50",
        icon: "bg-sky-100 text-sky-600",
        text: "text-sky-600",
    },
};

const StatCard = ({
    title,
    value,
    icon: Icon,
    color = "indigo",
    change,
}) => {

    const styles = colorVariants[color] || colorVariants.indigo;

    return (

        <div
            className={clsx(
                "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300",
                "hover:-translate-y-1 hover:shadow-lg"
            )}
        >

            <div className="flex items-start justify-between">

                <div>

                    <p className="text-sm font-medium text-slate-500">
                        {title}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-slate-900">
                        {value}
                    </h2>

                    {change && (
                        <p
                            className={clsx(
                                "mt-3 text-sm font-medium",
                                styles.text
                            )}
                        >
                            {change}
                        </p>
                    )}

                </div>

                <div
                    className={clsx(
                        "flex h-14 w-14 items-center justify-center rounded-2xl",
                        styles.icon
                    )}
                >

                    {Icon && <Icon size={28} />}

                </div>

            </div>

        </div>

    );

};

export default StatCard;