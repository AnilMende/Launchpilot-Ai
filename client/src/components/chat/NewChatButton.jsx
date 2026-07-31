import { Plus } from "lucide-react";

import { Button } from "../ui";

const NewChatButton = ({ onClick }) => {

    return (

        <Button
            onClick={onClick}
            className="w-full justify-center"
        >

            <Plus size={18} />

            <span className="ml-2">

                New Chat

            </span>

        </Button>

    );

};

export default NewChatButton;