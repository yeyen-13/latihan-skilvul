// let dataqueat = ""
// let quest;
// do{
// quest = prompt("Sebutkan kepanjangan dari nama IB ");
// if(dataqueat = Impact Byte){
//    document.write(`Selamat jawaban kamu benar ${dataqueat}`)
// }
// }

let quest;
//  = prompt("Sebutkan kepanjangan dari nama IB");
do {
  quest = prompt("Sebutkan kepanjangan dari nama IB");
  if (quest === "Impact Byte") {
    alert("Selamat jawaban kamu benar");
    break;
  } else if (quest === "") alert("kamu belum mengisi jawaban");
} while (quest);

{
}
