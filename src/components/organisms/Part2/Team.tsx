
import Title from "../../molecole/Title"
import Card1 from "../../molecole/Card1"

const Team = () => {
    return (

        <div className="flex flex-col lg:h-screen gap-y-16 bg-[#F8F9FF] py-[60px] px-[30px] lg:py-[120px] lg:[55px]"> 
            <Title title="Meet our team" subtitle="Get to know the faces behind the scenes and learn about the values that drive us."/>
            <div className="flex justify-center flex-wrap gap-10">
                <Card1 imgPath="src\assets\sarah.svg" name="Sarah K." role="Lead Designer" description="With a passion for color and a love for clean lines, Sarah brings all our wildest design dreams to life." />
                <Card1 imgPath="src\assets\micheal.svg" name="Micheal L." role="Product Designer" description="With over a decade of experience in product design, John brings a wealth of creativity and expertise to the team." />
                <Card1 imgPath="src\assets\laurenM.svg" name="Lauren M." role="UX Designer" description="With over a decade of experience in product design, John brings a wealth of creativity and expertise to the team."/>
            </div>
        </div>
    )
}

export default Team