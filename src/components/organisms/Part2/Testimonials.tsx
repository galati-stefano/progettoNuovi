

import Card from "../../molecole/Card"
import Title from "../../molecole/Title"

const Testimonials = () => {
    let desc1: string = "\"Anima’s Landing Page UI Kit has become a staple in my design toolkit. This kit has everything I need to get the job done quickly and efficiently.\"";
    let desc2: string = "\"The Landing Page UI Kit has been a game changer. The pre-designed components and templates have helped us deliver projects faster!\"";
    return (
        <div className="flex flex-col lg:h-screen gap-y-16 lg:gap-y-32 bg-[#F8D57E] py-[100px] px-[32px] lg:py-[120px] lg:[55px]">
            <Title title = "Real Stories from Satisfied Customers" subtitle = "See how our landing page ui kit is making an impact"/>
            <div className="flex flex-wrap gap-8 justify-center">
                <Card imgPath="src\assets\lauren.svg" name="Lauren M." role="UI Designer @Boo" description={desc1} />
                <Card imgPath="src\assets\david.svg" name="David B." role="Lead Designer @Creative" description = {desc2}/>
            </div>
        </div>
    )
}

export default Testimonials