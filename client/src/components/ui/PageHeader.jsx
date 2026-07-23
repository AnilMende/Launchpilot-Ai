import clsx from "clsx";

const PageHeader = ({
    title,
    description,
    breadcrumb,
    actions,
    divider = true,
    className = "",
}) => {

    return (
        <div
            className={clsx(
                "flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
                divider && "border-b border-slate-200 pb-6",
                className
            )}
        >

            <div className="min-w-0">

                {breadcrumb && (
                    <div className="mb-2 text-sm text-slate-500">
                        {breadcrumb}
                    </div>
                )}

                <h1 className="text-3xl font-bold text-slate-900">
                    {title}
                </h1>

                {description && (
                    <p className="mt-2 max-w-2xl text-slate-600">
                        {description}
                    </p>
                )}

            </div>

            {actions && (
                <div className="flex flex-wrap items-center gap-3">
                    {actions}
                </div>
            )}

        </div>
    );

};

export default PageHeader;