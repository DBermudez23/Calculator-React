import { useState, useEffect } from 'react';
import  Calc from './logic/calculator';
import { Square } from './components/Square';


const buttons = ['√', 'X^', '÷', 'DEL',
                    7, 8, 9, '+',
                    4, 5, 6, '-',
                    3, 2, 1, '×',
                    '∛', 0, ',', '='];


function App () {
    const [numbers, setNumbers] = useState ('');
    const [storedNumbers, setStoredNumbers] = useState ([]);
    const [operation, setOperation] = useState(null);
    const [result, setResult] = useState(null);
    const [board, setboard] = useState (buttons);

    const resetCalc  = () => {
        setNumbers('');
        setResult(null);
        setOperation(null);
        setStoredNumbers([]);
    }

    //Cuando se clicke algún boton guardara su valor
    const UpdateBoard = (index) =>{
        const clickedValue = board[index];

        if (typeof clickedValue === 'number' || clickedValue === ',') {
            setNumbers((prev) => prev + clickedValue.toString());
        } 
        else if (clickedValue === 'DEL') {
            //eliminara el último valor
            setNumbers((prev) => prev.slice(0, -1));
        } 
        else if (clickedValue === '=') {
            handleResultClick();
        }
        else {
            handleOperationClick(clickedValue);
        }
    };
    //tomara como parametro la operación, y guardara
    const handleOperationClick = (op) => {
        if (numbers !== '') {
            setStoredNumbers((prev) => [...prev, parseFloat(numbers)]);
            setNumbers('');
        }
        setOperation(op);
    };




    const handleResultClick = (op) => {
        if (numbers !== '') {
            setStoredNumbers((prev) => [...prev, parseFloat(numbers)]);
        }

        if (storedNumbers.length > 0 && operation && numbers !==''){
            let res;
            switch (operation){
                case '+':
                res = Calc.sumar(...storedNumbers, parseFloat(numbers));
                break;
                case '-':
                res = Calc.restar(...storedNumbers, parseFloat(numbers));
                break;
                case '×':
                res = Calc.multiplicar(...storedNumbers, parseFloat(numbers));
                break;
                case '÷':
                res = Calc.dividir(...storedNumbers, parseFloat(numbers));
                break;
                case 'X^':
                res = Calc.exponencial(storedNumbers[0], parseFloat(numbers));
                break;
                case '√':
                    res = Calc.sqrt(storedNumbers[0]);
                    break;
                case '∛':
                    res = Calc.cbrt(storedNumbers[0]);
                    break;
                default:
                    res = storedNumbers[0];
            }
            setResult(res);
            setStoredNumbers([]);
            setNumbers('');
            setOperation(null);
        }
    }


    return(
        <main>
            <div className='header-calc'>
                <h1>Calculator</h1>
                <button className='btn-reset' onClick={resetCalc}>Another operation</button>
            </div>
            <div className='content'>
                <p>Result: {result !== null ? result : numbers}</p>
                </div>
            <section className='calculator'>
                {board.map((square, index) => (
                    <Square key={index} index={index} UpdateBoard={UpdateBoard}>
                        {square}
                    </Square>
                ))}
                
            </section>
        </main>
    )
}

export default App;
