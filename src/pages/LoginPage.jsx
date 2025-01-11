import { Link } from 'react-router-dom';
import Button from '../components/Button'; // Import Button component
import Field from '../components/Field'; // Import Field component

export default function LoginPage() {
    return (
        <div className="page-container LoginPage">
            <h2>ВХОД</h2>
            <div className="add-line-container">
                <div className="add-line"></div>
                <span>Через социальные сети</span>
                <div className="add-line"></div>
            </div>
            <Button buttonClass="VK" buttonText="Войти с VK ID"></Button>
            <div className="add-line-container">
                <div className="add-line"></div>
                <span>ИЛИ</span>
                <div className="add-line"></div>
            </div>
            <Field labelText="Логин"></Field>
            <Field fieldClass="password-field" labelText="Пароль"></Field>
            <Button buttonClass="enter-btn" buttonText="ВОЙТИ"></Button>
            <p className="forget-password">Забыли пароль?</p>
            <Link to="/registration" className="enter-link">Зарегистрировать Аккаунт</Link>
        </div>
    )
}
