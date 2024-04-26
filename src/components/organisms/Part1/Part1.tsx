import GreenButton from "../../atoms/GreenButton"
import GrayButton from "../../atoms/GrayButton"
import rocketSvg from "../../../assets/rocket.svg"
import tvSvg from "../../../assets/tv.png"
import mobile from "../../../assets/mobile.png"
import box from "../../../assets/box.png"
import square from "../../../assets/square.png"
import wand from "../../../assets/wand.png"
import ufo from "../../../assets/ufo.png"

const Part1 = () => {
    return(
        <div>
            {/* Header */}
            <div className="bg-[#F8D57E]  flex flex-row gap-4 justify-between p-4 items-center">
                <img src={tvSvg} alt="Rocket" className="w-[32px] h-[32px] mr-[8px]" />
                <div className="flex gap-4">
                <GreenButton>
                    <img src={rocketSvg} alt="Rocket" className="w-[20px] h-[20px] mr-[8px]" />
                    <span className="align-bottom">Get started</span>
                </GreenButton>
                <div className="hidden lg:block"><GrayButton>How it works</GrayButton></div>
                </div>
            </div>
            {/* A Prima sezione */}
            <div className="bg-[#F8D57E]  p-10 mx-autogrid grid grid-cols-12 gap-4 justify-between p-4 items-center">
                <div className="col-span-12 lg:col-span-7">
                    <div className="mb-10">
                        <h1 className="text-[67px] font-[700] text-center lg:text-start">Create Engaging Landing Spaces</h1>
                        <p className="text-[21px] font-[400] text-center lg:text-start">Build beautiful landing pages in record time with Anima’s Landing Page UI kit for Figma. No code required!</p>
                    </div>
                    <div className="flex lg:flex-row gap-4 flex-col mx-7">
                        <GreenButton>
                            <img src={rocketSvg} alt="Rocket" className="w-[20px] h-[20px] mr-[8px]" />
                            <span className="align-bottom">Get started</span>
                        </GreenButton>
                        <GrayButton>How it works</GrayButton>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-5 flex justify-center">
                    <img src={mobile} alt="Mobile" className="w-[320px] h-[267px] lg:w-[450px] lg:h-[450px]" />
                </div>
            </div>
            {/*Seconda sezione*/}
            <div className="bg-[#F8F9FF] grid grid-cols-12 gap-4 p-10 pt-[60px]">
                <div className="col-span-12 lg:col-span-5 flex justify-center order-last lg:order-first">
                    <img src={mobile} alt="Mobile" className="lg:w-[540px] lg:h-[540px] w-[320px] h-[267px]" />
                </div>
                <div className="col-span-12 lg:col-span-7">
                    <h2 className="text-[38px] font-[700] text-center lg:text-start">Our Features</h2>
                    <p className="text-[21px] font-[400] text-center lg:text-start">Few good reasons why you should use Anima Landing Page Ui Kit to make your own pages.</p>
                    <div className="flex flex-col lg:flex-row gap-4 mt-7">
                        <div className="bg-white flex items-center p-[20px] rounded-2xl justify-center gap-4 w-[275px] h-[90px] m-auto lg:m-0">
                            <img src={ufo} className="w-[50px] h-[50px]"/>
                            <span className="text-[21px] font-[400]">Fast Building</span>
                        </div>
                        <div className="bg-white flex items-center p-[20px] rounded-2xl justify-center gap-4 w-[275px] h-[90px] m-auto lg:m-0">
                            <img src={wand} className="w-[50px] h-[50px]"/>
                            <span className="text-[21px] font-[400]">Easy to edit</span>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 mt-4 lg:mt-7">
                        <div className="bg-white flex items-center p-[20px] rounded-2xl justify-center gap-4 w-[275px] h-[90px] m-auto lg:m-0">
                            <img src={square} className="w-[50px] h-[50px]"/>
                            <span className="text-[21px] font-[400]">Responsiveness</span>
                        </div>
                        <div className="bg-white flex items-center p-[20px] rounded-2xl justify-center gap-4 w-[275px] h-[90px] m-auto lg:m-0">
                            <img src={box} className="w-[50px] h-[50px]"/>
                            <span className="text-[21px] font-[400]">No code needed</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Part1