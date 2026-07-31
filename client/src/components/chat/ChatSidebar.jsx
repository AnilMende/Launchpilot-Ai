import {
    MessageSquare,
    Trash2,
    Pencil
} from "lucide-react";

import NewChatButton from "./NewChatButton.jsx";
import { useState } from "react";

const ChatSidebar = ({
    chats,
    loading,
    selectedChat,
    onSelectChat,
    onNewChat,
    onDeleteChat,
    onRenameChat
}) => {


    const [editingChat, setEditingChat] = useState(null);

    const [title, setTitle] = useState("");

    // Handle Rename
    const handleRename = async ( chatId, title ) => {

        await onRenameChat( chatId, title );

        setEditingChat(null);

    };

    return (

        <aside
            className="
                flex
                w-80
                flex-col
                border-r
                border-slate-200
                bg-slate-50
            "
        >

            <div className="p-5">

                <NewChatButton
                    onClick={onNewChat}
                />

            </div>

            <div className="flex-1 overflow-y-auto">

                {loading ? (

                    <div className="p-5 text-sm text-slate-500">

                        Loading chats...

                    </div>

                ) : chats.length === 0 ? (

                    <div className="p-5 text-sm text-slate-500">

                        No conversations yet.

                    </div>

                ) : (

                    chats.map((chat) => (

                        <div

                            key={chat._id}

                            onClick={() =>
                                onSelectChat(chat._id)
                            }

                            className={`
                                cursor-pointer
                                border-b
                                border-slate-200
                                px-5
                                py-4
                                transition
                                hover:bg-white
                                ${selectedChat?._id ===
                                    chat._id
                                    ? "bg-white"
                                    : ""
                                }
                            `}

                        >

                            <div className="flex items-start justify-between">

                                <div className="flex gap-3">

                                    <MessageSquare
                                        size={18}
                                        className="mt-1 text-indigo-600"
                                    />

                                    <div>

                                        {editingChat === chat._id ? (

                                            <input

                                                value={title}

                                                onChange={(e) =>
                                                    setTitle(e.target.value)
                                                }

                                                onBlur={() =>

                                                    handleRename(

                                                        chat._id,

                                                        title

                                                    )

                                                }

                                                onKeyDown={(e) => {

                                                    if (e.key === "Enter") {

                                                        handleRename(

                                                            chat._id,

                                                            title

                                                        );

                                                    }

                                                }}

                                                autoFocus

                                                className="w-full rounded-lg border px-2 py-1 text-sm"

                                            />

                                        ) : (

                                            <h3 className="font-medium">

                                                {chat.title}

                                            </h3>

                                        )}

                                        <p
                                            className="mt-1 line-clamp-2 text-xs text-slate-500"
                                        >

                                            {chat.lastMessage ||
                                                "No messages"}

                                        </p>

                                    </div>

                                </div>

                                {/* chat delete button */}
                                <button

                                    onClick={(e) => {

                                        e.stopPropagation();

                                        onDeleteChat(chat._id);

                                    }}

                                    className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600"

                                >

                                    <Trash2 size={16} />

                                </button>

                                {/* Chat Edit or Rename button */}
                                <button

                                    onClick={(e) => {

                                        e.stopPropagation();

                                        setEditingChat(chat._id);

                                        setTitle(chat.title);

                                    }}

                                >

                                    <Pencil size={16} />

                                </button>

                            </div>

                        </div>

                    ))

                )}

            </div>

        </aside>

    );

};

export default ChatSidebar;