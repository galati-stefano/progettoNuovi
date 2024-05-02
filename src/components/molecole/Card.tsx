const Card = ({ imgPath, role, description, name }: { imgPath: string, role : string, description : string, name : string}) => {
    return (
        <div className="w-full max-w-[570px] bg-[#FFFFFF] gap border rounded-[20px] border-[#E5F4F2] py-[40px] px-[30px] md:p-[40px] flex justify-center flex-wrap gap-y-6 lg:justify-between text-center">
            <div className="flex flex-col w-[180px] font-poppins">
                <img className= "mx-auto mb-[16px]" src = {imgPath} alt = {name} />
                <div className="font-poppins font-semibold">{name}</div>
                <div className="font-mulish text-[14px] font-normal">{role}</div>
            </div>

            <div className="flex flex-col justify-center gap-y-6 w-[280px] text-[16px] font-mulish">
                <div className="flex gap-1.5 justify-center order-last lg:justify-start sm:order-first">
                    <img className = "" src="src\assets\stars.svg" alt="star" />
                    <img className = "" src="src\assets\stars.svg" alt="star" />
                    <img className = "" src="src\assets\stars.svg" alt="star" />
                    <img className = "" src="src\assets\stars.svg" alt="star" />
                    <img className = "" src="src\assets\stars.svg" alt="star" />
                </div>
                <div className="text-center lg:text-left">{description}</div>
            </div>
        </div>
    )
}

export default Card