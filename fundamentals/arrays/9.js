// The oddities function is returning a new array; the array literal being used for the comparison
// is a different array, so the strict equality operator is not going to consider them equal. The 
// strict equality operator checks for object equality, not value equality. 
//
