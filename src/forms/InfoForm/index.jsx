import { useContext, useState } from "react"
import { Content } from "../InfoForm/InfoForm.style"
import { DataContext, StepContext } from "../../App"
import { validateField } from "../../helper"
import { Footer } from "../Form.style"
const initialObj = {
    name: '',
    email: '',
    phoneNumber: ''
}

export default function InfoForm() {
    const [data, setData] = useContext(DataContext);
    const [step, dispatch] = useContext(StepContext);
    const [validateObj, setValidateObj] = useState(initialObj);
    const [tempData, setTempData] = useState(data.info.name === '' ? initialObj : data.info);
    function handleChange(e) {
        setTempData(prev => {
            return {
                ...prev, 
                [e.target.name]: e.target.value
            }
        })

        setValidateObj((prev) => {
            return {
                ...prev, 
                [e.target.name]: ''
            }
        })
    }


    function handleClick() {
        let result = {}
        Object.keys(tempData).forEach((field) => {
            tempData[field] = tempData[field].trim();            
            result[field] = validateField(tempData, field);
        })
        setValidateObj(prev => result)
        setData(prev => {
            return {
                ...prev,
                ['info']: tempData
            }
        })
        if (JSON.stringify(result) === JSON.stringify(initialObj)) {
            dispatch({type: 'get_next_step'});
        }
    }

    return (
        <>
            <header>
                <h2>Personal info</h2>
                <span>Please provide your name, email address, and phone number.</span>
            </header>
            <form className="form">
                <Content>
                    <section className="input-field">
                        {validateObj['name'] !== '' && <div className="error">{validateObj['name']}</div>}
                        <label>Name
                            <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="e.g. Stephen King" 
                            value={tempData.name} 
                            onChange={handleChange} />
                        </label> 
                    </section>
                    <section className="input-field">
                        {validateObj['email'] !== '' && <div className="error">{validateObj['email']}</div>}
                        <label>Email Address
                            <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="e.g. stephenking@lorem.com" 
                            value={tempData.email} 
                            onChange={handleChange}/>
                        </label>
                    </section>
                    <section className="input-field">
                        {validateObj['phoneNumber'] !== '' && <div className="error">{validateObj['phoneNumber']}</div>}
                        <label>Phone Number
                            <input 
                            type= "text" 
                            name="phoneNumber" 
                            id="phone-num" 
                            placeholder="e.g. +1 234 567 890" 
                            value={tempData.phoneNumber} 
                            onChange={handleChange}/>
                        </label>
                    </section>
                </Content>
            </form>
            <Footer>
                <button 
                onClick={handleClick} 
                className='next btn'>
                    Next Step
                </button>
            </Footer>
        </>
    )
}