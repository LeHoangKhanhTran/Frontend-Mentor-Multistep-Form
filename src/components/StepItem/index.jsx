import Wrapper, { Section } from './StepItem.style'
import { StepContext } from '../../App'
import { useContext } from 'react'
export default function StepItem({number, name}) {
    const [step, dispatch] = useContext(StepContext);
    return(
        <Wrapper isCurrentStep={number === step}>
            <span className='step-number'>{number}</span>
            <Section>
                <span>STEP {number}</span>
                <div className='step-name'>{name.toUpperCase()}</div>
            </Section>
        </Wrapper>
    )
}