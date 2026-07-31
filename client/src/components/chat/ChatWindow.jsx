import { useEffect, useRef } from "react";

import ChatEmptyState from "./ChatEmptyState.jsx";
import ChatSkeleton from "./ChatSkeleton.jsx";
import MessageBubble from "./MessageBubble.jsx";
import MessageInput from "./MessageInput.jsx";
import TypingIndicator from "./TypingIndicator.jsx";

const ChatWindow = ({
    chat,
    messages,
    loading,
    sending,
    onSend,
}) => {

    const bottomRef = useRef(null);

    useEffect(() => {

        bottomRef.current?.scrollIntoView({

            behavior: "smooth",

        });

    }, [messages, sending]);

    if (loading) {

        return (

            <main className="flex flex-1">

                <ChatSkeleton />

            </main>

        );

    }

    if (!chat) {

        return (

            <main className="flex flex-1">

                <ChatEmptyState />

            </main>

        );

    }

    return (

        <main
            className="
                flex
                flex-1
                flex-col
                bg-white
            "
        >

            <div
                className="
                    border-b
                    border-slate-200
                    px-6
                    py-5
                "
            >

                <h2
                    className="
                        text-lg
                        font-semibold
                        text-slate-900
                    "
                >

                    {chat.title}

                </h2>

            </div>

            <div
                className="
                    flex-1
                    space-y-5
                    overflow-y-auto
                    px-6
                    py-6
                "
            >

                {messages.map((message) => (

                    <MessageBubble

                        key={message._id}

                        message={message}

                    />

                ))}

                {sending && (

                    <TypingIndicator />

                )}

                <div ref={bottomRef} />

            </div>

            <MessageInput

                loading={sending}

                onSend={onSend}

            />

        </main>

    );

};

export default ChatWindow;