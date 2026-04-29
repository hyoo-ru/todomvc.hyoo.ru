declare namespace $ {

	export class $mol_hotkey extends $mol_plugin {
		keydown( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_hotkey['keydown'] > ): ReturnType< $mol_hotkey['keydown'] >,
		})  & ReturnType< $mol_plugin['event'] >
		key( ): Record<string, any>
		mod_ctrl( ): boolean
		mod_alt( ): boolean
		mod_shift( ): boolean
	}
	
}

//# sourceMappingURL=hotkey.view.tree.d.ts.map
declare namespace $ {

	type $mol_hotkey__mod_ctrl_mol_string_1 = $mol_type_enforce<
		ReturnType< $mol_string['submit_with_ctrl'] >
		,
		ReturnType< $mol_hotkey['mod_ctrl'] >
	>
	type $mol_hotkey__key_mol_string_2 = $mol_type_enforce<
		({ 
			enter( next?: ReturnType< $mol_string['submit'] > ): ReturnType< $mol_string['submit'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	export class $mol_string extends $mol_view {
		selection_watcher( ): any
		error_report( ): any
		disabled( ): boolean
		value( next?: string ): string
		value_changed( next?: ReturnType< $mol_string['value'] > ): ReturnType< $mol_string['value'] >
		hint( ): string
		hint_visible( ): ReturnType< $mol_string['hint'] >
		spellcheck( ): boolean
		autocomplete_native( ): string
		selection_end( ): number
		selection_start( ): number
		keyboard( ): string
		enter( ): string
		length_max( ): number
		type( next?: string ): string
		event_change( next?: any ): any
		submit_with_ctrl( ): boolean
		submit( next?: any ): any
		Submit( ): $mol_hotkey
		dom_name( ): string
		enabled( ): boolean
		minimal_height( ): number
		autocomplete( ): boolean
		selection( next?: readonly(number)[] ): readonly(number)[]
		auto( ): readonly(any)[]
		field( ): ({ 
			'disabled': ReturnType< $mol_string['disabled'] >,
			'value': ReturnType< $mol_string['value_changed'] >,
			'placeholder': ReturnType< $mol_string['hint_visible'] >,
			'spellcheck': ReturnType< $mol_string['spellcheck'] >,
			'autocomplete': ReturnType< $mol_string['autocomplete_native'] >,
			'selectionEnd': ReturnType< $mol_string['selection_end'] >,
			'selectionStart': ReturnType< $mol_string['selection_start'] >,
			'inputMode': ReturnType< $mol_string['keyboard'] >,
			'enterkeyhint': ReturnType< $mol_string['enter'] >,
		})  & ReturnType< $mol_view['field'] >
		attr( ): ({ 
			'maxlength': ReturnType< $mol_string['length_max'] >,
			'type': ReturnType< $mol_string['type'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			input( next?: ReturnType< $mol_string['event_change'] > ): ReturnType< $mol_string['event_change'] >,
		})  & ReturnType< $mol_view['event'] >
		plugins( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=string.view.tree.d.ts.map
declare namespace $ {

	export class $mol_speck extends $mol_view {
		value( ): any
		theme( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=speck.view.tree.d.ts.map
declare namespace $ {

	type $mol_speck__value_mol_button_1 = $mol_type_enforce<
		ReturnType< $mol_button['error'] >
		,
		ReturnType< $mol_speck['value'] >
	>
	export class $mol_button extends $mol_view {
		event_activate( next?: any ): any
		activate( next?: ReturnType< $mol_button['event_activate'] > ): ReturnType< $mol_button['event_activate'] >
		clicks( next?: any ): any
		event_key_press( next?: any ): any
		key_press( next?: ReturnType< $mol_button['event_key_press'] > ): ReturnType< $mol_button['event_key_press'] >
		disabled( ): boolean
		tab_index( ): number
		hint( ): string
		hint_safe( ): ReturnType< $mol_button['hint'] >
		error( ): string
		enabled( ): boolean
		click( next?: any ): any
		event_click( next?: any ): any
		status( next?: readonly(any)[] ): readonly(any)[]
		event( ): ({ 
			click( next?: ReturnType< $mol_button['activate'] > ): ReturnType< $mol_button['activate'] >,
			dblclick( next?: ReturnType< $mol_button['clicks'] > ): ReturnType< $mol_button['clicks'] >,
			keydown( next?: ReturnType< $mol_button['key_press'] > ): ReturnType< $mol_button['key_press'] >,
		})  & ReturnType< $mol_view['event'] >
		attr( ): ({ 
			'disabled': ReturnType< $mol_button['disabled'] >,
			'role': string,
			'tabindex': ReturnType< $mol_button['tab_index'] >,
			'title': ReturnType< $mol_button['hint_safe'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		Speck( ): $mol_speck
	}
	
}

//# sourceMappingURL=button.view.tree.d.ts.map
declare namespace $ {

	export class $mol_link extends $mol_view {
		uri_toggle( ): string
		hint( ): string
		hint_safe( ): ReturnType< $mol_link['hint'] >
		target( ): string
		file_name( ): string
		current( ): boolean
		relation( ): string
		event_click( next?: any ): any
		click( next?: ReturnType< $mol_link['event_click'] > ): ReturnType< $mol_link['event_click'] >
		uri( ): string
		dom_name( ): string
		uri_off( ): string
		uri_native( ): any
		external( ): boolean
		attr( ): ({ 
			'href': ReturnType< $mol_link['uri_toggle'] >,
			'title': ReturnType< $mol_link['hint_safe'] >,
			'target': ReturnType< $mol_link['target'] >,
			'download': ReturnType< $mol_link['file_name'] >,
			'mol_link_current': ReturnType< $mol_link['current'] >,
			'rel': ReturnType< $mol_link['relation'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		arg( ): Record<string, any>
		event( ): ({ 
			click( next?: ReturnType< $mol_link['click'] > ): ReturnType< $mol_link['click'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=link.view.tree.d.ts.map
declare namespace $ {

	export class $mol_button_typed extends $mol_button {
		minimal_height( ): number
		minimal_width( ): number
	}
	
}

//# sourceMappingURL=typed.view.tree.d.ts.map
declare namespace $ {

	export class $mol_button_minor extends $mol_button_typed {
	}
	
}

//# sourceMappingURL=minor.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_mol_check_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_check extends $mol_button_minor {
		checked( next?: boolean ): boolean
		aria_checked( ): string
		aria_role( ): string
		Icon( ): any
		title( ): string
		Title( ): $mol_view
		label( ): readonly(any)[]
		attr( ): ({ 
			'mol_check_checked': ReturnType< $mol_check['checked'] >,
			'aria-checked': ReturnType< $mol_check['aria_checked'] >,
			'role': ReturnType< $mol_check['aria_role'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		sub( ): readonly($mol_view_content)[]
	}
	
}

//# sourceMappingURL=check.view.tree.d.ts.map
declare namespace $ {

	export class $mol_scroll extends $mol_view {
		tabindex( ): number
		event_scroll( next?: any ): any
		scroll_top( next?: number ): number
		scroll_left( next?: number ): number
		attr( ): ({ 
			'tabindex': ReturnType< $mol_scroll['tabindex'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			scroll( next?: ReturnType< $mol_scroll['event_scroll'] > ): ReturnType< $mol_scroll['event_scroll'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=scroll.view.tree.d.ts.map
declare namespace $ {

	export class $mol_paragraph extends $mol_view {
		line_height( ): number
		letter_width( ): number
		width_limit( ): number
		row_width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=paragraph.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__style_mol_list_1 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_before'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__style_mol_list_2 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_after'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	export class $mol_list extends $mol_view {
		gap_before( ): number
		Gap_before( ): $mol_view
		Empty( ): $mol_view
		gap_after( ): number
		Gap_after( ): $mol_view
		rows( ): readonly($mol_view)[]
		render_visible_only( ): boolean
		render_over( ): number
		sub( ): ReturnType< $mol_list['rows'] >
		item_height_min( id: any): number
		item_width_min( id: any): number
		view_window_shift( next?: number ): number
		view_window( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $ {

	export class $mol_bar extends $mol_view {
	}
	
}

//# sourceMappingURL=bar.view.tree.d.ts.map
declare namespace $ {

	type $mol_paragraph__minimal_height_hyoo_todomvc_1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_paragraph['minimal_height'] >
	>
	type $mol_paragraph__title_hyoo_todomvc_2 = $mol_type_enforce<
		ReturnType< $hyoo_todomvc['title'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_check__enabled_hyoo_todomvc_3 = $mol_type_enforce<
		ReturnType< $hyoo_todomvc['head_complete_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__checked_hyoo_todomvc_4 = $mol_type_enforce<
		ReturnType< $hyoo_todomvc['completed_all'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__title_hyoo_todomvc_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check['title'] >
	>
	type $mol_string__hint_hyoo_todomvc_6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_hyoo_todomvc_7 = $mol_type_enforce<
		ReturnType< $hyoo_todomvc['task_title_new'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__submit_hyoo_todomvc_8 = $mol_type_enforce<
		ReturnType< $hyoo_todomvc['add'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_view__minimal_height_hyoo_todomvc_9 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub_hyoo_todomvc_10 = $mol_type_enforce<
		ReturnType< $hyoo_todomvc['Head_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $hyoo_todomvc_task_row__completed_hyoo_todomvc_11 = $mol_type_enforce<
		ReturnType< $hyoo_todomvc['task_completed'] >
		,
		ReturnType< $hyoo_todomvc_task_row['completed'] >
	>
	type $hyoo_todomvc_task_row__title_hyoo_todomvc_12 = $mol_type_enforce<
		ReturnType< $hyoo_todomvc['task_title'] >
		,
		ReturnType< $hyoo_todomvc_task_row['title'] >
	>
	type $hyoo_todomvc_task_row__drop_hyoo_todomvc_13 = $mol_type_enforce<
		ReturnType< $hyoo_todomvc['task_drop'] >
		,
		ReturnType< $hyoo_todomvc_task_row['drop'] >
	>
	type $mol_list__rows_hyoo_todomvc_14 = $mol_type_enforce<
		ReturnType< $hyoo_todomvc['task_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_paragraph__title_hyoo_todomvc_15 = $mol_type_enforce<
		ReturnType< $hyoo_todomvc['pending_message'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_link__title_hyoo_todomvc_16 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__arg_hyoo_todomvc_17 = $mol_type_enforce<
		({ 
			'completed': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__title_hyoo_todomvc_18 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__arg_hyoo_todomvc_19 = $mol_type_enforce<
		({ 
			'completed': string,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__title_hyoo_todomvc_20 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__arg_hyoo_todomvc_21 = $mol_type_enforce<
		({ 
			'completed': string,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_bar__sub_hyoo_todomvc_22 = $mol_type_enforce<
		ReturnType< $hyoo_todomvc['filterOptions'] >
		,
		ReturnType< $mol_bar['sub'] >
	>
	type $mol_button_minor__enabled_hyoo_todomvc_23 = $mol_type_enforce<
		ReturnType< $hyoo_todomvc['sweep_enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click_hyoo_todomvc_24 = $mol_type_enforce<
		ReturnType< $hyoo_todomvc['sweep'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_hyoo_todomvc_25 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_hyoo_todomvc_26 = $mol_type_enforce<
		ReturnType< $hyoo_todomvc['foot_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows_hyoo_todomvc_27 = $mol_type_enforce<
		ReturnType< $hyoo_todomvc['panels'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_list__rows_hyoo_todomvc_28 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $hyoo_todomvc extends $mol_scroll {
		Title( ): $mol_paragraph
		head_complete_enabled( ): boolean
		completed_all( next?: boolean ): boolean
		Head_complete( ): $mol_check
		task_title_new( next?: string ): string
		add( next?: any ): any
		Add( ): $mol_string
		Head_content( ): readonly(any)[]
		Head( ): $mol_view
		task_completed( id: any, next?: boolean ): boolean
		task_title( id: any, next?: string ): string
		task_drop( id: any, next?: any ): any
		Task_row( id: any): $hyoo_todomvc_task_row
		task_rows( ): readonly($mol_view)[]
		List( ): $mol_list
		pending_message( ): string
		Pending( ): $mol_paragraph
		Filter_all( ): $mol_link
		Filter_active( ): $mol_link
		Filter_completed( ): $mol_link
		filterOptions( ): readonly(any)[]
		Filter( ): $mol_bar
		sweep_enabled( ): boolean
		sweep( next?: any ): any
		sweep_label( ): string
		Sweep( ): $mol_button_minor
		foot_content( ): readonly(any)[]
		Foot( ): $mol_view
		panels( ): readonly(any)[]
		Panel( ): $mol_list
		Page( ): $mol_list
		title( ): string
		attr( ): ({ 
			'mol_theme': string,
		})  & ReturnType< $mol_scroll['attr'] >
		sub( ): readonly(any)[]
	}
	
	type $mol_check__checked_hyoo_todomvc_task_row_1 = $mol_type_enforce<
		ReturnType< $hyoo_todomvc_task_row['completed'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_string__hint_hyoo_todomvc_task_row_2 = $mol_type_enforce<
		ReturnType< $hyoo_todomvc_task_row['title_hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_hyoo_todomvc_task_row_3 = $mol_type_enforce<
		ReturnType< $hyoo_todomvc_task_row['title'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_button_typed__sub_hyoo_todomvc_task_row_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_typed['sub'] >
	>
	type $mol_button_typed__click_hyoo_todomvc_task_row_5 = $mol_type_enforce<
		ReturnType< $hyoo_todomvc_task_row['drop'] >
		,
		ReturnType< $mol_button_typed['click'] >
	>
	export class $hyoo_todomvc_task_row extends $mol_view {
		completed( next?: boolean ): boolean
		Complete( ): $mol_check
		title_hint( ): string
		title( next?: string ): string
		Title( ): $mol_string
		drop( next?: any ): any
		Drop( ): $mol_button_typed
		minimal_height( ): number
		attr( ): ({ 
			'hyoo_todomvc_task_row_completed': ReturnType< $hyoo_todomvc_task_row['completed'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=todomvc.view.tree.d.ts.map
export = $;
//# sourceMappingURL=web.d.ts.map
