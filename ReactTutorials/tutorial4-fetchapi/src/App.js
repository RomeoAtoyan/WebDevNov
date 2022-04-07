import {Container} from 'react-bootstrap'
import ChildComponent from './components/ChildComponent'
import LoginForm from './components/LoginForm'
export default function App({helloMessage}){
    return(
        <Container>
            <h1>hello</h1>

            <ChildComponent helloMessage={helloMessage} />
            <LoginForm/>
        </Container>
    )
}