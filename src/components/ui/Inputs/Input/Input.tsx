import { Info } from '../../Info/Info'

import './Input.css';

type InputProps = {
    children: string,
    type?: 'default',
    ownStyles?: string,
    onChange?: (value: string) => void,
    important?: boolean,
    placeholder?: string,
    value?: string
}

const styleInput = {
    'default': "first-input",
}

export const Input: React.FC<InputProps> = ({ value, placeholder, children, type='default', onChange, important }: InputProps) => {
    const handleChange = (e: any) => {
        e.preventDefault();

        if (onChange) onChange(e.target.value || '')
    }

    return (
        <div className="container-input">
            {children ? (
                <div className="container-input-name">
                    <Info type="h3">{children}</Info>
                </div>
            ): null}
            <input onChange={handleChange} value={value || ''} placeholder={placeholder} className={styleInput[type]} />
        </div>
    )
}
