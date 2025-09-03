function verif() {
    nom=document.getElementById("name").value
    message=document.getElementById("message").value
    
    if (nom.length==0 || nom!="ghofrane") {
        alert("check the name")
        return false
    }
   
    if (nom="ghofrane") {
        document.getElementById("message").value="So normally u're seeing this on ur birthday, I wanted to say happy birthday ghofrantiii nhebekk barchaa still love u, u're the most gorgeous girl w i could never forget about you, taarkna, blokitk,blokitni,etc.. Ama after everything i still love you w i keep thinking about all the moments we had ; funny moments, sad moments, moments where u stood up with me. I will never forget all of this. S7i7 it happened so fast f chahrin. W wallahi i'd love to go back to those moment i'd love to get you back ken theb betbiia so thats why i'm doing all of this.Tnajem tkoul proposal w f aid miledek w hani nest8al fli 9ritou f sif. w hope you like this w teebt aleha hahahah. Anyways nhebek barcha ghofrane w enjoy your birthday you deserve the world ya rouhyyyy w i still believe elli we could catch up nhebek barcha marokhraaaa"
        return true
    }
}
function verif1() {
    no=document.getElementById("no").checked
    yes=document.getElementById("yes").checked
    idk=document.getElementById("idk").value
    if (yes==true) {
        document.getElementById("idk").value="YAYYYYY am glad you do"
        return true
    }
    if (no==true) {
        document.getElementById("idk").value="samahny w hope next time i could do better"
    }
    if (yes==false && no==false) {
        alert("check yes/no")
        return false
    }
}
function verif2() {
    noo=document.getElementById("noo").checked
    yess=document.getElementById("yess").checked
    yessir=document.getElementById("yessir").value
    if (yess==true) {
        document.getElementById("yessir").value="just text me 'yes' and i'll understand it"
    }
    if (noo==true) {
        document.getElementById("yessir").value="sorry i tried my best"
    }
    if (yess==false && noo==false) {
        alert("check yes/no")
        return false
    }
}