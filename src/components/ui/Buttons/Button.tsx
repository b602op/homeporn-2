import { ReactNode } from 'react';
import './Button.css';

type ButtonProps = {
    children: string | ReactNode | ReactNode[],
    onClick?: (value?: any) => void,
    type?: 'default' | 'empty' | 'unimportant',
    ownStyles?: string;
}

const styleButton = {
    'default': "first-btn",
    'empty': "second-btn",
    'unimportant': 'thrid-btn',
}

export const Button: React.FC<ButtonProps> = ({ ownStyles, children, onClick, type = 'default' }: ButtonProps) => {
    const handleClick = (e: any) => {
        e.preventDefault();
        if (onClick) onClick();
    }

    return (
        <button onClick={handleClick} className={`${styleButton[type]} ${ownStyles || ''}`.trim()}>{children}</button>
    )
}
