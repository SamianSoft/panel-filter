(function (){
	'use strict';

	class PanelFilter extends Polymer.Element {
		static get is () { return 'panel-filter'; }

		static get config () {
			return {
				properties: {

					/**
					* Variable for reset filters.
					*/
					search: {
						type: String
					},

					/**
					 * Variable for reset filters.
					 */
					numbersearch: {
						type : Number
					},

					/**
					* The z-depth of this element, from 0-5. Setting to 0 will remove the
					* shadow, and each increasing number greater than 0 will be "deeper"
					* than the last.
					*
					* @attribute elevation
					* @type number
					* @default 1
					*/
					elevation: {
						type: Number,
						reflectToAttribute: true,
						value: 1
					}
				}
			};
		} // end config

		/**
		 * reset panel-filter.
		 */
		_resetfilter () {
			this.search = "";
			this.numbersearch = "";

			var select = this.querySelectorAll('.checkchange');
			for (var i = 0; i<=5; i++) {
				select[i].checked = false;
			}

			var dropselect = this.$$('#dropdown');
			// console.log("1" , dropselect);
			dropselect.selectedItem  = null;
			// console.log("2" , dropselect);
		}
	}

	customElements.define(PanelFilter.is, PanelFilter);
})();
