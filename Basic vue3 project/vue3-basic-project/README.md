### personal[1.0] - used script setup so that we dont have to manually mention export default {} and setup() and return{} as basic things we dont need to do, but also using setup it optimises the bundle and increses the performance. vue does all of these under the hood.

### personal[1.3] - props validation, we can validate the type of the props using defineProps({propNameComing:type, propNameComing: type}) 
#### example: const props = defineProps({name:String,phone:Number})
#### if we pass <contact name="om sai prakash" :phone="123123" :ownerName="1234user"> </contact>
#### if we want to pass a number and it should treat it like a string but we have used v-bind:ownerName or :ownerName in this scenario we need to make :ownerName="'1234user'" like this, we need to use single quotes inside.

### [personal-1.4] - advanced validation of props inside the defineprops, we can provide an object and can pass required: true/false, type: String/Number or other and default property for non mandatory prop

### [personal-1.5] - we are using a javascript object named contacts which has array of objects, we are passing that data as the props data to each prop.

### [personal-1.6] - when we have a ref in the parent container, where that ref we are passing into the props of another child component that we are rendering, lets say if we now point to the same prop object for the v-model in the parent with a inputBox then that value also gets updated in the child and where every and anynumber of child components that we have everywhere it gets updated easily only if we pass the ref object as a prop to childComponent not the ref object value.

### [personal-1.6-cont] - lets say in the contacts object if we put { ownerName: ownerName.value} then if we mention v-model value as object like v-model="ownerName" then it wont work since we are sending the copy of the value, we need to send the ownerName object so since v-model and ownerName prop is same so it gets updated and when a ref object is  passed as a prop into child component Vue automatically unwraps the ref and passed it as the value inside it not the ref object and that is why even if we pass the ref object and even if child component accepts String or Number. since vue unwraps the ref and passes what its value is present inside so it works.

### [personal-1.9] - passing the emit so that the data that belongs to parent which came as a prop to the child can also be updated by the emit happens then we can make changes.

#### how does that work: 
#### with the help of the emit we can be able to send an emit to the parent and parent can know that something is triggered and since it is triggered so we can change the value or do operation. 

#### easy example: lets say we have passed isFavorite as false to the child, but when user clicks on the Add To Favourite button then the isFavourite should be turned to true. in that case what we can do is we can create one emit in the child component, and then we can trigger that emit through a function when a button click is happened and through that we can pass the data from the child component to the parent component and modify that data and can update the data, so since some change is triggered in the parent component which child is dependant on, so Vue re-renders it and displays the updated data.

#### As I have told, we can even pass the data from the child component to the parent component which was actually passed to the child component before, then we can update the data passed and store the updated data and due to which new render happens and displays the updated data, this is what the communication between the child to parent looks like. 

### [personal-2.0] - passing the data to the parent component from child component and modifying the data accordingly. like we can pass the data while emit('emitName',dataOfChild) 
#### this can be taken by the parent like @emit-name=objectParentToChange=updateIsFavourite($event), here we will get all the passed values in the $event, we can have function like 
#### function updateIsFavourite(dataFromChild)
#### {
####  return !dataFromChild    
#### }

#### if we have more parameters from the parent which is unrelated to the data then also we can pass 

```javascript 
// parent component code.
<div v-for="contact in contacts" :key="contacts.name">
<contact 
    :isFavourite="contact.isFavourite"
    :name="contact.name"
    :phone="contact.phone"
    :owner-name="contact.ownerName"
    :is-favourite="contact.isFavourite"
    @update-favourite="contact.isFavourite=updateFavourite($event)"
> </contact>


<script setup>
    // lets say some other code is present, not emphasizing on that 

    function updateFavourite(dataFromChildComponent) 
    {
        return !dataFromChildComponent;
    }
</script>
```

