

export const getDashboardSummaryService = async (user) => {

    return {
        userName: user.name,

        stats: {
            chats: 12,
            topics: 24,
            articles: 48,
            resources: 15,
        },
    };
};

export const getAIUsageService = async () => {

    return {
        todayChats: 12,
        tokensUsed: 18240,
        monthlyLimit: 100000,
    };

};

export const getRecentChatsService = async () => {

    return [
        {
            id: 1,
            title: "Company Registration",
            preview: "Learned about registering a private limited company.",
            time: "Today",
        },
        {
            id: 2,
            title: "Startup Funding",
            preview: "Explored angel investors and seed funding options.",
            time: "Yesterday",
        },
        {
            id: 3,
            title: "GST Registration",
            preview: "Discussed GST applicability.",
            time: "2 days ago",
        },
        {
            id: 4,
            title: "Hiring Employees",
            preview: "Compared full-time employees with freelancers.",
            time: "Last week",
        },
    ];

};

export const getPopularTopicsService = async () => {

    return [
        {
            id: 1,
            title: "Company Registration",
            articles: 14,
        },
        {
            id: 2,
            title: "Startup Funding",
            articles: 11,
        },
        {
            id: 3,
            title: "Legal Compliance",
            articles: 9,
        },
        {
            id: 4,
            title: "Hiring & HR",
            articles: 8,
        },
        {
            id: 5,
            title: "Branding & Marketing",
            articles: 15,
        },
    ];

};