/*Vue Instance*/
new Vue({
    el: '#vue-app',
    data: {
       message : 'Friends are like clouds!',
       website:'https://en.wikipedia.org/wiki/Friendship',
       num:5,
       name:'',
       firstName:'',
       lastName:'',
       state: 'default',
       newItem: '',
       items: [
            {
                label: 'Hanging out Together',
                done: false,
            },
            {
                label: 'Watching movies',
                done: true,
            },
            {
                label: 'Group study',
                done: false,
            },
        ],
        output : 'Comments',
        websiteTag:'<a href="https://en.wikipedia.org/wiki/Friendship">Know more</a>',
        instruct:new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds()
    },
    methods: {
        showinputvalue : function(event) {
            console.log("You entered your name");
            return this.name=event.target.value;
         },
        add:function(inc){
            this.num += inc;
        },
        click:function(){
            alert('Stay here');
        },
        saveItem: function() {
            this.items.push({
                label: this.newItem,
                done: false,
            });
            this.newItem = '';
        },
        changeState: function(newState) {
            this.state = newState;
            this.newItem = '';
        },
        toggleDone: function(item) {
            item.done = !item.done;
        },
        readRefs: function(){
            console.log(this.$refs.input.value); 
            this.output = this.$refs.input.value;
        }
    },
    computed: {
        getFullName : function(){
            return 'Hey!! ' + this.firstName +" "+ this.lastName;
         },
         reversedItems : function() {
            return this.items.slice(0).reverse();
        }
    }
});
