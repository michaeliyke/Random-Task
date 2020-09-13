flag = false

function one(){
	if (flag == true){
		document.getElementById('output').innerHTML= '1'
	} else{
		let cur = document.getElementById('output').innerHTML + '1'
		document.getElementById('output').innerHTML= cur
	}
	flag = false

}

function two(){
	if (flag == true){
		document.getElementById('output').innerHTML= '2'
	} else{
		let cur = document.getElementById('output').innerHTML + '2'
		document.getElementById('output').innerHTML= cur
	}
	flag = false

}

function three(){
	if (flag == true){
		document.getElementById('output').innerHTML= '3'
	} else{
		let cur = document.getElementById('output').innerHTML + '3'
		document.getElementById('output').innerHTML= cur
	}
	flag = false

}

function four(){
	if (flag == true){
		document.getElementById('output').innerHTML= '4'
	} else{
		let cur = document.getElementById('output').innerHTML + '4'
		document.getElementById('output').innerHTML= cur
	}
	flag = false

}

function five(){
	if (flag == true){
		document.getElementById('output').innerHTML= '5'
	} else{
		let cur = document.getElementById('output').innerHTML + '5'
		document.getElementById('output').innerHTML= cur
	}
	flag = false

}

function six(){
	if (flag == true){
		document.getElementById('output').innerHTML= '6'
	} else{
		let cur = document.getElementById('output').innerHTML + '6'
		document.getElementById('output').innerHTML= cur
	}
	flag = false

}

function seven(){
	if (flag == true){
		document.getElementById('output').innerHTML= '7'
	} else{
		let cur = document.getElementById('output').innerHTML + '7'
		document.getElementById('output').innerHTML= cur
	}
	flag = false

}

function eight(){
	if (flag == true){
		document.getElementById('output').innerHTML= '8'
	} else{
		let cur = document.getElementById('output').innerHTML + '8'
		document.getElementById('output').innerHTML= cur
	}
	flag = false

}

function nine(){
	if (flag == true){
		document.getElementById('output').innerHTML= '9'
	} else{
		let cur = document.getElementById('output').innerHTML + '9'
		document.getElementById('output').innerHTML= cur
	}
	flag = false

}

function zero(){
	if (flag == true){
		document.getElementById('output').innerHTML= '0'
	} else{
		let cur = document.getElementById('output').innerHTML + '0'
		document.getElementById('output').innerHTML= cur
	}
	flag = false

}

function times(){
	let cur = document.getElementById('output').innerHTML + '*'
	document.getElementById('output').innerHTML= cur
	flag = false

}
function division(){
	let cur = document.getElementById('output').innerHTML + '/'
	document.getElementById('output').innerHTML= cur
	flag = false

}
function plus(){
	let cur = document.getElementById('output').innerHTML + '+'
	document.getElementById('output').innerHTML= cur
	flag = false

}
function sub(){
	let cur = document.getElementById('output').innerHTML + '-'
	document.getElementById('output').innerHTML= cur
	flag = false

}
function solve(){
	let cur = eval(document.getElementById('output').innerHTML)
	document.getElementById('output').innerHTML= cur
	flag = true

}
function clea(){
	document.getElementById('output').innerHTML= ''

}