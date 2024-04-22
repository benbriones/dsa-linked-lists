import { LLStr } from "../common/ll";

/** return average (mean) of list values.
 *
 * Returns 0 for empty list.
 **/

function average(lst: LLStr): number {
  if (lst.length === 0) {
    return 0;
  }

  let sum = 0;
  let current = lst.head;

  while(current !== null) {
    sum += Number(current.val);
    current = current.next;
  }

  return sum / lst.length;
}

export { average };