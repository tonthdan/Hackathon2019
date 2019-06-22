const latex = require('node-latex')
const fs = require('fs')

var latexThing = '\n\\documentclass{article}\n\\begin{document}'
var name = "Jose Garay"
var otherLatexThing = '\n\\end{document}'

let input = latexThing + name + otherLatexThing 
// const input = fs.createReadStream('test.tex')
const output = fs.createWriteStream('output.pdf')
const pdf = latex(input) 


pdf.pipe(output)
pdf.on('error', err => console.error(err))
pdf.on('finish', () => console.log('PDF generated!'))