import logo from '../../assets/img/logo.svg';
import './styles.css';

function NotificationButton() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/dev.armando"> @dev.armando</a>
                </p>
            </div>
        </header>
    )
}

export default NotificationButton;
