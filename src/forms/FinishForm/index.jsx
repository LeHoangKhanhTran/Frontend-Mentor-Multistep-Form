import { Container, PlanItem, AddItem, TotalItem } from './FinishForm.style';
import { DataContext, StepContext } from '../../App';
import { useContext } from 'react';
export default function FinishForm() {
    const [data, setData] = useContext(DataContext);
    const [step, dispatch] = useContext(StepContext);

    function calculateTotalCost(data) {
        let total = data.plan.price[data.planDuration];
        data.addsOn.forEach(element => {
            total += element.price[data.planDuration]
        });
        return total;
    }
    return (
        <>
            <header>
                <h2>Finishing up</h2>
                <span>Double-check everything looks OK before confirming.</span>
            </header>
            <Container className='form'>
                <PlanItem>
                    <div>
                        <span>{data.plan.name} ({data.planDuration === 'mo' ? 'Monthly' : 'Yearly'})</span>
                        <div 
                        className='change-option' 
                        onClick={() => {dispatch({type: 'back_to_plan'})}}>
                            Change
                        </div>
                    </div>
                    <span className='price'>${data.plan.price[data.planDuration]}/{data.planDuration}</span>
                </PlanItem>
                {data.addsOn.length > 0 && <hr/>} 
                {
                    data.addsOn.map((item) => {
                        return (
                            <AddItem>
                                <span className='add-item'>{item.name}</span>
                                <span className='add-item price'>+${item.price[data.planDuration]}/{data.planDuration}</span>
                            </AddItem>
                        )
                    })
                }
            </Container>
            <TotalItem>
                <span>Total (per {data.planDuration === 'mo' ? 'month' : 'year'})</span>
                <span className='price'>+${calculateTotalCost(data)}/{data.planDuration}</span>
            </TotalItem>
        </>
    )
}