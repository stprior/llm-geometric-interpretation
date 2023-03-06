import Head from 'next/head'
import Header from '@components/Header'
import Box from '@components/WebGlApp'
import { Canvas, useFrame } from '@react-three/fiber'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Geometric Interpretation of Large Language Models</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <main>
        <Header title="WebGL Test" />
        <p className="description">
          This is where I explore my intuitions about large language models and word embeddings, and try to express them more 
          clearly through geometric visualizations.
        </p>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </Canvas>

        <h2>From arrays to vector spaces</h2>
        <p>
          Any program or block of written text can be represented as a sequence of numbers. For the numbers to make sense as a vector
          space they need to be organised in such a way that we can combine them and perform operations that make sense.
        </p>

        <h2>
          Word Embeddings
        </h2>

        <h2>
          Neural Networks
        </h2>

        <h2>
          Transformers
        </h2>

        <h2>
          Human Language
        </h2>
        <h2>
          Language models
        </h2>
          
      </main>

    </div>
  )
}
