import { FolderOpen } from "lucide-react";

const ResourceEmptyState = () => {

    return (

        <div
            className="
                flex
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-dashed
                border-slate-300
                bg-white
                px-6
                py-20
                text-center
            "
        >

            <FolderOpen
                size={60}
                className="text-slate-400"
            />

            <h2 className="mt-6 text-2xl font-semibold text-slate-900">

                No Resources Found

            </h2>

            <p className="mt-3 max-w-md text-slate-500">

                No resources match your current search or filter.
                Try changing the search term or selecting a different
                resource type.

            </p>

        </div>

    );

};

export default ResourceEmptyState;