import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import ts from "typescript";

test("the public connection type accepts optional boolean auto-protection metadata", () => {
  const repoRoot = path.resolve(import.meta.dirname, "../..");
  const component = path.join(
    repoRoot,
    "src/app/(dashboard)/dashboard/providers/[id]/components/ConnectionRow.tsx"
  );
  const source = ts.createSourceFile(
    component,
    fs.readFileSync(component, "utf8"),
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX
  );
  const contract = source.statements.find(
    (statement): statement is ts.InterfaceDeclaration =>
      ts.isInterfaceDeclaration(statement) && statement.name.text === "ConnectionRowConnection"
  );
  assert.ok(contract, "ConnectionRow must export its public connection contract");

  // Compile the real exported declaration, without loading the unrelated JSX graph.
  // The Codex projection is opaque here; this contract concerns rate-limit metadata.
  const fixturePath = path.join(repoRoot, "tests/unit/connection-row-type-fixture.ts");
  const fixture = [
    "type CodexAccountPoolProjection = unknown;",
    contract.getText(source),
    "const automatic: ConnectionRowConnection = { rateLimitAutoProtected: true };",
    "const disabled: ConnectionRowConnection = { rateLimitAutoProtected: false };",
    "const omitted: ConnectionRowConnection = {};",
    "const flag: boolean | undefined = automatic.rateLimitAutoProtected;",
    "// @ts-expect-error Auto-protection metadata is boolean, not text.",
    'const invalid: ConnectionRowConnection = { rateLimitAutoProtected: "true" };',
  ].join("\n");
  const options: ts.CompilerOptions = {
    noEmit: true,
    strict: true,
    skipLibCheck: true,
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    types: [],
    lib: ["lib.es2022.d.ts"],
  };
  const host = ts.createCompilerHost(options);
  const getSourceFile = host.getSourceFile.bind(host);
  host.getSourceFile = (filename, languageVersion, onError, shouldCreateNewSourceFile) =>
    filename === fixturePath
      ? ts.createSourceFile(filename, fixture, languageVersion, true)
      : getSourceFile(filename, languageVersion, onError, shouldCreateNewSourceFile);
  const program = ts.createProgram([fixturePath], options, host);
  const errors = ts.getPreEmitDiagnostics(program).map((diagnostic) => ({
    code: diagnostic.code,
    message: ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"),
  }));
  assert.deepEqual(errors, []);
});
