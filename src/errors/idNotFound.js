function validaId(id)
{
	let exemplo=false;
	if(id.length==24) exemplo= /^[0-9a-fA-F]{24}$/.test(id);
	return exemplo;
}

module.export = validaId