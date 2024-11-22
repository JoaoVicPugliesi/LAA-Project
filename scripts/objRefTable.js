const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Tilemap,
		C3.Plugins.Sprite,
		C3.Plugins.Button,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Button.Acts.SetCSSStyle,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetDefaultColor,
		C3.Plugins.System.Exps.rgba255,
		C3.Plugins.System.Acts.SetVar,
		C3.ScriptsInEvents.FolhaDeEventos1_Event32
	];
};
self.C3_JsPropNameTable = [
	{Mosaico: 0},
	{s1: 0},
	{s2: 0},
	{s4: 0},
	{s5: 0},
	{s6: 0},
	{s3: 0},
	{s7: 0},
	{b1: 0},
	{b2: 0},
	{b3: 0},
	{b7: 0},
	{b6: 0},
	{b5: 0},
	{b4: 0},
	{s8: 0},
	{s9: 0},
	{s10: 0},
	{s11: 0},
	{s12: 0},
	{s13: 0},
	{s14: 0},
	{s15: 0},
	{b8: 0},
	{b9: 0},
	{b10: 0},
	{b11: 0},
	{b12: 0},
	{b13: 0},
	{b14: 0},
	{b15: 0},
	{Sprite: 0},
	{Botão: 0},
	{node_inicial: 0},
	{node_final: 0}
];

self.InstanceType = {
	Mosaico: class extends self.ITilemapInstance {},
	s1: class extends self.ISpriteInstance {},
	s2: class extends self.ISpriteInstance {},
	s4: class extends self.ISpriteInstance {},
	s5: class extends self.ISpriteInstance {},
	s6: class extends self.ISpriteInstance {},
	s3: class extends self.ISpriteInstance {},
	s7: class extends self.ISpriteInstance {},
	b1: class extends self.IButtonInstance {},
	b2: class extends self.IButtonInstance {},
	b3: class extends self.IButtonInstance {},
	b7: class extends self.IButtonInstance {},
	b6: class extends self.IButtonInstance {},
	b5: class extends self.IButtonInstance {},
	b4: class extends self.IButtonInstance {},
	s8: class extends self.ISpriteInstance {},
	s9: class extends self.ISpriteInstance {},
	s10: class extends self.ISpriteInstance {},
	s11: class extends self.ISpriteInstance {},
	s12: class extends self.ISpriteInstance {},
	s13: class extends self.ISpriteInstance {},
	s14: class extends self.ISpriteInstance {},
	s15: class extends self.ISpriteInstance {},
	b8: class extends self.IButtonInstance {},
	b9: class extends self.IButtonInstance {},
	b10: class extends self.IButtonInstance {},
	b11: class extends self.IButtonInstance {},
	b12: class extends self.IButtonInstance {},
	b13: class extends self.IButtonInstance {},
	b14: class extends self.IButtonInstance {},
	b15: class extends self.IButtonInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Botão: class extends self.IButtonInstance {}
}