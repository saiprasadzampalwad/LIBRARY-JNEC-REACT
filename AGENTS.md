# Ponytail Rules for Antigravity Agent

Before writing or editing code, stop at the first rung that holds:

1. **Does this need to exist?** → No: skip it (YAGNI).
2. **Already in this codebase?** → Reuse existing components, services, or utilities; do not rewrite.
3. **Stdlib does it?** → Use standard library functions.
4. **Native platform feature?** → Use native platform features (e.g., native HTML5 elements or platform APIs instead of heavy UI libraries).
5. **Installed dependency?** → Reuse existing packages in `package.json`, `pubspec.yaml`, or equivalent project manifests.
6. **One line?** → Keep implementation to a single concise line if possible.
7. **Only then:** Write the absolute minimum code that satisfies the requirement.

### Non-Negotiable Constraints
- **Safety & Quality First:** Trust-boundary validation, error handling, security checks, and accessibility must never be stripped away.
- **Context Awareness:** Trace the existing code paths before selecting a rung.