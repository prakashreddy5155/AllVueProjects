### [personal-1.0] used script setup to reduce the boilerplate and increase the performance.
### [personal-1.1] static props that we are passing in hardcoded way
### [personal-1.2] passing dynamic props to the another component they are javascript variables, we need to use v-bind or shorthand of that that is :
### [personal-1.3] to validate the passed props we need to make the defineProps({name:String,phone:Number,ownerName:String}) like that.
### [personal-1.4] to validate the passed props - advanced.
### [personal-1.5] rendered the code with a javascript object being passed as props.
### [personal-1.6] making sure that the values gets updated even if we change that in the parent.
### [peronal-1.7] small explanation written on ref in component communication in README.md
### [personal-1.8] added the background color and color of favourites object passed as prop.
### [personal-1.9] passing the emit so that the if any change happens in the child component then the parent component will know that and based on that it updates the value of the parent component and inturn triggers the new render leading to the values getting updated.
### [personal-2.0] corrected the previous version on defining emits names inside defineEmits and passing the data to the parent from child and changing that value and storing that to the parent.