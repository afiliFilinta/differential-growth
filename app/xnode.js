define(() => {

	function create(x, y) {
		return {
			x,
			y
		}
	}

	function clone({
		x,
		y
	}) {
		return create(x, y)
	}

	function add(v, {
		x,
		y
	}) {
		v.x += x
		v.y += y

		return v
	}

	function sub(v, {
		x,
		y
	}) {
		v.x -= x
		v.y -= y

		return v
	}

	function scale(v, factor) {
		v.x *= factor
		v.y *= factor

		return v
	}

	function length({
		x,
		y
	}) {
		return Math.sqrt(x * x + y * y)
	}

	function distance(v1, v2) {
		const dx = v1.x - v2.x
		const dy = v1.y - v2.y

		return Math.sqrt(dx * dx + dy * dy)
	}

	return {
		create,
		clone,
		add,
		sub,
		scale,
		length,
		distance,
		deneme,
	};
});