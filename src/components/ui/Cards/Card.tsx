import { OptsType } from 'src/types/types';
import './Card.css';

type CardProps = {
    type?: 'default',
    ownStyles?: string,
    option?: OptsType,
}

const styleCard = {
    'default': "first-card",
}

export const Card: React.FC<CardProps> = ({ type = 'default', ownStyles, option }: CardProps) => {
    const className = `${styleCard[type]} ${ownStyles || ''}`.trim();

    const {
        name = '',
        command = '',
        mainBranch = '',
        time = '',
    } = (option || {});

    return (
        <div className={className}>{`${name} ${command} ${mainBranch} ${time}`}</div>
    )
}
