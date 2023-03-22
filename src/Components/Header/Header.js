function Header() {
    return (
        <header className="header">
            <img src={'../../images/logo.svg'} alt={'logo'}/>
            <nav>
                <a href={'*'}><button>NavItem1</button></a>
                <a href={'*'}><button>NavItem2</button></a>
                <a href={'*'}><button>NavItem3</button></a>
            </nav>
            <button>Button</button>
        </header>
    );
}

export default Header;