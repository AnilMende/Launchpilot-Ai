
const TypingIndicator = () => {

    return (

        <div className="flex justify-start">

            <div
                className="
                    flex
                    items-center
                    gap-2
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    px-5
                    py-4
                "
            >

                <span
                    className="
                        h-2
                        w-2
                        animate-bounce
                        rounded-full
                        bg-slate-400
                    "
                />

                <span
                    className="
                        h-2
                        w-2
                        animate-bounce
                        rounded-full
                        bg-slate-400
                        [animation-delay:0.15s]
                    "
                />

                <span
                    className="
                        h-2
                        w-2
                        animate-bounce
                        rounded-full
                        bg-slate-400
                        [animation-delay:0.3s]
                    "
                />

            </div>

        </div>

    );

};

export default TypingIndicator;