import {header,header_name} from './header.module.css';


function Header () {
    return (
        <section className={header}>
            <h1 className={header_name}>Персонажи Star Wars</h1>
        </section>
    )
}

export default Header;