const text = 'Lorem Ipsum is romeo slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren 60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk romeo desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten'

var url = "https://www.intecbrussel.be"
var company = "intec"
var myMessage = "           romeo          "
var PrintService
var myItems ="lapptop, desktop, mobile"

PrintService = text.length; //return length
PrintService = text.indexOf('1500s')
PrintService = text.lastIndexOf('printer')
PrintService = text.search('letterzetting')
PrintService = text.indexOf('romeo')
PrintService = text.lastIndexOf('romeo')
PrintService = text.slice(15,url.length)
PrintService = url.substring(12)
PrintService = url.slice(12)
PrintService = text.replace("romeo","010101010")
PrintService = text.replace(/romeo/g,"0101010")
PrintService = text.toUpperCase(0)
PrintService = text.toLowerCase(0)
PrintService = company.concat('brussel')
PrintService = company.trim()
PrintService = text.charAt(text.length-1)
PrintService = text[0]
PrintService = typeof myItems
PrintService = myItems.split(", ")
console.log(myMessage)
console.log(PrintService)

// IMPORTANT
