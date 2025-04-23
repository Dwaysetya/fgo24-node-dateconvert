import moment from "moment";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// console.log(moment("02-08-1999", "DD-MM-YYYY").format("DD/MM/YYYY"));

function menuUtama() {
  console.log("Silahkan Masukka Tanggal \n");

  rl.question("Masukkan Tanggal: ", (jawaban) => {
    updateDate(jawaban);
    rl.close;
  });
}
menuUtama();

const updateDate = (date) => {
  if (moment(date, "DD-MM-YYYY").isValid) {
    const result = moment(date, "DD-MM-YYYY").format("DD/MM/YYYY");
    console.log(result);
  } else {
    console.log("format tanggal harus DD-MM-YYYY");
  }
};
