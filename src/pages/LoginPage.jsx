import Button from "../components/Button"
import Field from "../components/Field"

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
            <a className="enter-link" href="#a">Зарегистрировать Аккаунт</a>
        </div>
    )
}