/* eslint-disable react/prop-types */
const Button = ({ text, width }) => {
    return (
        <div
            className="flex justify-center items-center rounded-[22px] h-[44px] text-[15px] bg-colorSecondary hover:bg-colorPrimary cursor-pointer  text-white"
            style={{ width: width }}
        >
            {text}
        </div>
    );
};

export default Button;
