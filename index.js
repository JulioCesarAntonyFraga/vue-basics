Vue.component('greeting', {

    template: '<p>Olá! Eu sou {{name}}!<button v-on:click="changeName">Mudar nome</button></p>',
    data: function(){

        return {

            name:'Yoshi'

        }

    },
    methods:{

        changeName: function(){

            this.name = 'Mario'

        }

    }

})

var one = new Vue({

    el:'#vue-app',
    data:{

        title: 'Vue app One',
        name:'',
        job:'Programador Python',
        age: '',

        ageB: 10,

        website: 'https://www.melhorescursosonlines.com/',

        x:0,
        y:0,

        a:0,
        b:0,
        available: false,
        nearby:false,

        error: false,
        sucess: false,

        characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        programadores: [
            {nome: 'Julio', idade: 17},
            {nome: 'Gabriel', idade: 18},
            {nome: 'Vitor', idade: 15}

        ]


    },
    methods:{

        greet: function(time){

            return `Good ${time}, ${this.name}! You are at instance ONE`

        },

        adicionar: function(num){

            this.age+=num

        },
        subtrair: function(num){

            this.age-=num

        },
        updateXY: function(event){

            this.x = event.offsetX
            this.y = event.offsetY

        },
        logName: function(){

            console.log('You entered your name!')

        },
        logAge: function(){

            console.log('You entered your age')
            
        }

    },
    computed:{

        addA: function(){

            return this.a+this.ageB

        },
        addB: function(){

            return this.b+this.ageB

        },
        compClasses: function(){

            return {

                available: this.available,
                nearby: this.nearby


            }

        }

    }

});
var two = new Vue({

    el:'#vue-app-two',
    data:{

        title: 'Vue app Two',
        name:'Nome da segunda instância',
        output: 'Sua comida favorita'

    },
    methods:{

        greet: function(time){

            return `Good ${time}, ${this.name}! You are at instance TWO`

        },
        changeTitleOne: function(){

            one.title = "Título mudou!"

        },
        readRefs: function(){

            this.output = this.$refs.input.value

        }
        
    },
    computed:{

                  

    }

});