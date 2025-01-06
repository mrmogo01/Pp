import Header from '../components/Header';
import defaultAccountImg from '../img/defaultAccountImage.png';
import Field from '../components/Field';
import Button from '../components/Button';
import starFull from '../img/star-full.svg';
import star from '../img/star.svg';

const data = ['ФАМИЛИЯ', 'ИМЯ', 'ОТЧЕСТВО']

export default function AccountPage() {
    return (
        <div className="page-container AccountPage">
            <Header></Header>
            <div className='account-container'>
                <div className='account-interface'>
                    <div className='account-image'>
                        <img alt='account' src={defaultAccountImg}></img>
                    </div>
                    <div className='custom-list-title'>
                        <img alt='starFull' src={starFull}></img>
                        <p>ИЗБРАННОЕ</p>
                    </div>
                    <div className='custom-list-item'>
                        <img alt='star' src={star}></img>
                        <p>ТЕСТЫ</p>
                    </div>
                    <div className='custom-list-item'>
                        <img alt='star' src={star}></img>
                        <p>СТАЖИРОВКИ</p>
                    </div>
                </div>
                <div className='account-info'>
                    <p>{data[0]}</p>
                    <p>{data[1]}</p>
                    <p>{data[2]}</p>
                    <Field labelText="Логин"></Field>
                    <Field labelText="E-mail"></Field>
                    <Field labelText="Номер телефона"></Field>
                    <Field labelText="Пароль"></Field>
                    <Button buttonText="РЕДАКТИРОВАТЬ ПРОФИЛЬ"></Button>
                </div>
            </div>
        </div>
    )
}