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
    const className = `card ${styleCard[type]} ${ownStyles || ''}`.trim();

    const {
        name = '',
        command = '',
        mainBranch = '',
        time = '',
    } = (option || {});

    return (
        <div className={className}>
            <div className="card part-left">
                <div className="command">{command}</div>
                <div className="extra">
                    <div className="mainBranch">{mainBranch}</div>
                    <div className="name">{name}</div>
                </div>
            </div>
            <div className="card part-right">
                <div className="time">{time}</div>
            </div>
        </div>
    )
}
