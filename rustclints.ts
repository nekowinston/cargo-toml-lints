export const allowedByDefault = [
  "absolute_paths_not_starting_with_crate",
  "box_pointers",
  "elided_lifetimes_in_paths",
  "explicit_outlives_requirements",
  "ffi_unwind_calls",
  "fuzzy_provenance_casts",
  "keyword_idents",
  "let_underscore_drop",
  "lossy_provenance_casts",
  "macro_use_extern_crate",
  "meta_variable_misuse",
  "missing_abi",
  "missing_copy_implementations",
  "missing_debug_implementations",
  "missing_docs",
  "multiple_supertrait_upcastable",
  "must_not_suspend",
  "non_ascii_idents",
  "non_exhaustive_omitted_patterns",
  "rust_2021_incompatible_closure_captures",
  "rust_2021_incompatible_or_patterns",
  "rust_2021_prefixes_incompatible_syntax",
  "rust_2021_prelude_collisions",
  "single_use_lifetimes",
  "trivial_casts",
  "trivial_numeric_casts",
  "unit_bindings",
  "unnameable_types",
  "unreachable_pub",
  "unsafe_code",
  "unsafe_op_in_unsafe_fn",
  "unstable_features",
  "unused_crate_dependencies",
  "unused_extern_crates",
  "unused_import_braces",
  "unused_lifetimes",
  "unused_macro_rules",
  "unused_qualifications",
  "unused_results",
  "unused_tuple_struct_fields",
  "variant_size_differences,",
];

export const warnByDefault = [
  "ambiguous_glob_imports",
  "ambiguous_glob_reexports",
  "ambiguous_wide_pointer_comparisons",
  "anonymous_parameters",
  "array_into_iter",
  "asm_sub_register",
  "async_fn_in_trait",
  "bad_asm_style",
  "bare_trait_objects",
  "break_with_label_and_loop",
  "byte_slice_in_packed_struct_with_derive",
  "clashing_extern_declarations",
  "coherence_leak_check",
  "confusable_idents",
  "const_evaluatable_unchecked",
  "const_item_mutation",
  "const_patterns_without_partial_eq",
  "dead_code",
  "deprecated",
  "deprecated_where_clause_location",
  "deref_into_dyn_supertrait",
  "deref_nullptr",
  "drop_bounds",
  "dropping_copy_types",
  "dropping_references",
  "duplicate_macro_attributes",
  "dyn_drop",
  "elided_lifetimes_in_associated_constant",
  "ellipsis_inclusive_range_patterns",
  "exported_private_dependencies",
  "for_loops_over_fallibles",
  "forbidden_lint_groups",
  "forgetting_copy_types",
  "forgetting_references",
  "function_item_references",
  "hidden_glob_reexports",
  "illegal_floating_point_literal_pattern",
  "improper_ctypes",
  "improper_ctypes_definitions",
  "incomplete_features",
  "indirect_structural_match",
  "inline_no_sanitize",
  "internal_features",
  "invalid_doc_attributes",
  "invalid_from_utf8",
  "invalid_macro_export_arguments",
  "invalid_nan_comparisons",
  "invalid_value",
  "irrefutable_let_patterns",
  "large_assignments",
  "late_bound_lifetime_arguments",
  "legacy_derive_helpers",
  "map_unit_fn",
  "mixed_script_confusables",
  "named_arguments_used_positionally",
  "no_mangle_generic_items",
  "non_camel_case_types",
  "non_fmt_panics",
  "non_shorthand_field_patterns",
  "non_snake_case",
  "non_upper_case_globals",
  "nontrivial_structural_match",
  "noop_method_call",
  "opaque_hidden_inferred_bound",
  "overlapping_range_endpoints",
  "path_statements",
  "pointer_structural_match",
  "private_bounds",
  "private_interfaces",
  "redundant_semicolons",
  "refining_impl_trait",
  "renamed_and_removed_lints",
  "repr_transparent_external_private_fields",
  "semicolon_in_expressions_from_macros",
  "special_module_name",
  "stable_features",
  "suspicious_auto_trait_impls",
  "suspicious_double_ref_op",
  "temporary_cstring_as_ptr",
  "trivial_bounds",
  "type_alias_bounds",
  "tyvar_behind_raw_pointer",
  "uncommon_codepoints",
  "unconditional_recursion",
  "undefined_naked_function_abi",
  "unexpected_cfgs",
  "unfulfilled_lint_expectations",
  "ungated_async_fn_track_caller",
  "uninhabited_static",
  "unknown_lints",
  "unknown_or_malformed_diagnostic_attributes",
  "unnameable_test_items",
  "unreachable_code",
  "unreachable_patterns",
  "unstable_name_collisions",
  "unstable_syntax_pre_expansion",
  "unsupported_calling_conventions",
  "unused_allocation",
  "unused_assignments",
  "unused_associated_type_bounds",
  "unused_attributes",
  "unused_braces",
  "unused_comparisons",
  "unused_doc_comments",
  "unused_features",
  "unused_imports",
  "unused_labels",
  "unused_macros",
  "unused_must_use",
  "unused_mut",
  "unused_parens",
  "unused_unsafe",
  "unused_variables",
  "useless_ptr_null_checks",
  "warnings",
  "where_clauses_object_safety",
  "while_true",
  "writes_through_immutable_pointer",
];

