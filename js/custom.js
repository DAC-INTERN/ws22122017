var app = new Vue({
    el: '#app',
    data: {
        mathString: '',
        result: ''
    },
    methods: {
        insertValue: function (value) {
             //@Todo: Add valicate when last element include : + - * / and value insert include : + - * /
            var lastElement=this.mathString.slice(-1);

            if (lastElement ==='+' || lastElement ==='-' || lastElement ==='*' || lastElement ==='/') {
                if (value ==='+' || value ==='-' || value ==='*' || value ==='/') {
                    this.mathString = this.replaceAt(this.mathString,this.mathString.length-1, value);
                }
                else{
                    this.mathString += value;
                }
            }
            else{
                    this.mathString += value;
            }
        },

        calculateResult: function () {
             //@Todo: Add Validate when last element include : + - * /
            var lastElement=this.mathString.slice(-1);

            if (lastElement==='+' || lastElement==='-' || lastElement==='*' || lastElement==='/'){
                this.mathString = this.mathString.slice(0,-1);
            }
            this.result = math.eval(this.validateMathString(this.mathString));
        },

        deleteMathString: function () {
            this.mathString = this.mathString.slice(0, -1);
        },

        clearScreen: function () {
            this.mathString = '';
            this.result='';
        },

        negate: function(){
            //@Todo: negate a number result , example : negate(-5)=5 , negate(5)=-5
            this.result=this.result*-1;
        },

        validateMathString: function (mathString) {
            //@Todo:  completed but in addition , with this value : 2....52.....3+100002 ,
            //the result will not return
            while(mathString.indexOf('..')!== -1){
                mathString = mathString.replace('..', '.');
                console.log(mathString);
            }
            return mathString;
        },

        replaceAt: function(string, index, replace) {
            //@Todo: replace a substring of a string at a specific position .
            return string.substring(0, index) + replace + string.substring(index + 1);
        }

    }

});