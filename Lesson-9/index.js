var text = "Bangla"
var len = text.length
document.write("Number of character is: " + len)
// document.write("Number of character is: " + text.length)
document.write("</br>")
var inputMsg = prompt("Enter your name: ")
document.write("Number of character is: " + inputMsg.length)
document.write("</br>")
document.write(text.charAt(2))
document.write("</br>")
text = text.toUpperCase() // also we can use toLowerCase()
document.write(text)
document.write("</br>")
var text1 = "Hello"
var text2 = " Zarif"
document.write(text1.concat(text2))
document.write("</br>")
var slic = text.slice(2,5)
document.write(slic)
