import GenCompo from "./GenCompo";

const CompoThree = (props: any) => {
    const { counterFive, incFiveCount } = props;
    return (
        <div>
            CompoThree {counterFive}
            <br />
            <button onClick={incFiveCount}>+</button>
        </div>
    )
}

export default GenCompo(CompoThree)