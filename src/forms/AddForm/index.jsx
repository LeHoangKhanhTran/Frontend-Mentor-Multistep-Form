import { Container, Item } from './AddForm.style';
import { DataContext } from '../../App';
import { useContext } from 'react';

const options = [
    {
        name: 'Online Service',
        detail: 'Access to multiplayer games',
        price: {
            mo: 1,
            yr: 10
        }
    },

    {
        name: 'Larger storage',
        detail: 'Extra 1TB of cloud save',
        price: {
            mo: 2,
            yr: 20
        }
    },

    {
        name: 'Customizable Profile',
        detail: 'Custom theme on your profile',
        price: {
            mo: 2,
            yr: 20
        }
    }
]

export default function AddForm() {
    const [data, setData] = useContext(DataContext);

    const planDuration = data.planDuration;

    function getNewItems(removedItem) {
        const newItems = data.addsOn.filter((item) => {
            return item !== removedItem;
        });
        return newItems;
    }

    function updateAddsOn(item) {
        if (data.addsOn.includes(item)) {
            setData(prev => {
                return {
                    ...prev, 
                    ['addsOn']: getNewItems(item)
                }
            })
        }
        else {
            setData(prev => {
                return {
                    ...prev, 
                    ['addsOn']: data.addsOn.concat([item])
                }
            })
        }    
    }

    return(
        <>
            <header>
                <h2>Pick add-ons</h2>
                <span>Add-ons help enhance your gaming experience.</span>
            </header>
            <Container className='form'>
                {
                    options.map((elem) => {
                        return (
                            <Item 
                            isChosen={data.addsOn.includes(elem)} 
                            onClick={() => {updateAddsOn(elem)}}>
                                <input 
                                type="checkbox" 
                                checked={data.addsOn.includes(elem)}/>
                                <div className="info">
                                    <span className='add-name'>{elem.name}</span>
                                    <span className='detail'>{elem.detail}</span>
                                </div>
                                <span className='extra-charge'>+${elem.price[planDuration]}/{planDuration}</span>
                            </Item>
                        )
                    })
                }
            </Container>
        </>
    )
}