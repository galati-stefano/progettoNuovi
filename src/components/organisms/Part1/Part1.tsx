import GreenButton from "../../atoms/GreenButton"
import GrayButton from "../../atoms/GrayButton"
import rocketSvg from "../../../assets/rocket.svg"
import tvSvg from "../../../assets/tv.png"
import mobile from "../../../assets/mobile.png"
const Part1 = () => {
    return(
        <div>
            <div className="bg-[#F8D57E] container mx-auto flex flex-row gap-4 justify-between p-4 items-center">
                <img src={tvSvg} alt="Rocket" className="w-[32px] h-[32px] mr-[8px]" />
                <div className="flex gap-4">
                <GreenButton>
                    <img src={rocketSvg} alt="Rocket" className="w-[20px] h-[20px] mr-[8px]" />
                    <span className="align-bottom">Get started</span>
                </GreenButton>
                <GrayButton>How it works</GrayButton>
                </div>
            </div>
            <div className="bg-[#F8D57E] container p-10 mx-autogrid grid grid-cols-12 gap-4 justify-between p-4 items-center">
                <div className="col-span-7">
                    <div className="mb-10">
                        <h1 className="text-[67px] font-[700]">Create Engaging Landing Spaces</h1>
                        <p className="text-[21px] font-[400]">Build beautiful landing pages in record time with Anima’s Landing Page UI kit for Figma. No code required!</p>
                    </div>
                    <div className="flex flex-row gap-4">
                        <GreenButton>
                            <img src={rocketSvg} alt="Rocket" className="w-[20px] h-[20px] mr-[8px]" />
                            <span className="align-bottom">Get started</span>
                        </GreenButton>
                        <GrayButton>How it works</GrayButton>
                    </div>
                </div>
                <div className="col-span-5">
                    <img src={mobile} alt="Mobile" className="w-[450px] h-[450px]" />
                </div>
            </div>
            <div className="bg-[#F8F9FF] grid grid-col-12 gap-4 p-10">
                <div className="col-span-5">
                <img src={mobile} alt="Mobile" className="w-[540px] h-[540px]" />
                </div>
                <div className="col-span-7"></div>
            </div>
        </div>
    )
}

export default Part1