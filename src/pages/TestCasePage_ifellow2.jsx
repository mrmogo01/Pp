import Header from '../components/Header';
import star from '../img/star.svg';
import peopleApproveIcon from '../img/people-approve.svg';
import Button from '../components/Button';
import nextIcon from '../img/next.svg';

export default function TestCasePage_ifellow2() {
    return (
        <div className="page-container TestCasePage">
            <Header></Header>
            <p className="main-title">ВОПРОСЫ FRONTEND РАЗРАБОТКЕ</p>
            <div className='testcase-container'>
                <div className='testcase-info-container'>
                    <div className='testcase-info'>
                        <img alt="people-approve" src={peopleApproveIcon}></img>
                        <p>6</p>
                    </div>
                    <img alt="star" src={star}></img>
                </div>
                <textarea rows={7}>Каким образом можно обойтись без промисов? Объяснить, в какой последовательности выведутся цифры и почему так. Как подключить js, css? Плюсы, минусы разных способов?</textarea>
                <Button buttonText="ПОСМОТРЕТЬ ОТВЕТ"></Button>
                <div className='similar'>
                    <img alt="next" src={nextIcon}></img>
                    <p>ПОХОЖЕЕ</p>
                </div>
            </div>
        </div>
    )
}