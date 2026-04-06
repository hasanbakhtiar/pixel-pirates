import  GenCompo from "./GenCompo";

const CompoTwo = (props: any) => {
    const { counter, inCount } = props;
    return (
        <div>
            CompoTwo {counter}
            <br />
            <button onClick={inCount}>+</button>
        </div>
    )
}

export default GenCompo(CompoTwo)