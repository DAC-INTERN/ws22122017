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
            //@Todo:  completed but in addition , with this value : 2....52.....3+100002 , 
            //the result will not return
            while(mathString.indexOf('..')!== -1){
                mathString = mathString.replace('..', '.');
                console.log(mathString);
            }
            return mathString;
        }
    }

});