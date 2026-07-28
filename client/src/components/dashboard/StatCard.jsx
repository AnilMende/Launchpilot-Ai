import clsx from "clsx";

const StatCard = ({
    title,
    value,
    icon: Icon,
    color,
}) => {

    return (

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-sm text-slate-500">

                        {title}

                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-slate-900">

                        {value}

                    </h3>

                </div>

                <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${color}`}
                >

                    <Icon
                        size={22}
                        className="text-white"
                    />

                </div>

            </div>

        </div>

    );

};

export default StatCard;