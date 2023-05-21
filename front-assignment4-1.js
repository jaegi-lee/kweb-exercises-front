const isValidNumber = num => {
    const testNumber = parseInt(num);
    if (!isFinite(testNumber) || isNaN(testNumber)) return false;
    else if (testNumber != num) return false;
    else if (testNumber >= 1 && testNumber <= 9) return true;
    else return false;
    };