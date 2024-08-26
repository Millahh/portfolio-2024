import { useRef, useEffect } from 'react'

function AnimCursor() {
    const cursor = useRef();
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            const x = e.clientX;
            const y = e.clientY;

            cursor.current.style.left = x + "px";
            cursor.current.style.top = y + "px";
        });
    }, []);
    return (
        <>
            <div ref={cursor} className='cursor z-50'></div>
        </>
    )
}

export default AnimCursor