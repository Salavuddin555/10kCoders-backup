export function FuncTask1(){
    return <h2>MultipleFunctions</h2>
}

export function Func2(){
    return <h1>MultipleFunctions1</h1>
}

export default function Funct3(){
    return <div>
         <h1>MultipleFunctions3</h1>
         <Func2/>
         <FuncTask1/>
    </div>

}