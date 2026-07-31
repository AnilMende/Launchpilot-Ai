
const ChatSkeleton = () => {

    return (

        <div
            className="
                flex
                h-full
                flex-col
                gap-6
                animate-pulse
                p-6
            "
        >

            {[1,2,3,4].map((item) => (

                <div
                    key={item}
                    className={
                        item % 2 === 0
                            ? "flex justify-end"
                            : "flex justify-start"
                    }
                >

                    <div
                        className="
                            h-24
                            w-96
                            rounded-2xl
                            bg-slate-200
                        "
                    />

                </div>

            ))}

        </div>

    );

};

export default ChatSkeleton;