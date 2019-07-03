
Ractive.components.switch = Ractive.extend({
	isolated: true,
	template: `

	<div class="dbk-switch {{class}}" style="{{style}}">
		<label>
			<input type="checkbox" checked="{{value}}">
			<span class="switchbar"></span>
		</label>
	</div>
  `
});
