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

        clearScrint: function () {
            this.mathString = '';
            this.result = '';
        },

        validateMathString: function (mathString) {
            // remove invalid ..
            //@Todo: this function is not completed
            if (mathString.length > 13) {

                alert("Sorry no more input is allowed");
            } else {
                while (mathString.indexOf('..') !== -1) {
                    mathString = mathString.replace('..', '.');
                }
                while (mathString.substr(-1) === '+'
                    || mathString.substr(-1) === '-'
                    || mathString.substr(-1) === '*'
                    || mathString.substr(-1) === '/') {

                    mathString = mathString.slice(0, -1);
                }
                return mathString;


            }
        }
    }

});