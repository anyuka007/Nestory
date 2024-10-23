/* eslint-disable react/prop-types */
const Button = ({ text, width, height, fontSize }) => {
    return (
        <div
            className="flex justify-center items-center rounded-[22px]  bg-colorSecondary hover:bg-colorPrimary duration-300 ease-in-out cursor-pointer  text-white"
            style={{
                width: width,
                height: height || "44px",
                fontSize: fontSize || "14px",
            }}
        >
            {text}
        </div>
    );
};

export default Button;
