// Super Accurate Calculator App

function createBasicCalculator() {
    return `
        <div class="calculator">
            <div class="display" id="display">0</div>
            <div class="buttons">
                <button class="button" data-value="7">7</button>
                <button class="button" data-value="8">8</button>
                <button class="button" data-value="9">9</button>
                <button class="button" data-value="/">÷</button>
                <button class="button" data-value="4">4</button>
                <button class="button" data-value="5">5</button>
                <button class="button" data-value="6">6</button>
                <button class="button" data-value="*">×</button>
                <button class="button" data-value="1">1</button>
                <button class="button" data-value="2">2</button>
                <button class="button" data-value="3">3</button>
                <button class="button" data-value="-">−</button>
                <button class="button" data-value="0">0</button>
                <button class="button" data-value=".">.</button>
                <button class="button" data-action="clear">C</button>
                <button class="button" data-value="+">+</button>
                <button class="button" data-action="back">⌫</button>
                <button class="button" data-action="equals" style="grid-column: span 3;">=</button>
            </div>
        </div>
    `;
}

function createScientificCalculator() {
    return `
        <div class="calculator">
            <div class="display" id="display">0</div>
            <div class="buttons">
                <button class="button" data-value="sin(">sin</button>
                <button class="button" data-value="cos(">cos</button>
                <button class="button" data-value="tan(">tan</button>
                <button class="button" data-value="^">^</button>
                <button class="button" data-value="7">7</button>
                <button class="button" data-value="8">8</button>
                <button class="button" data-value="9">9</button>
                <button class="button" data-value="/">÷</button>
                <button class="button" data-value="4">4</button>
                <button class="button" data-value="5">5</button>
                <button class="button" data-value="6">6</button>
                <button class="button" data-value="*">×</button>
                <button class="button" data-value="1">1</button>
                <button class="button" data-value="2">2</button>
                <button class="button" data-value="3">3</button>
                <button class="button" data-value="-">−</button>
                <button class="button" data-value="0">0</button>
                <button class="button" data-value=".">.</button>
                <button class="button" data-action="clear">C</button>
                <button class="button" data-value="+">+</button>
                <button class="button" data-action="back">⌫</button>
                <button class="button" data-action="equals" style="grid-column: span 3;">=</button>
            </div>
        </div>
    `;
}

function createProgrammerCalculator() {
    return `
        <div class="calculator">
            <div class="display" id="display">0</div>
            <div class="buttons">
                <button class="button" data-value="1">1</button>
                <button class="button" data-value="0">0</button>
                <button class="button" data-value="A">A</button>
                <button class="button" data-value="B">B</button>
                <button class="button" data-value="C">C</button>
                <button class="button" data-value="D">D</button>
                <button class="button" data-value="E">E</button>
                <button class="button" data-value="F">F</button>
                <button class="button" data-action="bin">BIN</button>
                <button class="button" data-action="dec">DEC</button>
                <button class="button" data-action="hex">HEX</button>
                <button class="button" data-action="and">AND</button>
                <button class="button" data-action="or">OR</button>
                <button class="button" data-action="xor">XOR</button>
                <button class="button" data-action="not">NOT</button>
                <button class="button" data-action="clear">C</button>
                <button class="button" data-action="back">⌫</button>
                <button class="button" data-action="equals" style="grid-column: span 3;">=</button>
            </div>
        </div>
    `;
}

function createFractionCalculator() {
    return `
        <div class="calculator">
            <div class="display" id="display">0</div>
            <div class="buttons">
                <button class="button" data-value="7">7</button>
                <button class="button" data-value="8">8</button>
                <button class="button" data-value="9">9</button>
                <button class="button" data-value="/">/</button>
                <button class="button" data-value="4">4</button>
                <button class="button" data-value="5">5</button>
                <button class="button" data-value="6">6</button>
                <button class="button" data-value="-">−</button>
                <button class="button" data-value="1">1</button>
                <button class="button" data-value="2">2</button>
                <button class="button" data-value="3">3</button>
                <button class="button" data-value="+">+</button>
                <button class="button" data-value="0">0</button>
                <button class="button" data-value=".">.</button>
                <button class="button" data-value="\u2044">&#8260;</button>
                <button class="button" data-action="clear">C</button>
                <button class="button" data-action="back">⌫</button>
                <button class="button" data-action="equals" style="grid-column: span 3;">=</button>
            </div>
        </div>
    `;
}

function createCurrencyCalculator() {
    return `
        <div class="calculator">
            <div class="display" id="display">0</div>
            <div style="margin-bottom:10px;">
                <select id="from-curr">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                </select>
                <span style="color:inherit;">→</span>
                <select id="to-curr">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                </select>
            </div>
            <div class="buttons">
                <button class="button" data-value="7">7</button>
                <button class="button" data-value="8">8</button>
                <button class="button" data-value="9">9</button>
                <button class="button" data-action="clear">C</button>
                <button class="button" data-value="4">4</button>
                <button class="button" data-value="5">5</button>
                <button class="button" data-value="6">6</button>
                <button class="button" data-action="back">⌫</button>
                <button class="button" data-value="1">1</button>
                <button class="button" data-value="2">2</button>
                <button class="button" data-value="3">3</button>
                <button class="button" data-action="equals">=</button>
                <button class="button" data-value="0">0</button>
                <button class="button" data-value=".">.</button>
            </div>
        </div>
    `;
}

