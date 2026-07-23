import {
    LayoutDashboard,
    MessageSquare,
    BookOpen,
    Newspaper,
    Link,
    Shield,
} from "lucide-react";

export const navigation = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "AI Chat",
        path: "/chat",
        icon: MessageSquare,
    },
    {
        name: "Topics",
        path: "/topics",
        icon: BookOpen,
    },
    {
        name: "Articles",
        path: "/articles",
        icon: Newspaper,
    },
    {
        name: "Resources",
        path: "/resources",
        icon: Link,
    },
    {
        name: "Admin",
        path: "/admin",
        icon: Shield,
    },
];