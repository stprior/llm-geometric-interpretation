import Head from 'next/head'
import Header from '@components/Header'
import Sphere from '@components/Sphere'
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
        

        <h2>From arrays to vector spaces</h2>
        <p>
          Any program or block of written text can be represented as a sequence of numbers. For the numbers to make sense as a vector
          space they need to be organised in such a way that we can combine them and perform operations that make sense.
        </p>

<p>The classical model of a computer program is as a sequence of instructions encoded as bytes.The model of a turing machine is based on a sequence of instructions on a tape, with a tape head that can move between instructions and read and write to the tape. The tape can be represented as an N x 1 array in 8-bit integers, where N is the length of the program in bytes, but this is not a particularly useful representation since we can't perform any operations on it. We can't add two programs together, or multiply them by a scalar.</p>

<p>Machine Learning Algorithms in contrast can be understood as transformation or map between vector spaces. The input and output are in different vector spaces, the transformation is generally quite complicated and may consist of many layers which can be analysed independently. When dealing with less than 4 dimensions we can visualise some of this geometrically. An input in 3d space may represent a point in a room, the output may be a scalar (1-dimension) representing the temperature at that point. A 3d vector may represent a point within a wind tunnel, and the 2-dimensional output vector representing air-velocity at that point. If there is a pattern in that mapping then the learning algorithm can search for it. A multi-layer NN can be thought of as a sequence of transformations, each of which is a map between vector spaces. This allows more complicated patterns to be recognised. One layer might map each point in a 3d room to a 2d point on a page, from which the prediction of the temperature may be simpler.</p>


        <h2>
          Word Embeddings
        </h2>

        <p>Most real world problems are much more complicated than this, the input and output spaces have many more dimensions. In the case of language modelling the input may be 1 dimension for each possible word in the language. The first layer, known as an embedding layer maps each word to a more manageable dimensionality - but still generally hundreds of dimensions. This may be imagined as the words being scattered within a room so similar words are close together, but this can be misleading. There are analogies between our intuitions about 3d space and what applies in higher dimensions but many of them are not valid since the embedding space is not euclidean. </p>


        <h2>
          Transformers
        </h2>

        <p>Many of the operations between vectors in language models are based on the angle between them so a better intuition may be that the words are scattered around a sphere. When we view a sphere on a computer screen we see a 2d representation based on a projection of a 3d model of a sphere onto a 2d screen. The projection is not unique, and there are many different ways to project a 3d sphere onto a 2d screen. A sphere can be generalised to higher dimensions, and here we explore some of the projections from these higher dimensional spaces into 2d representations.</p>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Sphere position={[0, 0, 0]} />
          
        </Canvas>
        <h2>
          Human Language
        </h2>

        Path through semantic space
        <h2>
          Language models
        </h2>
          
      </main>

    </div>
  )
}
