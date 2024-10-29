const PagesBanner = ({ title }) => {
    return (
        <div>
            {/* MOBILE */}
            <div className="w-full aspect-[4/2.8] md:hidden bg-pageBannerBGC rounded-[3.5rem] relative">
                <span className="flex flex-col justify-center items-center gap-2"></span>
                <span className="text-3xl">{title}</span>
                <img
                    className="w-[90%] absolute  top-[24rem] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
                    src="/images/lists/shop1.webp"
                    alt="shop"
                />
            </div>
        </div>
    );
};

export default PagesBanner;
