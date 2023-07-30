import React, { useState, useRef } from "react"
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import { useOnClickOutside } from "../../../hooks";

const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    return (
        <>
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
        </>
    )
}

export default HamburgerMenu