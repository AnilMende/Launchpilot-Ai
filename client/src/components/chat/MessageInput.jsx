import { useState } from "react";
import { SendHorizontal } from "lucide-react";

const MessageInput = ({ onSend, loading }) => {

    const [message, setMessage] = useState("");

    const handleSubmit = () => {

        if (!message.trim()) return;

        onSend(message);

        setMessage("");

    };

    return (

        <div
            className="
                border-t
                border-slate-200
                bg-white
                p-5
            "
        >

            <div
                className="
                    flex
                    items-end
                    gap-4
                    rounded-2xl
                    border
                    border-slate-300
                    bg-slate-50
                    px-4
                    py-3
                "
            >

                <textarea
                    rows={1}
                    value={message}
                    placeholder="Ask LaunchPilot AI anything..."
                    onChange={(e) =>
                        setMessage(e.target.value)
                    }
                    onKeyDown={(e) => {

                        if (
                            e.key === "Enter" &&
                            !e.shiftKey
                        ) {

                            e.preventDefault();

                            handleSubmit();

                        }

                    }}
                    className="
                        flex-1
                        resize-none
                        bg-transparent
                        outline-none
                    "
                />

                <button
                    disabled={
                        loading ||
                        !message.trim()
                    }
                    onClick={handleSubmit}
                    className="
                        rounded-xl
                        bg-indigo-600
                        p-3
                        text-white
                        transition
                        hover:bg-indigo-700
                        disabled:cursor-not-allowed
                        disabled:bg-slate-300
                    "
                >

                    <SendHorizontal size={18} />

                </button>

            </div>

        </div>

    );

};

export default MessageInput;