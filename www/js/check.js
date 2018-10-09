var check = new Vue({
    el: '#ch1',
    data: {
        backgroundColor:'white',
        i: 0,
    },
    computed: {
        computedColor: function(){
            return this.backgroundColor;
        }
    },
    methods:{
        changeColor1: function(event){
            this.i++;
            console.log(this.i);
            if (this.i%2==0 && this.i%4!=0)
                this.backgroundColor = '#2196f3';
            if (this.i%2==0 && this.i%4==0)
                this.backgroundColor = 'white';
        }
    }

})

var check2 = new Vue({
    el: '#ch2',
    data: {
        backgroundColor:'white',
        i: 0,
    },
    computed: {
        computedColor: function(){
            return this.backgroundColor;
        }
    },
    methods:{
        changeColor1: function(event){
            this.i++;
            console.log(this.i);
            if (this.i%2==0 && this.i%4!=0)
                this.backgroundColor = '#2196f3';
            if (this.i%2==0 && this.i%4==0)
                this.backgroundColor = 'white';
        }
    }

})

var check3 = new Vue({
    el: '#ch3',
    data: {
        backgroundColor:'white',
        i: 0,
    },
    computed: {
        computedColor: function(){
            return this.backgroundColor;
        }
    },
    methods:{
        changeColor1: function(event){
            this.i++;
            console.log(this.i);
            if (this.i%2==0 && this.i%4!=0)
                this.backgroundColor = '#2196f3';
            if (this.i%2==0 && this.i%4==0)
                this.backgroundColor = 'white';
        }
    }

})

var check4 = new Vue({
    el: '#ch4',
    data: {
        backgroundColor:'white',
        i: 0,
    },
    computed: {
        computedColor: function(){
            return this.backgroundColor;
        }
    },
    methods:{
        changeColor1: function(event){
            this.i++;
            console.log(this.i);
            if (this.i%2==0 && this.i%4!=0)
                this.backgroundColor = '#2196f3';
            if (this.i%2==0 && this.i%4==0)
                this.backgroundColor = 'white';
        }
    }

})

var check5 = new Vue({
    el: '#ch5',
    data: {
        backgroundColor:'white',
        i: 0,
    },
    computed: {
        computedColor: function(){
            return this.backgroundColor;
        }
    },
    methods:{
        changeColor1: function(event){
            this.i++;
            console.log(this.i);
            if (this.i%2==0 && this.i%4!=0)
                this.backgroundColor = '#2196f3';
            if (this.i%2==0 && this.i%4==0)
                this.backgroundColor = 'white';
        }
    }

})

var check6 = new Vue({
    el: '#ch6',
    data: {
        backgroundColor:'white',
        i: 0,
    },
    computed: {
        computedColor: function(){
            return this.backgroundColor;
        }
    },
    methods:{
        changeColor1: function(event){
            this.i++;
            console.log(this.i);
            if (this.i%2==0 && this.i%4!=0)
                this.backgroundColor = '#2196f3';
            if (this.i%2==0 && this.i%4==0)
                this.backgroundColor = 'white';
        }
    }

})

var check7 = new Vue({
    el: '#ch7',
    data: {
        backgroundColor:'white',
        i: 0,
    },
    computed: {
        computedColor: function(){
            return this.backgroundColor;
        }
    },
    methods:{
        changeColor1: function(event){
            this.i++;
            console.log(this.i);
            if (this.i%2==0 && this.i%4!=0)
                this.backgroundColor = '#2196f3';
            if (this.i%2==0 && this.i%4==0)
                this.backgroundColor = 'white';
        }
    }

})

var btn1 = new Vue({
    el: '#btn1',
    data: {
      name: ''
    },
    // определяйте методы в объекте `methods`
    methods: {
      getVoice: function (event) {
        alert('Ваш голос принят' + '!')

  
      }
    }
  })

  
var btn2 = new Vue({
    el: '#btn2',
    data: {
      name: ''
    },
    // определяйте методы в объекте `methods`
    methods: {
      getVoice: function (event) {
        alert('Ваш голос принят' + '!')

  
      }
    }
  })

  var submit1 = new Vue({
    el: '#submit',
    data: {
      name: ''
    },
    // определяйте методы в объекте `methods`
    methods: {
      submit: function (event) {
        alert('Ваш голос принят' + '!')

  
      }
    }
  })

  var submit2 = new Vue({
    el: '#submit2',
    data: {
      name: ''
    },
    // определяйте методы в объекте `methods`
    methods: {
      submit: function (event) {
        alert('Ваш голос принят' + '!')

  
      }
    }
  })