```javascript 

// child component code 
<template>
  <div class="container">
    <h3>Contact</h3>
    <p>Name is: {{ name }}</p>
    <p>Phone is: {{ phone }}</p>
    Hey, Hi Thanks for reaching out !
    Please contact on {{ email }}
    <p v-if="ownerName!==''">
        Owner name is {{ ownerName }}
    </p>
    <button v-bind:style="isFavourite? {'background-color':'red','color':'white'} : ''"
    v-on:click="toggleFavourite()">  
      {{ isFavourite? 'Remove From Favourites' : 'Add to Favourites' }}
    </button>
  </div>
</template>

    <script> 

        const props = defineProps[{

                "name":{
      type:String,
      required:true,
    },
    "phone":{
      type:Number,
      required:true,
    },
    "ownerName":{
      type:String,
      required:false,
      default:'N/A'
    },
    "isFavourite":{
      type:Boolean,
      required:false
    }
    }];
        
        // other code

        const emit = defineEmits(['update-favourite']);
        function toggleFavourite()
        {
            emit('update-favourite',props.isFavourite)
        }
        </script>
```
### [personal-2.1] - if we want to pass some other value which is part of the parent component while sending $event we can pass that also like updateFavourite($event, contacts.phoneNumber) I can also do that. by that that will send the value of that contact.phoneNumber which is specific to that prop.

### [personal-2.2] - Passing object data from child to parent is also super easy, all we have to do is to send the object from the parent while emitting instead of array.

### [personal-2.3] - with inline emit instead using one function which emits we can directly emit there itself inline when a button is clicked or some operation is performed.

### [personal-2.4] - when the Submit button is clicked, the handleForm is triggered which emits the object and that object is pushed into the contacts array which we are using a v-for to render the contact component since, the other data is also there so the component gets rendered and the new component will starts showing.

### [personal-2.5] - create a luckyNumber generator component and add that in the parent App.vue component which takes a max luckyNumber and based on the props passed it works.

###  [personal-2.6] - add the luckyNumber component in the Contact component, which requires the prop that will be passed from the parent commponent App.vue by taking the input from the inputbox from App.vue and based on that data entered in the input the luckyNumber gets generated, but here the luckyNumber component is removed from the parent now, but it is now added in the Contact.vue component but the data would be sent from the App.vue  so basically App.vue send the luckyNumber range from App.vue to contact.vue and contact.vue sends that to the grandChild that is LuckyNumber.vue and that's how it happens

### [personal-2.7] - 

### [important-things-to-remember] : when you pass a ref object as a prop to another component then by default vue unwraps that ref to the value, so the actual value is sent instead of ref object vue does this internally , but when you use provide and inject then vue doesn't unwrap the ref, you need to either send it as a refObject.value or send the ref and receieve that when using inject 

### [important-things-to-remember] : Inorder to use provide and inject we should have a parent and child relationship, if parent and child relationship is not present then we can't use the provide and inject, provide and inject is designed to use a object or value with out sending props to deep nested components, which is in-efficient. 

#### example: lets say we have componentB inside componentA but componentB has componentC as well inside it and componentC has ComponentD inside it, lets say when user enters something in the inputBox of componentA which is the most outer parent, then lets say we want to send that data entered from mostouterparentA to mostInnerChildComponentD then we can use provide and inject here, but this provide and inject can be used only for child parent relationships. cannot be used for sibiling components or we can't put provide inside the child and can inject that to parent.
```javascript 
const maxLuckyNum = inject('maxLuckyNumber'); // here we would get as a ref object itself no unwrapping happens. 

// to use that value you need to use like maxLuckyNum.value
// but inorder to be reflected properly in the places where you're injecting, while providing using provide you need to send the ref object not the refObject.value.
```
```javascript
Example: 
// parent where I am sending a ref

<input type = "number" v-model.number="maxNumber" />

<script setup>
  import {ref} from 'vue';
  const maxNumber = ref(0); 

  provide('maxLuckyNumber',maxNumber); // I should pass like maxNumber only not maxNumber.value, if i do maxNumber.value then it wont get properly updated when we dynamically change that maxNumber with any input like in this case.
  </script>
```

```javascript
  // child component where I am using that provided value.

  // inside the script setup
  const maxLuckyNum = inject('maxLuckyNumber');

  // If i want to use that maxLuckyNum then I need to use that as maxLuckyNum.value because it is sent as ref only no unwrapping happens for the provide and inject
```

### [personal-2.8] - passing a method as a prop to the child component and calling that method from the child component to perform some task.

### [personal-2.9] - we can be able to render two different component using <component :is=""/> and we can pass a computed property into that and based on some condition we can return a component from the computed property and that gets rendered and also using a single component we can dynamically pass props based on a condition also.