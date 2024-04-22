/** IndexError: raised when index not found. */

class IndexError extends Error {
}

/**
 * NodeStr: node for a singly-linked list of string.
 *
 * - val
 * - next: next NodeStr or null
 */

class NodeStr {
  val: string;
  next: NodeStr | null;

  constructor(val: string) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Linked list of numbers.
 */

class LLStr {
  head: NodeStr | null;
  tail: NodeStr | null;
  length: number;

  constructor(vals: string[] = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (const val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val: string): void {
    const newNode = new NodeStr(val);

    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail!.next = newNode;
    }

    this.tail = newNode;
    this.length++;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val: string): void {
    const newNode = new NodeStr(val);

    newNode.next = this.head;
    this.head = newNode;

    if (this.tail === null) {
      this.tail = newNode;
    }

    this.length++;
  }

  /** pop(): return & remove last item.
   *
   * Throws IndexError on empty list.
   **/
  pop(): string {

    if (this.length === 0) {
      throw new IndexError("empty list");
    }

    let foundNodeVal = this.tail!.val;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head!;
      while (current.next !== this.tail) {
        current = current.next!;
      }
      this.tail = current;
      current.next = null;
    }

    this.length--;
    return foundNodeVal;
  }

  /** shift(): return & remove first item.
   *
   * Throws IndexError on empty list.
   **/

  shift(): string {

    if (this.length === 0) {
      throw new IndexError("empty list");
    }

    const currHeadVal = this.head!.val;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const newHead = this.head!.next!;
      this.head = newHead;
    }

    this.length--;
    return currHeadVal;
  }

  /** getAt(idx): get val at idx.
   *
   * Throws IndexError if not found.
   **/

  getAt(idx: number): string {

    if (idx >= this.length || idx < 0) {
      throw new IndexError("index out of bounds");
    }

    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current!.next;
    }

    return current!.val;
  }

  /** setAt(idx, val): set val at idx to val.
   *
   * Throws IndexError if not found.
   **/

  setAt(idx: number, val: string): void {
    if (idx >= this.length || idx < 0) {
      throw new IndexError("index out of bounds");
    }

    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current!.next;
    }

    current!.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx.
   *
   * Throws IndexError if not found.
   **/

  insertAt(idx: number, val: string): void {
    if ((idx > this.length) || idx < 0) {
      throw new IndexError("index out of bounds");
    }

    if (idx === 0) {
      this.unshift(val);
      return;
    }

    if (idx === this.length) {
      this.push(val);
      return;
    }

    const newNode = new NodeStr(val);

    let current = this.head;
    for (let i = 0; i < idx - 1; i++) {
      current = current!.next;
    }

    newNode.next = current!.next;
    current!.next = newNode;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx,
   *
   * Throws IndexError if not found.
   **/

  removeAt(idx: number): string {
    if (idx >= this.length || idx < 0) {
      throw new IndexError("index out of bounds");
    }

    if (idx === 0) {
      return this.shift();
    }

    if (idx === this.length - 1) {
      return this.pop();
    }

    let current = this.head;
    for (let i = 0; i < idx - 1; i++) {
      current = current!.next;
    }

    const foundVal = current!.next!.val;
    current!.next = current!.next!.next;
    this.length--;

    return foundVal;
  }

  /** toArray (useful for tests!) */

  toArray(): string[] {
    const out = [];
    let current = this.head;

    while (current) {
      out.push(current.val);
      current = current.next;
    }

    return out;
  }
}


export {
  IndexError,
  LLStr,
  NodeStr,
};