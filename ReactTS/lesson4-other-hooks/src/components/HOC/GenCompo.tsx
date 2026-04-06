import { useState } from "react";

const GenCompo = (OriginalCompo: any) => {
    const newCompo = () => {
        const [count, setCount] = useState<number>(0);
        const [countFive, setCountFive] = useState<number>(5);
        return <OriginalCompo
            inCount={() => setCount((count) => count + 2)}
            counter={count}
            incFiveCount={() => setCountFive((count) => count + 5)}
            counterFive={countFive}
        />
    }
    return newCompo;
}

export default GenCompo;