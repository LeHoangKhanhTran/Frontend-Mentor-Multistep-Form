import { Container } from "./FinalForm.style";
import Image from '../../assets/images/icon-thank-you.svg'
export default function FinalForm() {
    return (
        <Container>
            <div className="thank-you">
                <img src={Image} alt="thank-you"/>
                <div>Thank you!</div>
            </div>
            <span className="extra-info">
                Thanks for confirming your subscription! We hope you have fun 
                using our platform. If you ever need support, please feel free 
                to email us at support@loremgaming.com.
            </span>
        </Container>
    )
}