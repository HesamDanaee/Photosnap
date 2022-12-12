import { useState } from "react";

export default function useActive() {
    const [active, setActive] = useState(false);
    const handleActive = () => setActive(!active);
    return {active,handleActive}
}