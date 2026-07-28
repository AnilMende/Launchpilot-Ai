import { Bot, Zap } from "lucide-react";

const AIUsageCard = ({ usage }) => {

    // Mock Data
    const tokensUsed = usage?.tokensUsed ?? 0;
    const monthlyLimit = usage?.monthlyLimit ?? 0;
    const todayChats = usage?.todayChats ?? 0;

    const percentage = usage
        ? Math.round(
            (usage.tokensUsed / usage.monthlyLimit) * 100
        )
        : 0;

    return (

        <section
            className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
            "
        >

            {/* Header */}

            <div className="flex items-center justify-between">

                <div>

                    <h2 className="text-lg font-semibold text-slate-900">
                        AI Usage
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Your AI activity this month.
                    </p>

                </div>

                <div
                    className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        bg-indigo-100
                        text-indigo-600
                    "
                >

                    <Bot size={24} />

                </div>

            </div>

            {/* Usage */}

            <div className="mt-8 space-y-6">

                <div className="flex items-center justify-between">

                    <span className="text-sm text-slate-500">
                        Token Usage
                    </span>

                    <span className="font-semibold text-slate-900">
                        {tokensUsed.toLocaleString()} / {monthlyLimit.toLocaleString()}
                    </span>

                </div>

                {/* Progress */}

                <div className="h-3 overflow-hidden rounded-full bg-slate-200">

                    <div
                        className="h-full rounded-full bg-indigo-600 transition-all duration-500"
                        style={{
                            width: `${percentage}%`,
                        }}
                    />

                </div>

                <div className="flex justify-between text-sm">

                    <span className="text-slate-500">

                        {percentage}% Used

                    </span>

                    <span className="font-medium text-indigo-600">

                        {(monthlyLimit - tokensUsed).toLocaleString()} Remaining

                    </span>

                </div>

            </div>

            {/* Divider */}

            <div className="my-8 border-t border-slate-200" />

            {/* Today's Activity */}

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-sm text-slate-500">

                        AI Chats Today

                    </p>

                    <h3 className="mt-1 text-3xl font-bold text-slate-900">

                        {todayChats}

                    </h3>

                </div>

                <div
                    className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        bg-amber-100
                        text-amber-600
                    "
                >

                    <Zap size={22} />

                </div>

            </div>

        </section>

    );

};

export default AIUsageCard;