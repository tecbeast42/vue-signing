# vue-signing
Easily record an online signature with canvas elements

# Usage

Check the demo directory on [Github](https://github.com/tecbeast42/vue-signing/tree/master/demo)

`<vue-signing v-model="signature"></vue-signing>`

The model will contain an easy saveable image string. Like this: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAYAAAH0CAYAAACuOC9sAAAgAElEQVR4Xu3de6xt61k ... `

You can specify a width and height in px over the props. Defaults for height is 500px and default for width is 100% width of parent element.

`<vue-signing v-model="signature" :width="200" :height="500"></vue-signing>`

# Requirements

Vue 2+

# Installation

`npm install vue-signing`
