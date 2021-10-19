import { Info, Button } from 'src/components/ui'
import gears from 'src/static/gears.svg'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import './Header.css'

type HeaderProps = {
    isSetting?: boolean,
    leftInfo?: string,
}

export const Header: React.FC<HeaderProps> = ({ leftInfo, isSetting = true }: HeaderProps) => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/settings')
    }

    return (
        <div className="header-container">
            <div className="header-left">
                <Link to="/" className="link-router">
                    <Info type="h1">{leftInfo || 'School CI Server'}</Info>
                </Link>
            </div>
            <div className="header-right">
            {isSetting ? (
                <Button type="unimportant" onClick={handleClick}>
                    <div className="header-img-container">
                        <img src={gears} alt="Settings" />
                    </div>
                    <Info type="btn-content">Settings</Info>
                </Button>
            ) : null}
            </div>
        </div>
    )
}