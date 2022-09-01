import Link from "next/link";
import styles from '../styles/components/Nav.module.scss'

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href={'/about'}><a>О нас</a></Link>
                </li>
                <li><Link href={'/wholesale'}><a>Опт</a></Link></li>
                <li><Link href={'/pay_and_delivery'}><a>Оплата и доставка</a></Link></li>
                <li><Link href={'/sales'}><a>Акции</a></Link></li>
                <li><Link href={'/blog'}><a>Блог</a></Link></li>
                <li><Link href={'/contacts'}><a>Контакты</a></Link></li>
            </ul>
        </nav>
    );
}

export default Nav;