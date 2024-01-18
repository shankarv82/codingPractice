function* interleave() {
  const iterators = Array.from(arguments).map(x => x[Symbol.iterator]());
  let done;
  
  while (!done) {
    done = true;
    for (const iterator of iterators) {
      const next = iterator.next();
      if (!next.done) {
        yield next.value;
        done = false;
      }
    }
  } 
}
const x = interleave(['a','b','c','d'], [1,2]);
const result = [...x];
console.log(result)
