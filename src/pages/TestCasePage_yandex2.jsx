import Header from '../components/Header';
import star from '../img/star.svg';
import peopleApproveIcon from '../img/people-approve.svg';
import Button from '../components/Button';
import nextIcon from '../img/next.svg';

export default function TestCasePage_yandex2() {
    return (
        <div className="page-container TestCasePage">
            <Header></Header>
            <p className="main-title">КАРТОЧНАЯ ИГРА</p>
            <div className='testcase-container'>
                <div className='testcase-info-container'>
                    <div className='testcase-info'>
                        <img alt="people-approve" src={peopleApproveIcon}></img>
                        <p>15</p>
                    </div>
                    <img alt="star" src={star}></img>
                </div>
                <textarea rows={7}>Петя и Вася играют в интересную игру. Сначала Вася объявляет, сколько очков нужно набрать, чтобы игра закончилась. Затем Петя берет карточки, на которых написаны целые неотрицательные числа, и начинает выкладывать их на стол одну за другой. Если на карточке число, кратное пяти, то Вася получает одно очко. Если на карточке число, кратное трем, то одно очко получает Петя. Если на карточке число, не кратное ни трем, ни пяти, или наоборот, кратное им обоим, то очков не получает никто. Как только кто-то из участников наберет количество очков, которое назвал в начале игры Вася, игра прекращается и этот игрок становится победителем. Если никто из участников не набрал нужного количества очков, но при этом все карточки закончились, то победителем считается игрок, у которого больше очков. Если все карточки закончились, а очков поровну, то объявляется ничья. Петя и Вася иногда очень спешат, поэтому хотят не играть в игру полностью, а сразу узнать, кто выиграл бы при известных начальных данных. Они попросили вас написать программу, которая поможет ответить на этот вопрос.</textarea>
                <Button buttonText="ПОСМОТРЕТЬ ОТВЕТ"></Button>
                <div className='similar'>
                    <img alt="next" src={nextIcon}></img>
                    <p>ПОХОЖЕЕ</p>
                </div>
            </div>
        </div>
    )
}