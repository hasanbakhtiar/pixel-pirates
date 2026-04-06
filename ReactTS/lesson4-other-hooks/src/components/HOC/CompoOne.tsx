import  GenCompo from "./GenCompo";

const CompoOne = (props: any) => {
    const { counter, inCount } = props;
    return (
        <div>
            CompoOne {counter}
            <br />
            <button onClick={inCount}>+</button>
        </div>
    )
}

export default GenCompo(CompoOne)