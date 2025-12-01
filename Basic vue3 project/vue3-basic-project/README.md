### personal[1.0] - used script setup so that we dont have to manually mention export default {} and setup() and return{} as basic things we dont need to do, but also using setup it optimises the bundle and increses the performance. vue does all of these under the hood.

### personal[1.3] - props validation, we can validate the type of the props using defineProps({propNameComing:type, propNameComing: type}) 
#### example: const props = defineProps({name:String,phone:Number})
#### if we pass <contact name="om sai prakash" :phone="123123" :ownerName="1234user"> </contact>
#### if we want to pass a number and it should treat it like a string but we have used v-bind:ownerName or :ownerName in this scenario we need to make :ownerName="'1234user'" like this, we need to use single quotes inside.

### [personal-1.4] - advanced validation of props inside the defineprops, we can provide an object and can pass required: true/false, type: String/Number or other and default property for non mandatory prop

### [personal-1.5] - we are using a javascript object named contacts which has array of objects, we are passing that data as the props data to each prop.

### [personal-1.6] - when we have a ref in the parent container, where that ref we are passing into the props of another child component that we are rendering, lets say if we now point to the same prop object for the v-model in the parent with a inputBox then that value also gets updated in the child and where every and anynumber of child components that we have everywhere it gets updated easily only if we pass the ref object as a prop to childComponent not the ref object value.

### [personal-1.6-cont] - lets say in the contacts object if we put { ownerName: ownerName.value} then if we mention v-model value as object like v-model="ownerName" then it wont work since we are sending the copy of the value, we need to send the ownerName object so since v-model and ownerName prop is same so it gets updated and when a ref object is  passed as a prop into child component Vue automatically unwraps the ref and passed it as the value inside it not the ref object and that is why even if we pass the ref object and even if child component accepts String or Number. since vue unwraps the ref and passes what its value is present inside so it works.