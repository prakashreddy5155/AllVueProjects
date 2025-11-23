### v-show: 
#### This is to conditionally display something only when the passed value into v-show is true, or else it wont display that. if the value passed to v-show is false then the css property will be set as visibility:none, but it will be there in the DOM.

### v-if: 
#### This is to render the component only if the condition is satisfied, if the condition is not satisfied then the component for which we attached v-if that component itself is not rendered and wont be there in the DOM. the value that we pass to v-if is true then it renders or else dont render the component at all, if already rendered, then it destroys the component. and also we can use the ladder for this just like how we use in javascript like if, else if else like that.here it changes a little, v-if, v-else-if, v-else like that.

### v-else-if: 
#### used as a chain with v-if 

### v-else 
#### used as a chain with v-if or v-else-if

### v-html
#### this is helpful to render the javascript html string, that renders as html when we use v-html="javascriptProperty"

### structure of v-for
#### v-for="(value,key,index) in companyDetails

### when to add v-for :key attribute
#### we need to add v-for  :key attribute when we want all of other things along with the actual li to be shuffled along properly. because vue treats like this, lets say if we dont add :key and dont provide the unique attribute, then vue treats since only the data has changed due to sorting the array I dont have to explicitly change everything because there are same number of <li> and ul and no change to new things, so its better to just change the text for improving performance, but when we add :key="uniquePropery" then vue understands that we can't just change the data which can lead to discrepencies so it actually moves the li tags accordingly, so the input fields attached to the same <li> persists with it.

### These v-for v-html v-bind v-show v-if v-else-if v-else 
#### these are vue directives

### using v-bind to add styling to the css
#### inorder to use that we need to use v-bind:style= or :style= which is a shorthand, we can either use camelCase javascript way or standard css way but with keeping everything in single quotes both key and value of the css

### using v-bind to dynamically assign or not assign 
#### we can do that by making v-bind:class={cssStylingClassNamePresentInStyleTag: true or false}

### adding array of styles dynamically using v-bind:class=[something()? coloringObj: '',anotherStyleObj]
#### This works like this, we usually create one object named const coloringObj = { styleClassName : true/false, styleClassName: true/false} and then we can add that coloringObj in the v-bind:class=[something()? coloringObj : '',anotherStyleObj]

### to add a click listener to the button
#### to add a click listener to the button in vue, we need to add v-on:click="functionName" or v-on:click="functionName(argumentsToPassToFunction)" but this can be replaced with @click but not sure v-on: shorthand is @, need to check that.

### <a href="www.google.com" v-on:click.prevent=doSomethingFunc()> Go To Google</a>
#### the above code triggers the method instead of triggering to google.com which is the default behaviour, .prevent event modifier changes the default behaviour and adds custom functionality based on what we pass, here we are passing a method, v-on:click.stop is used to stop progagating to its parent because its parent may have different method, so if it propagates it executes the child method along with parent method leading to disturbing behaviour when they both have different method for each v-on:click

### key modifiers
#### key modifers are when .enter .enter.ctrl like that , we can listen for a specific click from the keyboard and based on that we can perform some operations, this is called as key modifiers.

### v-model 
#### this is used for two way data binding, it means it modifies and shows the data in the dom instantly. v-model means when we update the data in the js then UI gets updated and when we update the data in the UI then js gets updated UI <----> JS but you must use ref or else it wont work.

###  model modifiers like trim, number, lazy
#### v-model.trim is used for trimming the starting and trailing white spaces, v-model.number is used for converting that value into number typically does Number(input Data you provide), v-lazy is used for updating the content on that model only when it loses focus, usually it updates as soon as the value changes. 

### creating the basic counter with normal way.
#### using the normal way has some issues even if only the incremented value changes, but still the methods also runs because we are calling that method in the DOM, and due to which it also gets rendered, lets say this is a basic code where I am doing getFullName called, but if there is an api call or cpu intensive task is there, then this code would be pretty much inefficient, so that is why we should put the methods that we are actively rendering inside the computed properties because computed property will check what are the dependends of that method, and those will only re-run that method when those dependends change.

### how the methods inside the computed properties work
#### if you create an arrow function inside a computed property then that will only be re-rendered when the dependent properties inside that computed property method would change, else that would not change and stays the same. Everytime it checks whether those dependent things are changed or not and based on that it re-renders.

### we can check the previous data of the computed property by doing computed((prev)=>{ prev holds the computed property previous  value. through that previous value we can perform some operations if we want.})