// describe('Split Array function', function() {
// 	it('is able to split an array into two halves', function() {
// 		expect(split([ 3, 2, 1, 4 ])).toEqual([ [ 3, 2 ], [ 1, 4 ] ]);
// 	});
// });
// describe('Merge function', function() {
// 	it('is able to merge two sorted arrays into one sorted array', function() {
// 		expect(merge([ 4 ], [ 3 ])).toEqual([ 3, 4 ]);
// 	});
// });
describe('merge soty', function() {
	it('is able to merge two sorted arrays into one sorted array', function() {
		expect(mergeSort([ 4, 3, 2, 1 ])).toEqual([ 1, 2, 3, 4 ]);
	});
});
