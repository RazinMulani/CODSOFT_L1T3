let display = document.getElementById('display');

        function addNumber(num) {
            display.value += num;
        }

        function addOperator(operator) {
            display.value += operator;
        }

        function addDecimal(decimal) {
            if (!display.value.includes(decimal)) {
                display.value += decimal;
            }
        }

        function clearDisplay() {
            display.value = '';
        }

        function backspace() {
            display.value = display.value.slice(0, -1);
        }

        function calculate() {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        }

        // Keyboard support
        document.addEventListener('keydown', function(event) {
            const key = event.key;
            if (/\d/.test(key) || key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
                addNumber(key);
            } else if (key === 'Enter') {
                calculate();
            } else if (key === 'Backspace') {
                backspace();
            }
        });