import Typewriter from 'typewriter-effect';

const TextChange = ({data}) => {
    return (
        <span className="transition ease duration-300">
            <Typewriter
                options={{
                    strings: data,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 70,
                    delay: 95,
                }}
            />
        </span>
    );
};

export default TextChange;