/*JSX_OPTS
--enable-generator-emulation
*/
/*EXPECTED
1
2
3
*/
class _Main {
	static function main (args : string[]) : void {
		function * foo () : number {
			yield 1;
			yield 2;
			yield 3;
		}

		var g = foo();
		log g.next().value;
		log g.next().value;
		log g.next().value;
	}
}

