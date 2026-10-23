module.exports = {
  reject: [
    // js-yaml 5.x removed the named `types` export, which breaks this repo's build:
    // `The requested module 'js-yaml' does not provide an export named 'types'`.
    'js-yaml'
  ],
  // Majors are taken by default (no-preemptive-reject policy). TypeScript is the one
  // exception: the 7.x compiler is not supported by this repo's TS toolchain, so it is
  // held on the 6.x line until ts-jest/ts-node/ts-auto-mock catch up.
  //   - ts-jest@29 declares the peer range `typescript: ">=4.3 <7"`
  //   - ts-node@10.9.2 crashes on TS 7 with
  //     `TypeError: Cannot read properties of undefined (reading 'fileExists')`,
  //     which breaks `npm run build` (build:refactor:* and build:schemas:* run ts-node)
  //   - ts-auto-mock@3.7.4 declares the peer range `typescript: "^5.0.4"`
  target: (name) => (name === 'typescript' ? 'minor' : 'latest')
}
