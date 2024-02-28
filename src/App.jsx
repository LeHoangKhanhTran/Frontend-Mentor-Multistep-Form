import { useReducer, createContext, useState } from 'react'
import GlobalStyle from './GlobalStyle'
import Box from './components/Box'
import SideBar from './components/SideBar'
import { Wrapper, FormSection, Footer } from './forms/Form.style'
import InfoForm from './forms/InfoForm'
import PlanForm from './forms/PlanForm'
import AddForm from './forms/AddForm'
import FinishForm from './forms/FinishForm'
import FinalForm from './forms/FinalForm'
import ArcadeIcon from './assets/images/icon-arcade.svg'

function reducer(state, action) {
  if (action.type === 'get_next_step') {
    return state + 1
  }
  else if (action.type === 'get_prev_step') {
    return state - 1
  }
  else if (action.type === 'back_to_plan') {
    return 2;
  }
}

export const StepContext = createContext();
export const DataContext = createContext();

const formData = {
  info: {
    name: '',
    email: '',
    phoneNumber: ''
  },
  plan: {
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
  planDuration: 'mo',
  addsOn: []
}

function App() {
  const [step, dispatch] = useReducer(reducer, 1);
  const [isFinished, setIsFinished] = useState(false);
  const [data, setData] = useState(formData);

  return (
    <>
      <GlobalStyle/>
      <main>
            <StepContext.Provider value={[step, dispatch]}>
              <Box>
                  <SideBar/>
                  <Wrapper>
                      <DataContext.Provider value={[data, setData]}>
                        {!isFinished && 
                          <FormSection>
                            {step === 1 && <InfoForm/>}
                            {step === 2 && <PlanForm/>}
                            {step === 3 && <AddForm/>}
                            {step === 4 && <FinishForm/>}
                            {step > 1 && !isFinished && <Footer>
                            {step > 1 && step < 5 && 
                            <button 
                            onClick={() => dispatch({type: 'get_prev_step'})} 
                            className="back btn">
                              Go Back
                            </button>}
                            {step > 1 && step < 4 && 
                            <button 
                            onClick={() => dispatch({type: 'get_next_step'})} 
                            className='next btn'>
                                Next Step
                            </button>}
                            {step === 4 && 
                            <button 
                            onClick={() => setIsFinished(prev => true)} 
                            className="confirm btn">
                                  Confirm
                            </button>}
                          </Footer>}
                          </FormSection>}
                        {isFinished && <FinalForm/>}
                      </DataContext.Provider>
                  </Wrapper>
              </Box>
            </StepContext.Provider>
        </main>
    </>
  )
}

export default App
