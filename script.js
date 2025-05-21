function wordToNumber(text) {
    const smallNumbers = {
      "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4,
      "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9,
      "ten": 10, "eleven": 11, "twelve": 12, "thirteen": 13,
      "fourteen": 14, "fifteen": 15, "sixteen": 16, "seventeen": 17,
      "eighteen": 18, "nineteen": 19
    };
  
    const tens = {
      "twenty": 20, "thirty": 30, "forty": 40, "fifty": 50,
      "sixty": 60, "seventy": 70, "eighty": 80, "ninety": 90
    };
  
    const magnitudes = {
      "hundred": 100,
      "thousand": 1000,
      "million": 1000000
    };
  
    const words = text.toLowerCase().replace(/-/g, ' ').split(/\s+/);
    let result = 0;
    let current = 0;
  
    for (let word of words) {
      if (smallNumbers[word] != null) {
        current += smallNumbers[word];
      } else if (tens[word] != null) {
        current += tens[word];
      } else if (word === "hundred") {
        current *= 100;
      } else if (magnitudes[word] != null) {
        current *= magnitudes[word];
        result += current;
        current = 0;
      }
    }
  
    return result + current;
  }
  
  function convertWordToNumber() {
    const input = document.getElementById("wordInput").value.trim();
    const output = wordToNumber(input);
    document.getElementById("result").textContent = isNaN(output)
      ? "Invalid input. Please try again."
      : `Result: ${output}`;
  }