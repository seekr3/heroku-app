// import 'styled-jsx/style'

export default ({ children }) => {
  return (
    <>
      <nav>nav</nav>
      <main>{children}</main>
      <style jsx global>{`
        @tailwind base;

        @tailwind components;

        .card {
          @apply bg-black;
        }

        @tailwind utilities;
      `}</style>
    </>
  )
}
