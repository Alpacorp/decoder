/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

const e = "enter";
const i = "imes";
const a = "ai";
const o = "ober";
const u = "ufat";

const text = "mi casa es la mejor del barrio";

const encrypt = (texto) => {
  return texto.split("").map((letter) => {
    if (letter === "o") {
      return o;
    }
    if (letter === "a") {
      return a;
    }
    if (letter === "i") {
      return i;
    }
    if (letter === "e") {
      return e;
    }
    if (letter === "u") {
      return u;
    }
    return letter;
  });
};

const encrypted = encrypt(text);

const join_text = (text) => {
  return encrypt(text).join("");
};

const encrypted_text = join_text(text);
console.log("encrypted_text =>", encrypted_text);

const decrypt = (texto) => {
  return texto
    .map((letter) => {
      if (letter === o) {
        return "o";
      }
      if (letter === a) {
        return "a";
      }
      if (letter === i) {
        return "i";
      }
      if (letter === e) {
        return "e";
      }
      if (letter === u) {
        return "u";
      }
      return letter;
    })
    .join("");
};

const decrypted_text = decrypt(encrypted);
console.log("decrypted_text =>", decrypted_text);
