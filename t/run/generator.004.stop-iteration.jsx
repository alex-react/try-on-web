/*JSX_OPTS
--enable-generator-emulation
*/
/*EXPECTED
ok
*/
class _Main {
	static function main (args : string[]) : void {
		function * foo () : number {
			yield 1;
			yield 2;
			yield 3;
		}

		var g = foo();
		g.next().value;
		g.next().value;
		g.next().value;

		if (g.next().done)
			log "ok";
	}
}
