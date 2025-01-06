import Button from "../components/Button"
import Field from "../components/Field"

export default function RegPage() {
    return (
        <div className="page-container RegPage">
            <h2>РЕГИСТРАЦИЯ</h2>
            <Field labelText="Логин"></Field>
            <Field labelText="Электронная почта"></Field>
            <Field labelText="Пароль"></Field>
            <Button buttonClass="reg-btn" buttonText="ЗАРЕГИСТРИРОВАТЬСЯ"></Button>
            <div className="add-line-container">
                <div className="add-line"></div>
                <span>Или войдите через социальные сети</span>
                <div className="add-line"></div>
            </div>
            <Button buttonClass="VK" buttonText="Войти с VK ID"></Button>
        </div>
    )
}