export const denyByDefault = [
  "ambiguous_associated_items",
  "arithmetic_overflow",
  "bindings_with_variant_name",
  "cenum_impl_drop_cast",
  "coinductive_overlap_in_coherence",
  "conflicting_repr_hints",
  "deprecated_cfg_attr_crate_type_name",
  "enum_intrinsics_non_enums",
  "ill_formed_attribute_input",
  "incomplete_include",
  "ineffective_unstable_trait_impl",
  "invalid_atomic_ordering",
  "invalid_from_utf8_unchecked",
  "invalid_reference_casting",
  "invalid_type_param_default",
  "let_underscore_lock",
  "long_running_const_eval",
  "macro_expanded_macro_exports_accessed_by_absolute_paths",
  "missing_fragment_specifier",
  "mutable_transmutes",
  "named_asm_labels",
  "no_mangle_const_items",
  "order_dependent_trait_objects",
  "overflowing_literals",
  "patterns_in_fns_without_body",
  "proc_macro_back_compat",
  "proc_macro_derive_resolution_fallback",
  "pub_use_of_private_extern_crate",
  "soft_unstable",
  "test_unstable_lint",
  "text_direction_codepoint_in_comment",
  "text_direction_codepoint_in_literal",
  "unconditional_panic",
  "undropped_manually_drops",
  "unknown_crate_types",
  "useless_deprecated",
];

export const allLints = [
  ...allowedByDefault,
  ...warnByDefault,
  ...denyByDefault,
];

export const lintLevels = ["allow", "warn", "deny", "forbid"];

export const lintLevelDocs = [
  `## allow

These lints exist, but by default, do nothing. For example, consider this
source:

\`\`\`rust
pub fn foo() {}
\`\`\`

Compiling this file produces no warnings:

\`\`\`bash
$ rustc lib.rs --crate-type=lib
$
\`\`\`

But this code violates the \`missing_docs\` lint.

These lints exist mostly to be manually turned on via configuration, as we'll
talk about later in this section.`,
  `## warn

The 'warn' lint level will produce a warning if you violate the lint. For example,
this code runs afoul of the \`unused_variables\` lint:

\`\`\`rust
pub fn foo() {
    let x = 5;
}
\`\`\`

This will produce this warning:

\`\`\`bash
$ rustc lib.rs --crate-type=lib
warning: unused variable: \`x\`
 --> lib.rs:2:9
  |
2 |     let x = 5;
  |         ^
  |
  = note: \`#[warn(unused_variables)]\` on by default
  = note: to avoid this warning, consider using \`_x\` instead
\`\`\``,
  `## deny

A 'deny' lint produces an error if you violate it. For example, this code
runs into the \`exceeding_bitshifts\` lint.

\`\`\`rust,no_run
fn main() {
    100u8 << 10;
}
\`\`\`

\`\`\`bash
$ rustc main.rs
error: bitshift exceeds the type's number of bits
 --> main.rs:2:13
  |
2 |     100u8 << 10;
  |     ^^^^^^^^^^^
  |
  = note: \`#[deny(exceeding_bitshifts)]\` on by default
\`\`\`

What's the difference between an error from a lint and a regular old error?
Lints are configurable via levels, so in a similar way to 'allow' lints,
warnings that are 'deny' by default let you allow them. Similarly, you may
wish to set up a lint that is \`warn\` by default to produce an error instead.
This lint level gives you that.`,
  `## forbid

'forbid' is a special lint level that fills the same role for 'deny' that
'force-warn' does for 'warn'. It's the same as 'deny' in that a lint at this
level will produce an error, but unlike the 'deny' level, the 'forbid' level
can not be overridden to be anything lower than an error.  However, lint
levels may still be capped with \`--cap-lints\` (see below) so \`rustc --cap-lints warn\`
will make lints set to 'forbid' just warn.`,
];
