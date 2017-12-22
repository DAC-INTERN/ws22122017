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
            this.result = math.eval(this.validateMathString(this.mathString));
        },

        deleteMathString: function () {
            this.mathString = this.mathString.slice(0,-1);
        },

        clearMathString: function () {
            this.mathString = '';
        },

        validateMathString: function (mathString) {
            // remove invalid ..
            //@Todo: this function is not completed
            while(mathString.search('..')!== -1){
                // console.log("ok");
                mathString = mathString.replace('..', '.');
                console.log(mathString);

            }
            return mathString;

        }
    }
});