/*EXPECTED
ok
*/
class _Main {
	static function main (args : string[]) : void {
		function foo () : Enumerable.<number> {
			yield 1;
			yield 2;
			yield 3;
		}

		var g = foo();
		g.next();
		g.next();
		g.next();

		try {
			g.next();
		} catch (e : StopIteration) {
			log "ok";
		}
	}
}
