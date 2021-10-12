import './Info.css';

type ButtonProps = {
    children: string,
    type?: 'default' | 'h1' | 'h2' | 'h3' | 'info' | 'btn-content'| 'correction',
    ownStyles?: string,
    align?: 'left' | 'right' | 'center',
}

const styleButton = {
    'default': "first-info",
    'h1': "second-info",
    'info': "thrid-info",
    'btn-content': 'thrid-info-header',
    'h2': 'fourth-info',
    'correction': 'sixth-info',
    'h3': 'seventh-info',
}

export const Info: React.FC<ButtonProps> = ({ align, children, type = 'default', ownStyles }: ButtonProps) => {
    const name = `${styleButton[type]} info-align-${align} ${ownStyles || ''}`.trim();
    return (
        <div className={name}>{children}</div>
    )
}