function createDateCalculator() {
    return `
        <div class="calculator">
            <div style="margin-bottom:10px;">
                <input id="date1" type="date" style="font-size:1.1rem;" />
                <span style="color:inherit;">→</span>
                <input id="date2" type="date" style="font-size:1.1rem;" />
            </div>
            <div class="display" id="display">0 days</div>
            <div class="buttons">
                <button class="button" data-action="calc-date" style="grid-column: span 2;">Calculate</button>
                <button class="button" data-action="clear" style="grid-column: span 2;">Clear</button>
            </div>
        </div>
    `;
}

function evaluateExpression(expr) {
    // Replace unicode operators
    expr = expr.replace(/÷/g, '/').replace(/×/g, '*').replace(/−/g, '-');
    // Replace ^ with Math.pow
    expr = expr.replace(/(\d+(?:\.\d+)?|\))\^(\d+(?:\.\d+)?)/g, 'Math.pow($1,$2)');
    // Replace trig functions
    expr = expr.replace(/sin\(/g, 'Math.sin(')
               .replace(/cos\(/g, 'Math.cos(')
               .replace(/tan\(/g, 'Math.tan(');
    try {
        // Use Function constructor for safe evaluation
        let result = Function('return (' + expr + ')')();
        // Fix floating point errors
        if (typeof result === 'number') {
            result = Math.round((result + Number.EPSILON) * 1e12) / 1e12;
        }
        return result;
    } catch {
        return 'Error';
    }
}

function renderCalculator(type) {
    const container = document.getElementById('calculator-container');
    if (type === 'scientific') {
        container.innerHTML = createScientificCalculator();
    } else if (type === 'programmer') {
        container.innerHTML = createProgrammerCalculator();
    } else if (type === 'fraction') {
        container.innerHTML = createFractionCalculator();
    } else if (type === 'currency') {
        container.innerHTML = createCurrencyCalculator();
    } else if (type === 'date') {
        container.innerHTML = createDateCalculator();
    } else {
        container.innerHTML = createBasicCalculator();
    }
    setupCalculatorEvents(type);
}

let autoClearTimeout = null;
function setAutoClear(display, ms = 3000) {
    if (autoClearTimeout) clearTimeout(autoClearTimeout);
    autoClearTimeout = setTimeout(() => {
        display.textContent = '0';
        if (typeof window.currentCalc !== 'undefined') window.currentCalc = '';
    }, ms);
}

function setupCalculatorEvents(type) {
    const display = document.getElementById('display');
    let current = '';
    window.currentCalc = current;
    if (type === 'date') {
        document.querySelector('[data-action="calc-date"]').onclick = () => {
            const d1 = new Date(document.getElementById('date1').value);
            const d2 = new Date(document.getElementById('date2').value);
            if (isNaN(d1) || isNaN(d2)) {
                display.textContent = 'Invalid date';
                return;
            }
            const diff = Math.abs((d2 - d1) / (1000 * 60 * 60 * 24));
            display.textContent = diff + ' days';
        };
        document.querySelector('[data-action="clear"]').onclick = () => {
            document.getElementById('date1').value = '';
            document.getElementById('date2').value = '';
            display.textContent = '0 days';
        };
        return;
    }
    if (type === 'currency') {
        let from = 'USD', to = 'USD';
        const rates = { USD: 1, EUR: 0.9, GBP: 0.8 };
        document.getElementById('from-curr').onchange = e => from = e.target.value;
        document.getElementById('to-curr').onchange = e => to = e.target.value;
        document.querySelectorAll('.button').forEach(btn => {
            btn.onclick = () => {
                const val = btn.getAttribute('data-value');
                const action = btn.getAttribute('data-action');
                if (val) {
                    if (display.textContent === '0' || display.textContent === 'Error') current = '';
                    current += val;
                    display.textContent = current;
                } else if (action === 'clear') {
                    current = '';
                    display.textContent = '0';
                } else if (action === 'back') {
                    current = current.slice(0, -1);
                    display.textContent = current || '0';
                } else if (action === 'equals') {
                    let num = parseFloat(current);
                    if (isNaN(num)) display.textContent = 'Error';
                    else display.textContent = (num * rates[to] / rates[from]).toFixed(4);
                    current = '';
                }
                window.currentCalc = current;
            };
        });
        return;
    }
    if (type === 'programmer') {
        let mode = 'dec';
        document.querySelectorAll('.button').forEach(btn => {
            btn.onclick = () => {
                const val = btn.getAttribute('data-value');
                const action = btn.getAttribute('data-action');
                if (val) {
                    if (display.textContent === '0' || display.textContent === 'Error') current = '';
                    current += val;
                    display.textContent = current;
                } else if (action === 'clear') {
                    current = '';
                    display.textContent = '0';
                } else if (action === 'back') {
                    current = current.slice(0, -1);
                    display.textContent = current || '0';
                } else if (action === 'bin') {
                    display.textContent = parseInt(current, 16).toString(2);
                } else if (action === 'dec') {
                    display.textContent = parseInt(current, 16).toString(10);
                } else if (action === 'hex') {
                    display.textContent = parseInt(current, 2).toString(16).toUpperCase();
                } else if (action === 'and') {
                    current += '&';
                    display.textContent = current;
                } else if (action === 'or') {
                    current += '|';
                    display.textContent = current;
                } else if (action === 'xor') {
                    current += '^';
                    display.textContent = current;
                } else if (action === 'not') {
                    if (current) display.textContent = (~parseInt(current, 16)).toString(16).toUpperCase();
                } else if (action === 'equals') {
                    try {
                        display.textContent = eval('0x' + current);
                    } catch { display.textContent = 'Error'; }
                    current = '';
                }
                window.currentCalc = current;
            };
        });
        return;
    }
    if (type === 'fraction') {
        document.querySelectorAll('.button').forEach(btn => {
            btn.onclick = () => {
                const val = btn.getAttribute('data-value');
                const action = btn.getAttribute('data-action');
                if (val) {
                    if (display.textContent === '0' || display.textContent === 'Error') current = '';
                    if (val === '\u2044' || val === '⁄') current += '/';
                    else current += val;
                    display.textContent = current;
                } else if (action === 'clear') {
                    current = '';
                    display.textContent = '0';
                } else if (action === 'back') {
                    current = current.slice(0, -1);
                    display.textContent = current || '0';
                } else if (action === 'equals') {
                    try {
                        if (current.includes('/')) {
                            let [n, d] = current.split('/').map(Number);
                            display.textContent = (n / d).toString();
                        } else {
                            display.textContent = current;
                        }
                    } catch { display.textContent = 'Error'; }
                    current = '';
                }
                window.currentCalc = current;
            };
        });
        return;
    }
    // Default: basic/scientific
    document.querySelectorAll('.button').forEach(btn => {
        btn.onclick = () => {
            const val = btn.getAttribute('data-value');
            const action = btn.getAttribute('data-action');
            if (val) {
                if (display.textContent === '0' || display.textContent === 'Error') {
                    current = '';
                }
                current += val;
                display.textContent = current;
            } else if (action === 'clear') {
                current = '';
                display.textContent = '0';
            } else if (action === 'back') {
                current = current.slice(0, -1);
                display.textContent = current || '0';
            } else if (action === 'equals') {
                const result = evaluateExpression(current);
                display.textContent = result;
                current = result === 'Error' ? '' : result.toString();
                setAutoClear(display, 3000); // auto clear after 3 seconds
            }
            window.currentCalc = current;
        };
    });
}

// Keyboard support for calculator
function handleKey(e) {
    const display = document.getElementById('display');
    if (!display) return;
    let key = e.key;
    let btn;
    if (key >= '0' && key <= '9') {
        btn = document.querySelector('.button[data-value="' + key + '"]');
    } else if (key === '.') {
        btn = document.querySelector('.button[data-value="."]');
    } else if (key === '+') {
        btn = document.querySelector('.button[data-value="+"]');
    } else if (key === '-') {
        btn = document.querySelector('.button[data-value="-"]');
    } else if (key === '*' || key === 'x' || key === 'X') {
        btn = document.querySelector('.button[data-value="*"]');
    } else if (key === '/' || key === '÷') {
        btn = document.querySelector('.button[data-value="/"]');
    } else if (key === 'Enter' || key === '=') {
        btn = document.querySelector('.button[data-action="equals"]');
    } else if (key === 'Backspace') {
        btn = document.querySelector('.button[data-action="back"]');
    } else if (key === 'c' || key === 'C') {
        btn = document.querySelector('.button[data-action="clear"]');
    } else if (key === '^') {
        btn = document.querySelector('.button[data-value="^"]');
    }
    if (btn) {
        btn.click();
        e.preventDefault();
    }
}

document.addEventListener('keydown', handleKey);

document.getElementById('calc-type').onchange = (e) => {
    renderCalculator(e.target.value);
};
document.getElementById('theme').onchange = (e) => {
    const theme = e.target.value;
    document.body.className = theme === 'classic' ? 'classic' :
        theme === 'midnight' ? 'midnight' :
        theme === 'emerald' ? 'emerald' :
        theme === 'rose' ? 'rose' : '';
};

// Auto Clear button logic
document.getElementById('auto-clear').onclick = () => {
    const display = document.querySelector('.display');
    display.textContent = '0';
    if (typeof window.currentCalc !== 'undefined') window.currentCalc = '';
};

// Initial render
renderCalculator(document.getElementById('calc-type').value);
