const options = [1,2,3,4,5];

function rec(last_index, arr_collected, sum, depth) {
  console.log({ last_index }, { arr_collected }, { sum });

  if (sum === 0 && depth === 0) {
    console.log('BOOM', arr_collected);
    return;
  }

  if (depth < 0) return;
  if (sum < 0) return;

  for (let i = last_index+1; i < options.length; i++) {
    let next_value = options[i];

    let try_sum = sum;
    try_sum -= next_value;
    let arr_collected_extended = [...arr_collected, next_value];

    rec(i, arr_collected_extended, try_sum, depth - 1);
  }
}

function test(){

  const target_sum = 9;
  const depth = 3;
  rec(-1, [], target_sum, depth);  
}

test();