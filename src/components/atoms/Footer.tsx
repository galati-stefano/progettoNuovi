import Youtube from '../../assets/youtube.svg';
import Instagram from '../../assets/instagram.svg';
import GitHub from '../../assets/github.svg';
import Linkedin from '../../assets/linkedin.svg';


// Funzione per aprire una nuova pagina
function openNewPage(link: string): void {
    window.open(link, "_blank");
}

// Componente del footer
const Footer: React.FC = () => {
    return (
        <footer className="bg-[#2D2D2D] px-[24px] py-[20px] flex flex-col items-left gap-[20px] sm:items-center sm:flex-row sm:py-[24px] sm:px-[60px] sm:justify-between">
            {/* Testo del footer */}
            <p className="bottom-0 text-[14px] text-[#FFFFFF]">© 2023 Anima’s Landing Page Ui Kit.</p>
            {/* Pulsanti per i social media */}
            <div className="flex space-x-4">
                {/* Pulsanti per i social media */}
                <button
                    className="rounded-full"
                    onClick={() => openNewPage("https://www.youtube.com/c/Animaapp")}
                >
                    <img className="w-8 h-8" src={Youtube} alt="YouTube" />
                </button>
                <button
                    className="rounded-full"
                    onClick={() => openNewPage("https://www.instagram.com/animaapp/")}
                >
                    <img className="w-8 h-8" src={Instagram} alt="Instagram" />
                </button>
                <button
                    className="rounded-full"
                    onClick={() => openNewPage("https://github.com/AnimaApp")}
                >
                    <img className="w-8 h-8" src={GitHub} alt="GitHub" />
                </button>
                <button
                    className="rounded-full"
                    onClick={() => openNewPage("https://www.linkedin.com/company/anima-app")}
                >
                    <img className="w-8 h-8" src={Linkedin} alt="LinkedIn" />
                </button>
            </div>
        </footer>
    );
};

export default Footer;