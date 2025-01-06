import ALink from "./ALink";
import Search from "./Search";
import Button from "./Button";

export default function Header() {
    return (
        <div className='Header'>
            <ALink Text="КАТАЛОГ ТЕСТОВЫХ ЗАДАНИЙ"></ALink>
            <ALink Text="КАТАЛОГ СТАЖИРОВОК"></ALink>
            <div className="header-fields">
                <Search></Search>
                <Button buttonText="ВХОД"></Button>
            </div>
        </div>
    )
}