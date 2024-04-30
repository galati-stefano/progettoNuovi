// Import React e le immagini necessarie
import IconButton from '../../atoms/IconButton.tsx';
import Footer from '../../atoms/Footer.tsx';
import Loom from '../../../assets/png/loom.png';
import Slack from '../../../assets/png/slack.png';
import Spotify from '../../../assets/png/spoty.png';
import Discord from '../../../assets/png/discord.png';
import KickStart from '../../../assets/png/kickstart.png';
import Dropbox from '../../../assets/png/dropbox.png';
import Rocket from '../../../assets/rocket_logo.svg';
import PcMockup from '../../../assets/mockup_pc.svg';



// Funzione per aprire una nuova pagina
function openNewPage(link: string): void {
    window.open(link, "_blank");
}


// Parte 3 della pagina
const Part3 = () => {
    // Array di bottoni con link, immagini e testo alternativo
    const buttons = [
        { link: "https://www.loom.com/", imageSrc: Loom, altText: "Loom" },
        { link: "https://slack.com/", imageSrc: Slack, altText: "Slack" },
        { link: "https://open.spotify.com/", imageSrc: Spotify, altText: "Spotify" },
        { link: "https://discord.com/", imageSrc: Discord, altText: "Discord" },
        { link: "https://www.kickstarter.com/", imageSrc: KickStart, altText: "Kickstarter" },
        { link: "https://www.dropbox.com/", imageSrc: Dropbox, altText: "Dropbox" },
    ];

    // Funzione per renderizzare i pulsanti
    const renderButtons = () => {
        return buttons.map((button, index) => (
            <IconButton key={index} link={button.link} imageSrc={button.imageSrc} altText={button.altText} />
        ));
    };

    return (
        <div>
            {/* Contenuto della prima sezione */}
            <div className="flex flex-col items-center justify-center bg-[#F8F9FF] pt-[60px] pl-[30px] pb-[60px] pr-[30px] gap-[40px] w-full sm:pl-[55px] sm:pt-[120px] sm:pr-[55px] sm:pb-[120px] sm:gap-[40px] sm:justify-center sm:w-full">
                {/* Titolo */}
                <div className="flex flex-col items-center w-full gap-[20px]">
                    <div className=" w-full h-full justify-center">
                        <h1 className="w-full text-[38px] font-poppins tracking-[-1%] text-center text-[#2D2D2D]">
                            More than 50 Integrations
                        </h1>
                    </div>
                    {/* Sottotitolo */}
                    <div className="flex flex-col w-full justify-center">
                        <p className="text-[16px] font-normal font-mulish text-center text-[#2D2D2D]">
                            We integrate with more than 50 apps you use daily
                        </p>
                    </div>
                </div>
                {/* Pulsanti delle integrazioni */}
                <div className="flex flex-row items-center justify-center w-full pt-[32px] pb-[32px] gap-[10px] mt-[10px] sm:pt-[40px] sm:pb-[40px] sm:justify-between">
                    {renderButtons()}
                </div>
                {/* Pulsante per visualizzare tutte le integrazioni */}
                <div className='px-[16px] py-[50px]'>
                    <button
                        type="button"
                        className="w-[267px] h-[60px] gap-[8px] rounded-[20px] bg-[#009379] text-white"
                        onClick={() => openNewPage("https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-ui-kit&utm_medium=figma-samples")}
                    >
                        View All Integrations
                    </button>
                </div>
            </div>

            {/* Contenuto della seconda sezione */}
            <div className='flex flex-col items-center justify-center bg-[#F8D57E] pt-[60px] pl-[30px] pb-[0px] pr-[30px] gap-[20px] w-full sm:pl-[55px] sm:pt-[60px] sm:pr-[100px] sm:pb-[0px] sm:pl-[100px] sm:gap-[20px] sm:justify-center sm:w-full'>
                <div className="items-center">
                    {/* Titolo */}
                    <h1 className='font-poppins text-[28px] tracking-[-1%] text-center text-[#2D2D2D] w-[315px] sm:text-[50px] sm:w-full sm:tracking-[-2%]'>
                        Get Landing Page UI Kit Today!
                    </h1>
                </div>
                <div className="flex flex-col justify-center w-[315px] sm:w-full">
                    {/* Sottotitolo */}
                    <p className='font-mulish text-[16px] text-center text-[#2D2D2D] sm:text-[21px]'>
                        Break Figma limits and explore the endless possibilities with Anima.
                    </p>
                </div>
                {/* Pulsante per iniziare */}
                <div className='px-[16px] py-[50px]'>
                    <button
                        type="button"
                        className="flex items-center justify-center w-[221px] h-[60px] gap-[8px] rounded-[20px] bg-[#009379] text-white"
                        onClick={() => openNewPage("https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-ui-kit&utm_medium=figma-samples")}
                    >
                        <img src={Rocket} alt="Rocket Logo" className="w-6 h-6" />
                        <span className='gap-[8px]'>Get Started</span>
                    </button>
                </div>
                {/* Immagine di un mockup */}
                <div className='bottom-0 left-1/2 transform -translate-x-1/2" w-[320px] md:w-[800px] lg:w-[1170px]'>
                    <img src={PcMockup} alt="Pc Mockup"></img>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

// Esporta il componente Part3 come default
export default Part3;
