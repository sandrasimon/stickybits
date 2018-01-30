import {
  babelSetup,
  banner,
  uglifyOutput,
  version
} from '../configs/config'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'

export default {
  input: 'src/stickybits.js',
  plugins: [
    babel(babelSetup),
    replace({ VERSION: JSON.stringify(version) }),
    uglify(uglifyOutput)
  ],
  treeshake: false,
  output: {
    banner,
    file: 'dist/stickbits.min.js',
    format: 'umd',
    name: 'stickybits',
    sourcemap: false
  }
}
