const Title = ({title , subtitle}:  {title: string , subtitle: string}) =>{
    return(
        <div className="">
            <h1 className="font-mulish font-bold text-4xl text-center mb-[20px]">{title}</h1>
            <h3 className="font-poppins font-normal text-base text-center">{subtitle}</h3>
        </div>
    )
}

export default Title