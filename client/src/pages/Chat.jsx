import { useEffect, useState } from "react";

import ChatSidebar from "../components/chat/ChatSidebar.jsx";
import ChatWindow from "../components/chat/ChatWindow.jsx";

import {
    createChat,
    deleteChat,
    getChatById,
    getChats,
    sendMessage,
    renameChat
} from "../services/chat.api.js";

const Chat = () => {

    const [chats, setChats] = useState([]);

    const [selectedChat, setSelectedChat] =
        useState(null);

    const [messages, setMessages] = useState([]);

    const [loading, setLoading] =
        useState(true);

    const [sending, setSending] =
        useState(false);

    /*
    ===============================
    Load Chats
    ===============================
    */

    const fetchChats = async () => {

        try {

            setLoading(true);

            const data = await getChats();

            setChats(data);

            if (data.length > 0) {

                await handleSelectChat(
                    data[0]._id
                );

            }

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    /*
    ===============================
    Select Chat
    ===============================
    */

    const handleSelectChat = async (
        chatId
    ) => {

        try {

            const data =
                await getChatById(chatId);

            setSelectedChat(data.chat);

            setMessages(data.messages);

        } catch (error) {

            console.error(error);

        }

    };

    /*
    ===============================
    New Chat
    ===============================
    */

    const handleNewChat = async () => {

        try {

            const chat =
                await createChat();

            setChats((prev) => [

                chat,

                ...prev,

            ]);

            setSelectedChat(chat);

            setMessages([]);

        } catch (error) {

            console.error(error);

        }

    };

    /*
    ===============================
    Send Message
    ===============================
    */

    const handleSendMessage = async (
        content
    ) => {

        if (!selectedChat) return;

        try {

            setSending(true);

            const response =
                await sendMessage(

                    selectedChat._id,

                    content

                );

            setMessages((prev) => [

                ...prev,

                response.userMessage,

                response.assistantMessage,

            ]);

            setChats((prev) =>

                prev.map((chat) =>

                    chat._id ===
                        selectedChat._id

                        ? {

                            ...chat,

                            lastMessage:
                                response.assistantMessage.content,

                        }

                        : chat

                )

            );

        } catch (error) {

            console.error(error);

        } finally {

            setSending(false);

        }

    };

    /*
    ===============================
    Delete Chat
    ===============================
    */

    const handleDeleteChat =
        async (chatId) => {

            try {

                await deleteChat(chatId);

                const updatedChats =
                    chats.filter(

                        (chat) =>
                            chat._id !== chatId

                    );

                setChats(updatedChats);

                if (

                    selectedChat?._id ===
                    chatId

                ) {

                    if (
                        updatedChats.length
                    ) {

                        handleSelectChat(

                            updatedChats[0]._id

                        );

                    } else {

                        setSelectedChat(null);

                        setMessages([]);

                    }

                }

            } catch (error) {

                console.error(error);

            }

        };

    useEffect(() => {

        fetchChats();

    }, []);

    // Rename Chat
    const handleRenameChat = async (chatId, title) => {

        try {

            const updated = await renameChat(chatId, title);

            setChats((prev) =>

                prev.map((chat) =>

                    chat._id === chatId

                        ? updated

                        : chat

                )

            );

            if (selectedChat?._id === chatId) {

                setSelectedChat(updated);

            }

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <div
            className="
                flex
                h-[calc(100vh-96px)]
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
            "
        >

            <ChatSidebar

                chats={chats}

                loading={loading}

                selectedChat={selectedChat}

                onSelectChat={handleSelectChat}

                onNewChat={handleNewChat}

                onDeleteChat={handleDeleteChat}

                onRenameChat={handleRenameChat}

            />

            <ChatWindow

                chat={selectedChat}

                messages={messages}

                loading={loading}

                sending={sending}

                onSend={handleSendMessage}
            />

        </div>

    );

};

export default Chat;