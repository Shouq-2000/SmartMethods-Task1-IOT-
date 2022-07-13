var SpeechRecognition = window.webkitSpeechRecognition
 var recognition = new SpeechRecognition()
 var textbox = $("#textbox")
 var instructions = $("#instr")
 var content = ""

 recognition.continuous = true

 recognition.onstart = function(){
    instructions.text('Voice Recognition is on')
 }
recognition.onspeechend = function () {
    instructions.text('No Activity')
}
 
recognition.onerror = function (){
    instructions.text('Try Again')

}

recognition.onresult = function (event) {
    var current = event.resultIndex 

   var transcript = event.results[current][0].transcript

   content += transcript

   textbox.val(content)
}

 $("#s-btn").click(function (event) {
    if(content.length) {
        content += ''

    }
    recognition.start()
  

 })

 textbox.on('input',function() {
    content = $(this).val()
 })