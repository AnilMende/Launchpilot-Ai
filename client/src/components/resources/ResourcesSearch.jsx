import { Search } from "lucide-react";
import { Input } from "../ui";

const ResourcesSearch = ({ value, onChange }) => {

    return (

        <Input
            placeholder="Search resources..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            leftIcon={Search}
        />

    );

};

export default ResourcesSearch;