/*JSX_OPTS
--enable-generator-emulation
*/
/*EXPECTED
0
1
2
3
end
*/
class _Main {
	static function main (args : string[]) : void {

		function * iota (n : number) : number {
			var i = 0;
			do {
				yield i;
				i++;
			} while (i < n);
		}

		var g = iota(4);
		while (true) {
			var v = g.next();
			if (v.done)
				break;
			log v.value;
		}
		log "end";
	}
}
