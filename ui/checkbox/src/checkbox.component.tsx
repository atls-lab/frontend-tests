import React, {forwardRef, useState} from 'react'
import {CheckboxProps} from "./checkbox.interfaces";

import {checkBaseStyles, checkCheckedStyles} from "./check";
import {containerBaseStyles, containerPositionStyles} from "./container";
import {hiddenInputStyles} from "./hidden-input";
import {boxBaseStyles, boxShapeStyles} from "./box";
import {labelAppearanceStyles, labelPositionStyles, labelShapeStyles} from "./label";
import {boxColorStyles} from "./box/appearance";


const CheckboxWithoutRef: React.ForwardRefRenderFunction<HTMLDivElement, CheckboxProps> = (
    { onCheck, children, active, labelPosition = 'end', size = 'medium', color = 'blue', icon, ...props },
    ref
) => {
    const [isChecked, setIsChecked] = useState(active);

    const handleCheck = () => {
        setIsChecked(!isChecked);
        onCheck(!isChecked);
    };

    const checkStyle = isChecked ? checkCheckedStyles : '';

    return (
        <div
            className={`${containerBaseStyles} ${containerPositionStyles[labelPosition]}`}
            onClick={handleCheck}
            ref={ref}
            {...props}
        >
            <input className={hiddenInputStyles} checked={isChecked} type="checkbox" onChange={() => handleCheck()}/>
            <div
                className={`${boxBaseStyles} ${boxShapeStyles[size]} ${boxColorStyles[color]}`}
            >
                <div className={`${checkBaseStyles} ${checkStyle}`}>
                    {icon}
                </div>
            </div>
            <div className={`${labelShapeStyles} ${labelAppearanceStyles} ${labelPositionStyles[labelPosition]}`}>
                {children}
            </div>
        </div>
    );
};

export const Checkbox = forwardRef(CheckboxWithoutRef);

