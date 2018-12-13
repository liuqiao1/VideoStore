// before
function acquireData(input) {
    const lines = input.split("\n");
    let firstLine = true;
    const result = [];
    for (const line of lines) {
      if (firstLine) {
        firstLine = false;
        continue;
      }
      if (line.trim() === "") continue;
      const record = line.split(",");
      if (record[1].trim() === "India") {
        result.push({city: record[0].trim(), phone: record[2].trim()});
      }
    }
    return result;
  }

// after
function ad(input) {
    // input.split('\n').filter(line => {
    //     const array = line.trim().split(',');
    //      return array[1] === 'India';
    // })

    const result = input.split('\n').map(line => {
        return line.trim().split(',');
    }).filter(line => line[1] === 'India').map(line => {return {
        city: line[0],
        phone: line[2]
    }});
}
// standards
function sd(input) {
    const lines = input.split('\n');
    return lines
            .slice(1)
            .filter(line => line.trim !== '')
            .map(line => line.split(","))
            .filter(fields => fields[1].trim() === "India")
            .map(fields => ({city: fields[0],trim(), phone: fields[2].trim}));
}