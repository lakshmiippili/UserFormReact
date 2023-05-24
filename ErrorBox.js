import Card from "./Card"
import Button from "./Button"

const ErrorBox = props =>{
    return <div>
        <div OnClick={props.onOkay}></div>
        <Card>
            <header>
                <h2> {props.title}</h2>
            </header>
            <div>
                <p>{props.msg}</p>
            </div>
            <footer>
                <Button onClick={props.onOkay}>Okay</Button>
            </footer>
        </Card>
    </div>
}

export default ErrorBox