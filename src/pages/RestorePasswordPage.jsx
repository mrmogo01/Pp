import Button from "../components/Button"
import Field from "../components/Field"

export default function RestorePasswordPage() {
    return (
        <div className="page-container RestorePasswordPage">
            <h2>ВОССТАНОВЛЕНИЕ ПАРОЛЯ</h2>
            <p>На данной странице вы сможете запустить процедуру
            восстановления пароля, введя вашу электронную почту <br></br>
            в расположенное ниже поле </p>
            <Field fieldClass="" labelText="Электронная почта"></Field>
            <Button buttonText="СБРОСИТЬ ПАРОЛЬ"></Button>
        </div>
    )
}