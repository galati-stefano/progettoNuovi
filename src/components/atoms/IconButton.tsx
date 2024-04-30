// Funzione per aprire una nuova pagina
function openNewPage(link: string): void {
    window.open(link, "_blank");
}


// Componente per un pulsante con icona
const IconButton: React.FC<{ link: string; imageSrc: string; altText: string }> = ({ link, imageSrc, altText }) => {
    const handleClick = () => {
        openNewPage(link);
    };

    return (
        <button className="w-[40px] sm:w-[64px]" onClick={handleClick}>
            <img className="bg-cover rounded-full" src={imageSrc} alt={altText} />
        </button>
    );
};

export default IconButton;