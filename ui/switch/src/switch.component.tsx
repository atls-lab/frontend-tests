import React, {useRef} from 'react'
import {Handle} from "./handle";
import {Thumb} from "./thumb";
import {SwitchProps} from "./switch.interfaces";
import {useSwitch} from "@ui/utils";

export const Switch: React.FC<SwitchProps> = ({ disabled, checked: defaultValue, onChange }) => {
    const node = useRef<HTMLButtonElement>(null)

    const [checked, setChecked] = useSwitch(node, defaultValue, disabled, onChange)

    return (
        <Handle ref={node} onClick={setChecked}>
            <Thumb disabled={disabled} checked={checked} />
        </Handle>
    )
}