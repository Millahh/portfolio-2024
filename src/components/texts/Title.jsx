/* eslint-disable react/prop-types */
const Title = (props) => {
    return (
        <>
            <p className="text-primary font-bold inline">{props.children}</p>
        </>
    )
}

export default Title;