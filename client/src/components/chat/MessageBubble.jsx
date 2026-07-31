import clsx from "clsx";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import SourcesCard from "./SourcesCard.jsx";

const MessageBubble = ({ message }) => {

    const isUser = message.role === "user";

    return (

        <div
            className={clsx(
                "flex w-full",
                isUser
                    ? "justify-end"
                    : "justify-start"
            )}
        >

            <div
                className={clsx(
                    "max-w-3xl rounded-2xl px-5 py-4 shadow-sm",
                    isUser
                        ? "bg-indigo-600 text-white"
                        : "border border-slate-200 bg-white text-slate-800"
                )}
            >

                {/* rendering assistant message content */}
                {message.role === "assistant" ? (

                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{

                            h1: ({ children }) => (
                                <h1 className="mb-3 text-2xl font-bold">
                                    {children}
                                </h1>
                            ),

                            h2: ({ children }) => (
                                <h2 className="mb-2 mt-5 text-xl font-semibold">
                                    {children}
                                </h2>
                            ),

                            h3: ({ children }) => (
                                <h3 className="mb-2 mt-4 text-lg font-semibold">
                                    {children}
                                </h3>
                            ),

                            p: ({ children }) => (
                                <p className="mb-4 leading-7">
                                    {children}
                                </p>
                            ),

                            ul: ({ children }) => (
                                <ul className="mb-4 list-disc pl-6">
                                    {children}
                                </ul>
                            ),

                            ol: ({ children }) => (
                                <ol className="mb-4 list-decimal pl-6">
                                    {children}
                                </ol>
                            ),

                            li: ({ children }) => (
                                <li className="mb-1">
                                    {children}
                                </li>
                            ),

                            strong: ({ children }) => (
                                <strong className="font-semibold">
                                    {children}
                                </strong>
                            ),

                            code: ({ children }) => (
                                <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-sm">
                                    {children}
                                </code>
                            ),

                            a: ({ href, children }) => (

                                <a

                                    href={href}

                                    target="_blank"

                                    rel="noopener noreferrer"

                                    className="text-indigo-600 underline"

                                >

                                    {children}

                                </a>

                            ),

                        }}
                    >

                        {message.content}

                    </ReactMarkdown>

                ) : (

                    <p>{message.content}</p>

                )}

                {!isUser &&
                    message.sources?.length > 0 && (

                        <div className="mt-5">

                            <SourcesCard
                                sources={message.sources}
                            />

                        </div>

                    )}

            </div>

        </div>

    );

};

export default MessageBubble;