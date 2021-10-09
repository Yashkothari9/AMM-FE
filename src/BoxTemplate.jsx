import './App.css';

export default function BoxTemplate(props) {
    return (
        <div class ="boxStyle1">
            <div class ="flexClass">
                <div>
                    <p>{props.leftHeader}</p>
                    <input class="textField" id="outlined-basic"  variant="outlined" value={props.value} onChange={(e) => props.onChange(e)} placeholder = {"Enter amount"}/>
                </div> 
                <div class="margin"> 
                    {props.right}
                </div>
            </div>
        </div>
    );
}