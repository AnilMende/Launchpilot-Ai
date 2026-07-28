import { MessageSquare, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


const RecentChats = ({ chats }) => {

    return (

        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">

            {/* Header */}

            <div className="flex items-center justify-between border-b border-slate-100 p-6">

                <div>

                    <h2 className="text-lg font-semibold text-slate-900">
                        Recent AI Chats
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Continue your latest conversations.
                    </p>

                </div>

                <Link
                    to="/chat"
                    className="flex items-center gap-1 text-sm font-medium text-indigo-600 transition hover:text-indigo-700"
                >
                    View All

                    <ArrowRight size={16} />

                </Link>

            </div>

            {/* Chat List */}

            <div>

                {chats.map((chat) => (

                    <Link
                        key={chat.id}
                        to="/chat"
                        className="
                            flex
                            items-start
                            gap-4
                            border-b
                            border-slate-100
                            p-5
                            transition-all
                            duration-200
                            hover:bg-slate-50
                            last:border-none
                        "
                    >

                        <div
                            className="
                                flex
                                h-11
                                w-11
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-indigo-100
                                text-indigo-600
                            "
                        >

                            <MessageSquare size={20} />

                        </div>

                        <div className="min-w-0 flex-1">

                            <div className="flex items-center justify-between">

                                <h3 className="truncate font-medium text-slate-900">

                                    {chat.title}

                                </h3>

                                <span className="ml-4 whitespace-nowrap text-xs text-slate-500">

                                    {chat.time}

                                </span>

                            </div>

                            <p className="mt-1 line-clamp-2 text-sm text-slate-500">

                                {chat.preview}

                            </p>

                        </div>

                    </Link>

                ))}

            </div>

        </section>

    );

};

export default RecentChats;