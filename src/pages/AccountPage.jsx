import Header from '../components/Header';
import defaultAccountImg from '../img/defaultAccountImage.png';
import Field from '../components/Field';
import Button from '../components/Button';
import starFull from '../img/star-full.svg';
import star from '../img/star.svg';

export default function AccountPage() {
    return (
        <div className="page-container AccountPage">
            <Header></Header>
            <div className='account-container'>
                <div className='account-interface'>
                    <div>
                        <img alt='account' src={defaultAccountImg}></img>
                    </div>
                    <div>
                        <img alt='starFull' src={starFull}></img>
                        <p>ИЗБРАННОЕ</p>
                    </div>
                    <div>
                        <img alt='star' src={star}></img>
                        <p>ТЕСТЫ</p>
                    </div>
                    <div>
                        <img alt='star' src={star}></img>
                        <p>СТАЖИРОВКИ</p>
                    </div>
                </div>
                <div className='account-info'>
                    <p>ФАМИЛИЯ</p>
                    <p>ИМЯ</p>
                    <p>ОТЧЕСТВО</p>
                    <Field labelText="Логин"></Field>
                    <Field labelText="E-mail"></Field>
                    <Field labelText="Номер телефона"></Field>
                    <Field labelText="Пароль"></Field>
                    <Button buttonText="Редактировать профиль"></Button>
                </div>
            </div>
        </div>
    )
}