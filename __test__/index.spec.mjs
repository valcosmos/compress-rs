import test from 'ava'

import { Algorithm, CompressionType, getCompressionOptions } from '../index.js'

test('get compression options', (t) => {
  t.deepEqual(getCompressionOptions(Algorithm.Gzip, { compressionType: CompressionType.Best }), {
    level: 9,
    compressionType: CompressionType.Best
  })
})
