import Header from '../components/Header';
import star from '../img/star.svg';
import peopleApproveIcon from '../img/people-approve.svg';
import Button from '../components/Button';
import nextIcon from '../img/next.svg';

export default function TestCasePage_ifellow() {
    return (
        <div className="page-container TestCasePage">
            <Header></Header>
            <p className="main-title">ВОПРОСЫ ТЕСТИРОВЩИКА</p>
            <div className='testcase-container'>
                <div className='testcase-info-container'>
                    <div className='testcase-info'>
                        <img alt="people-approve" src={peopleApproveIcon}></img>
                        <p>6</p>
                    </div>
                    <img alt="star" src={star}></img>
                </div>
                <textarea rows={7}>Что такое баги? Опишите жизненный цикл бага. Чем валидация отличается от верификации? В чем отличие тест-кейса от чек-листа? Из каких этапов состоит процесс тестирования? Какие бывают требования?</textarea>
                <Button buttonText="ПОСМОТРЕТЬ ОТВЕТ"></Button>
                <div className='similar'>
                    <img alt="next" src={nextIcon}></img>
                    <p>ПОХОЖЕЕ</p>
                </div>
            </div>
        </div>
    )
}