/* eslint-disable react/prop-types */
const Paragraph = (props) => {
    return (
        <>
            <p className="text-primary inline">{props.children} </p>
        </>
    )
}

export default Paragraph;