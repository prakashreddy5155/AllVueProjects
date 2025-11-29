### [personal-1.0] - nothing
### [personal-1.1] - used v-model which is used to attach a js variable and when we change the input then the actual data also gets changed.
### [personal-1.2] - v-bind is used to either display or pass something which is stored as a javascript variable into either anothr component or just display something dynamically using javascript for that we can use v-bind:href or v-bind:src, we can use that on any html attribute and it has a shortcut as well we can directly use :href or :src instead of writing v-bind:href or v-bind:src since v-bind is used heavily.

### [personal-1.3] -  v-bind,v-html,v-once, v-show, v-if, v-else-if, v-else to create the webpage 
#### v-bind : this is used to render the js dynamically  on any html attributes like src , href, a, anything

#### v-html: this is used to render the html wrapped as javascript string. lets say we have a string which is a html string, but we had put that inside javascript and we want to render that dynamically we can use v-html to render that html present in javascript string as html instead of displaying it as html text.

#### v-once: this is used to render that component or tag which you have applied v-once on only once, even if we have changed the underlying text.

### v-show: 
#### This is to conditionally display something only when the passed value into v-show is true, or else it wont display that. if the value passed to v-show is false then the css property will be set as display:none, but it will be there in the DOM if you inspect and see.

### v-if: 
#### This is to render the component only if the condition is satisfied, if the condition is not satisfied then the component for which we attached v-if that component itself is not rendered and wont be there in the DOM. the value that we pass to v-if is true then it renders or else dont render the component at all, if already rendered, then it destroys the component. and also we can use the ladder for this just like how we use in javascript like if, else if else like that.here it changes a little, v-if, v-else-if, v-else like that.

### v-else-if: 
#### used as a chain with v-if 

### v-else 
#### used as a chain with v-if or v-else-if

### basic v-for
####  v-for="(value,key,index) in iterable 
#### here, it has two cases: 
#### in arrays: index does not have anything but index here means the key , and the value is normal value.
#### in objects: index has meaning, the first key value pair has index : 0  and it goes on key is the property name and value is property value. 

### v-for using :key
#### we need to add v-for  :key attribute when we want all of other things along with the actual li to be shuffled along properly. because vue treats like this, lets say if we dont add :key and dont provide the unique attribute, then vue treats since only the data has changed due to sorting the array I dont have to explicitly change everything because there are same number of <li> and ul and no change to new things, so its better to just change the text for improving performance, but when we add :key="uniquePropery" then vue understands that we can't just change the data which can lead to discrepencies so it actually moves the li tags accordingly, so the input fields attached to the same <li> persists with it.

### v-bind:class="methodName()" to render css 
#### we can do this dynamically this method methodName() should written the css classes which are to be added by making them true and css classes which shouldn't be added by making them false, but if you add :class="dynamic()" this works properly, the method should have the css classes that needs to be returned to be eithr true or false and :class="[someObj() ? 'cssClasses':'' ]" here instead of cssClasses here you shouldn't provide another method which returns which classes should be rendered and all and another way is :class={cssClassName : true/false, cssClassName: true/false,{ cssClassName : true/false}} you can keep in different objects or comma separated same objects.