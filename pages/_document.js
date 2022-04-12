import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
  // Cosas que podemos hacer desde el server
	static async getInitialProps(ctx) {
    // todos los cambios aplican para todas las paginas
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
		return (
      <Html style={
        {
          scrollBehavior: 'smooth'
        }
      }>
        <Head>
          {/* lo modificamos para */}
          {/* favicon */}
          {/* webfonts personalizadas */}
          {/* stylesheet externos */}
          {/* script/js externos */}
          {/* <!-- Fuentes --> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;600&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Grape+Nuts&display=swap" rel="stylesheet" />
        </Head>
        {/* No es muy comun editar adentro del body */}
        {/* pero se puede usar para agregar una clase */}
        <body style={
          {
            margin: 0, 
            padding: 0, 
            fontFamily: 'Fredoka'
          }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument