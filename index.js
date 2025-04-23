import moment from "moment";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function menuUtama() {
  console.log("Silahkan Masukka Tanggal \n");

  rl.question("Masukkan Tanggal: ", (jawaban) => {
    updateDate(jawaban);
    // dateManual(jawaban);
    rl.close();
  });
}
menuUtama();

const updateDate = (date) => {
  try {
    const result = moment(date, "DD-MM-YYYY", true);
    if (result.isValid()) {
      const newResult = result.format("DD/MM/YYYY");
      console.log(`Nahhhh, ini baru bener. ${newResult}`);
      return;
    } else {
      const error = new Error("input_salah");
      throw error;
    }
  } catch (a) {
    if (a.message === false) {
      console.log("Format salah");
    }
    if (a.message === "input_salah") {
      console.log("salah..., harusnya DD/MM/YYYY, formatnya ");
    }
  }
};

// const dateManual = (date) => {
//   try {
//     const newDate = date.trim().split("-");
//     if (newDate.length !== 3) {
//       throw new Error("Format_salah");
//     }

//     const [day, month, years] = newDate;

//     if (
//       day.length < 1 ||
//       day.length > 2 ||
//       month.length < 1 ||
//       month.length > 2 ||
//       years.length !== 4
//     ) {
//       throw new Error("input_string");
//     }

//     const joinDate = newDate.join("/");
//     console.log(`nahh ini baru bener, Hasil format ulang anda ${joinDate}`);
//   } catch (error) {
//     if (error.message === "Format_salah") {
//       console.log("Format harus DD-YY-MMMM");
//     } else if (error.message === "input_string") {
//       console.log("coba di cek lagi, format anda salah, harus DD-YY-MMMM");
//     } else {
//       console.log("input invalid");
//     }
//   }
// };


