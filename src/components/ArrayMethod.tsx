import { useRef } from 'react';

function ArrayMethod() {

    let Fruits = ["Apple","Banana","Mango","Orange","Grapes","Kiwi"];
    let Vegetables = ["Carrot","Onion","Beetroot","Potato","Tomato","Cucumber"];
    let numbers = [[4,2],[8,3],[11,7]];
    let numbers2 = [11,8,5,2,7,54,25,88,9];

    let outputRef:any = useRef();

  return (
    <div>
        
        <div className='buttonDiv'>
        <button type="button" onClick={()=>{
            delete Fruits[2];
            console.log(Fruits);
            outputRef.current.innerHTML = `delete : ${Fruits}`;
        }}>delete</button>
        <div ref={outputRef}></div>
        </div>

        <div className='buttonDiv'>
        <button type="button" onClick={()=>{
            let output = numbers.flat();
            console.log(output);
            outputRef.current.innerHTML = `flat : ${output}`;
        }}>flat</button>
        <div ref={outputRef}></div>
        </div>

        <div className='buttonDiv'>
        <button type="button" onClick={()=>{
            console.log(Vegetables);
            let output = Vegetables.slice(2);
            console.log(output);
            outputRef.current.innerHTML = `slice : ${output}`;
        }}>slice</button>
        <div ref={outputRef}></div>
        </div>

        <div className='buttonDiv'>
        <button type="button" onClick={()=>{
            console.log(Fruits);
            let output = Fruits.fill("pineapple", 1, 2);
            console.log(output);
            outputRef.current.innerHTML = `fill : ${output}`;
        }}>fill</button>
        <div ref={outputRef}></div>
        </div>

        <div className='buttonDiv'>
        <button type="button" onClick={()=>{
            let output = Array.from("Hello-Typescript");
            console.log(output)
            outputRef.current.innerHTML = `from : ${output}`;
        }}>from</button>
        <div ref={outputRef}></div>
        </div>

        <div className='buttonDiv'>
        <button type="button" onClick={()=>{
            let output = Fruits.includes("Orange");
            console.log(output);
            outputRef.current.innerHTML = `includes : ${output}`;
        }}>includes</button>
        <div ref={outputRef}></div>
        </div>

        <div className='buttonDiv'>
        <button type="button" onClick={()=>{
            let output = Fruits.indexOf("Mango");
            console.log(output);
            outputRef.current.innerHTML = `indexOf : ${output}`;
        }}>indexOf</button>
        <div ref={outputRef}></div>
        </div>

        <div className='buttonDiv'>
        <button type="button" onClick={()=>{
            Vegetables.push("Onion","Brinjal");
            console.log(Vegetables);
            let output = Vegetables.lastIndexOf("Onion");
            console.log(output);
            outputRef.current.innerHTML = `lastIndexOf : ${output}`;
        }}>lastIndexOf</button>
        <div ref={outputRef}></div>
        </div>

        <div className='buttonDiv'>
        <button type="button" onClick={()=>{
            let output = Array.isArray(outputRef);
            console.log(output);
            outputRef.current.innerHTML = `isArray: ${output}`;
        }}>isArray</button>
        <div ref={outputRef}></div>
        </div>

        <div className='buttonDiv'>
        <button type="button" onClick={()=>{
            let output = Vegetables.reverse();
            console.log(output);
            outputRef.current.innerHTML = `reverse : ${output}`;
        }}>reverse</button>
        <div ref={outputRef}></div>
        </div>

        <div className='buttonDiv'>
        <button type="button" onClick={()=>{
            let output = Vegetables.sort();
            console.log(output);
            outputRef.current.innerHTML = `sort : ${output}`;
        }}>sort</button>
        <div ref={outputRef}></div>
        </div>

        <div className='buttonDiv'>
        <button type="button" onClick={()=>{
            console.log(numbers2);
            let output = numbers2.sort((a, b) => Number(a) - Number(b));
            console.log(output);
            outputRef.current.innerHTML = `sort(num) : ${output}`;
        }}>sort(num)</button>
        <div ref={outputRef}></div>
        </div>


            {/* INVISIBLE */}
        <div>
        <button id="invisible" type="button" onClick={()=>{
            let output;
            outputRef.current.innerHTML = `${output}`;
        }}></button>
        <div ref={outputRef}></div>
        </div>
            {/* INVISIBLE */}
       
    </div>
  )
}

export default ArrayMethod;