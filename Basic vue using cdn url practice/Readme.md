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