import { ChildComponent } from "./ChildComponent";

export const ParentComponent = () => {
    const greetParent = (name) => {
        alert(`Hello ${name}`);
    }
    
    return <ChildComponent greetParent={greetParent} />
}