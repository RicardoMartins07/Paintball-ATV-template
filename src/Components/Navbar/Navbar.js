import './Navbar.css';


function Navbar() {
  return (
    <header> 
        <nav className="navbar">
            <div className="navbar-container">
                <a className="navbar-logo" href='#'>Logo</a>
                <div className='navbar-menu-collapse'>
                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Pagina Inicial</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Serviços</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Contactos</a></li>
                    </ul>
                </div>
            </div>
            
        </nav>
        
    </header>
  );
}

export default Navbar;