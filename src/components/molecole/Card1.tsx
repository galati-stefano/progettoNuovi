const Card1 = ({ imgPath, role, description, name }: { imgPath: string, role: string, description: string, name: string }) => {
    return (
        <div className="flex flex-col gap-y-[30px] lg:w-1/3 max-w-[370px] bg-[#FFFFFF] border rounded-[20px] border-[#E5F4F2] py-[40px] px-[30px] border-0 text-center">
            {/* immagine + nome */}
            <div className="font-poppins mx-auto">
                <img className="mx-auto mb-[16px]" src={imgPath} alt={name} />
                <div className="font-poppins font-semibold">{name}</div>
                <div className="font-mulish text-[14px] font-normal">{role}</div>
            </div>

            {/* descrizione */}
            <div className="font-normal text-[16px] text-center">{description}</div>

            {/* link */}
            <div className="flex justify-center gap-10 text-[14px] font-bold text-[#009379]">
                <div>Twitter</div>  
                <div>Dribble</div>
                <div>Linkedin</div>
            </div>
        </div>
    )
}

export default Card1