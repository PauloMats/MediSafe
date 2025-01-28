// src/components/Header.tsx
import Link from 'next/link';
import Image from 'next/image';
import './styles/header.css';

const Header = () => (
    
  <header className="header">
    <div className="header-top">
      <div className="logo">
        <Image src="/images/MediHelpLogo.png" alt="MedicHelp" width={100} height={100} />
      </div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/medicaments">Medicamentos</Link>
        <Link href="/services">Serviços</Link>
        <Link href="/specialist">Profissionais</Link>
        <Link href="/faq">FAQ e Dúvidas</Link>
        <Link href="/about">Sobre</Link>
      </nav>
      <div className="actions">
        <button className="sign-in">Sign in</button>
        <button className="register">Register</button>
      </div>
    </div>
    <div className="header-content">
      <h1>Consulte a dosagem do <span>Medicamento</span></h1>
      <div className="search-bar">
        <input type="text" placeholder="Dipirona" />
        <button>Pesquisar</button>
      </div>
    </div>
  </header>
);

export default Header;