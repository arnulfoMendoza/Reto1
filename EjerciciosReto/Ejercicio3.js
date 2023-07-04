function countNameRepetitions(names) {
    const name_counts = {};
  
    for (const name of names) {
      if (name_counts.hasOwnProperty(name)) {
        name_counts[name] += 1;
      } else {
        name_counts[name] = 1;
      }
    }
  
    const asterisk_representations = Object.entries(name_counts).map(([name, count]) => {
      return `${name}: "${repeat('*', count)}"`;
    });
    function repeat(string, count) {
        let repeated_string = "";
        for (let i = 0; i < count; i++) {
          repeated_string += string;
        }
        return repeated_string;
      }
      
  
    return asterisk_representations;
  }
  const names = ["Ricardo","Martha","Pedro","John","Mary","Mary","Juan"];
const result = countNameRepetitions(names);
console.log(result); 
