/* eslint-disable react/prop-types */
const Title = (props) => {
    return (
        <>
            <h2 className="text-primary font-bold inline">{props.children}</h2>
        </>
    )
}

export default Title;