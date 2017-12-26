var app = new Vue({
    el: '#app',
    data: {
        mathString: '',
        result: ''
    },
    methods: {
        insertValue: function (value) {
            this.mathString += value;
        },

        calculateResult: function () {
            this.result = math.eval(this.validateMathString(this.mathString.toString()));
        },

        deleteMathString: function () {
            this.mathString = this.mathString.slice(0, -1);
        },

        clearScreen: function () {
            this.mathString = '';
            this.result = '';
        },

        validateMathString: function (mathString) {
            // remove invalid ..
            //@Todo: this function is not completed
            //@Todo: add type from keyboard

            // Alert when more than 13 character not to make full screen
            if (mathString.length > 13) {

                alert("Sorry no more input is allowed");
            } else {

                // Validate more than one dot
                while (mathString.indexOf('..') !== -1) {
                    mathString = mathString.replace('..', '.');
                }

                //Validate operator in the last
                while (mathString.substr(-1) === '+'
                    || mathString.substr(-1) === '-'
                    || mathString.substr(-1) === '*'
                    || mathString.substr(-1) === '/') {

                    mathString = mathString.slice(0, -1);
                }

                // Validate *,/ after other operator
                var i = 0;
                while (i < mathString.length) {
                    if (mathString.charAt(i) === '+'
                        || mathString.charAt(i) === '-'
                        || mathString.charAt(i) === '*'
                        || mathString.charAt(i) === '/') {

                        if (mathString.charAt(i + 1) === '*'
                            || mathString.charAt(i + 1) === '/') {
                            alert("More than one operator side by side at char " + (i+1) + ", Try again, Please!");
                            break;
                        } else i++
                    } else i++
                }
                return mathString;
            }
        }
    }

});