import { Button, Info } from 'src/components/ui';

import './Footer.css';

export const Footer: React.FC = () => {

    return (
        <footer className="footer">
            <div className="left-part">
                <Button type="empty">
                    <Info>Support</Info>
                </Button>
                <div className="item">
                <Button type="empty">
                    <Info>Learning</Info>
                </Button>
                </div>
                <div className="item">
                <Button type="empty">
                    <Info>Русская версия</Info>
                </Button>
                </div>
            </div>
            <div className="right-part">
                <Info>© 2020 Your Name</Info>
            </div>
        </footer>
    )
}