import { Bot } from "lucide-react";

const ChatEmptyState = () => {

    return (

        <div
            className="
                flex
                flex-1
                flex-col
                items-center
                justify-center
                px-8
                text-center
            "
        >

            <div
                className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-indigo-100
                "
            >

                <Bot
                    size={40}
                    className="text-indigo-600"
                />

            </div>

            <h2
                className="
                    mt-6
                    text-3xl
                    font-bold
                    text-slate-900
                "
            >

                Welcome to LaunchPilot AI

            </h2>

            <p
                className="
                    mt-3
                    max-w-xl
                    text-slate-500
                    leading-7
                "
            >

                Ask questions about registration,
                funding, branding, taxation,
                hiring, legal compliance,
                AI tools, or startup growth.

            </p>

        </div>

    );

};

export default ChatEmptyState;