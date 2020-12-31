module.exports = {
	"environment-name": "sample-enironment",
	"modules": {
		"p": "process",
	},
	"context": {
		"welcomeText": "hello",
		"arr": [1, 2, 3],
		"sayHello": (str) => {
			console.log(str)
		}
	},
	"launch-options": [
		{
			"option-name": "username",
			"prompt": "What is your name? ",
			"type": "text",
		},
		{
			"option-name": "isDevelopment",
			"prompt": "Load development environment? ",
			"type": "choice",
			"choices": ["yes", "no"],
			"formatter": (answer) => {
				if (answer === "yes")
					return true
				return false
			}
		}
	],
	"on-load-scripts": [
		(context) => {
			if (context.isDevelopment) {
				console.log('Plumber is now running on development environment')
			} else {
				console.log('Plumber is now running on production environment')
			}
			context.sayHello(`${context.welcomeText} ${context.username}`)
		}
	],
	"on-exit-scripts": [
		(context) => {
			console.log('This script runs on exit')
		}
	]
}