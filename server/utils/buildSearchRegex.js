
const buildSearchRegex = (query) => {

    return query

        .toLowerCase()

        // Remove punctuation
        .replace(/[^\w\s]/g, "")

        // Split into words
        .split(/\s+/)

        // Remove common words and very short words
        .filter(word =>
            word.length > 2 &&
            ![
                "how",
                "what",
                "where",
                "when",
                "why",
                "who",
                "can",
                "could",
                "would",
                "should",
                "the",
                "and",
                "for",
                "with",
                "about",
                "into",
                "from",
                "this",
                "that",
                "your",
                "their",
                "our"
            ].includes(word)
        )

        // Convert to OR regex
        .join("|");

};

export { buildSearchRegex };