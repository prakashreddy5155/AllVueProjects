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
### [personal-2.1] passing array as the emit data, and passing some other data as well of parent.
### [personal-2.2] passing object as the emit data from child to parent.
### [personal-2.3] inline emit 
### [personal-2.4] created a AddComponent which works by passing emit data from child to parent. 
### [personal-2.5] - created a new component LuckyNumber.vue which takes a prop and based on that passed prop it generates luckyNumbers till that range
### [personal-2.6] - modified the code to put the luckyNumber into the contact.vue component and passed the prop from App.vue to contact.vue and from contact.vue to LuckyNumber.vue
### [personal-2.7] - implementation using provide and inject, remember provide and inject can be only used for parent -> child relationship, parent provides and child injects. this can be nested till any level. any ancestor an any child
### [personal-2.8] - Passed a method to a child component and calling that method from the child component to perform a task.
### [personal-2.9] - passed props and rendering component dynamically based on a condition.
### [personal-3.0] - created toggle buttons due to which the component can be changed based on we clicking them.