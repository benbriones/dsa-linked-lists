import { LLStr, LLNodeStr } from "../common/ll";


/** reverseInPlace() reverse list in place.*/

function reverseInPlace(lst: LLStr): void {

  if (lst.length <= 1) {
    return;
  }

  let prev = lst.head!;
  let current = lst.head!.next

  prev.next = null;

  while (current !== null) {
    let nextCurr = current.next;
    current.next = prev;
    prev = current;
    current = nextCurr
  }

  [lst.head, lst.tail] = [lst.tail, lst.head];
}


export { reverseInPlace };