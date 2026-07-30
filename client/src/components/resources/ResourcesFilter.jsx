const resourceTypes = [
    "all",
    "pdf",
    "website",
    "video",
    "tool",
    "template",
];

const ResourcesFilter = ({ value, onChange }) => {

    return (

        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="
                rounded-xl
                border
                border-slate-300
                bg-white
                px-4
                py-2.5
                text-sm
                focus:border-indigo-500
                focus:outline-none
            "
        >

            {resourceTypes.map((type) => (

                <option
                    key={type}
                    value={type}
                >

                    {type === "all"
                        ? "All Types"
                        : type.charAt(0).toUpperCase() + type.slice(1)}

                </option>

            ))}

        </select>

    );

};

export default ResourcesFilter;