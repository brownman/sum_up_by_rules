
function check_to_sum(arr_collected, array_substructed, sum, depth) {
  console.log(
    "got",
    { arr_collected },
    { array_substructed },
    { sum },
    { depth }
  );

  if (sum == 0 && depth == 0) {
    return console.log("BINGO", arr_collected);
  }

  if (depth == 0) {
    return;
  }

  if (sum < 0) {
  } else {
    const arr_length = array_substructed.length;

    for (let i = 0; i < arr_length; i++) {
      let array_substructed_clone = [...array_substructed]; //clone Array

      let num = array_substructed_clone[i];
      array_substructed_clone.splice(0, i + 1); // change the array: remove items till index i (included) for getting 1 permutation per solution.

      let arr_collected_cloned = [...arr_collected];
      arr_collected_cloned.push(num);

      check_to_sum(
        arr_collected_cloned,
        [...array_substructed_clone],
        sum - num,
        depth - 1
      );
    }
  }
}

function test(){
    array_all = [1, 2, 3, 4, 5];
    sum = 9;
    depth = 3;
    check_to_sum([], array_all, sum, depth);
}


test();