import { Wrapper } from "./SideBar.style"
import StepItem from "../StepItem"
import SideBarBg from '../../assets/images/bg-sidebar-desktop.svg'
import SideBarMobileBg from '../../assets/images/bg-sidebar-mobile.svg'
export default function SideBar({ step }) {
    return(
        <Wrapper>
            <picture>
                <source media="(max-width:940px)" srcSet={SideBarMobileBg}/>
                <img src={SideBarBg} alt="side-bar-bg" />
            </picture>
            <ul className="container">
                <StepItem number={1} name='Your Info'></StepItem>
                <StepItem number={2} name='Select Plan'></StepItem>
                <StepItem number={3} name='Add-ons'></StepItem>
                <StepItem number={4} name='Summary'></StepItem>
            </ul>
        </Wrapper>
    )
}