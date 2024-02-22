import { Container, Item, ToggleSection } from './PlanForm.style';
import ArcadeIcon from '../../assets/images/icon-arcade.svg'
import AdvancedIcon from '../../assets/images/icon-advanced.svg'
import ProIcon from '../../assets/images/icon-pro.svg'
import { useContext } from 'react';
import { DataContext } from '../../App';

const plans = [
    {
        name: 'Arcade',
        icon: ArcadeIcon,
        price: {
            mo: 9,
            yr: 90
        },
        extraBenefits: {
            yr: '2 months free'
        }
    },

    {
        name: 'Advanced',
        icon: AdvancedIcon,
        price: {
            mo: 12,
            yr: 120
        },
        extraBenefits: {
            yr: '2 months free'
        }
    },
    
    {
        name: 'Pro',
        icon: ProIcon,
        price: {
            mo: 15,
            yr: 150
        },
        extraBenefits: {
            yr: '2 months free'
        }
    },

]

export default function PlanForm() {
    const [data, setData] = useContext(DataContext);
    
    function toggleDuration() {
        setData(prev => {
            return {
                ...prev,
                ['planDuration']: prev.planDuration === 'mo' ? 'yr' : 'mo'
            }
        })
    }

    function changePlan(plan) {
        setData(prev => {
            return {
                ...prev,
                ['plan']: plan
            }
        })
    }

    const items = plans.map((elem) => {
        return (
            <Item 
            isChosen={elem.name === data.plan.name} 
            onClick={() => changePlan(elem)}>
                <img 
                className="icon" 
                src={elem.icon} 
                alt={elem.name}/>
                <div className="info">
                    <span className='plan-name'>{elem.name}</span>
                    <span className='price'>${elem.price[data.planDuration]}/{data.planDuration}</span>
                    {elem.extraBenefits[data.planDuration] && <span className='extra-benefits'>{elem.extraBenefits[data.planDuration]}</span>}
                </div>
            </Item>
        )
    })
    return (
        <>
            <header>
                <h2>Select your plan</h2>
                <span>You have the option of monthly or yearly billing.</span>
            </header>
            <Container className="form">
                {items}
            </Container>
            <ToggleSection duration={data.planDuration}>
                <span className={data.planDuration === 'mo' ? "text active" : "text inactive"}>Monthly</span>
                <div className="toggler" onClick={toggleDuration}>
                    <span></span>
                </div>
                <span className={data.planDuration === 'yr' ? "text active" : "text inactive"}>Yearly</span>
            </ToggleSection>     
        </>
    )
}