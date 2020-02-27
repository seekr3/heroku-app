import 'styled-jsx/style'

export default () => {
  return (
    <>
      <div className="card">
        <p>next js!</p>
      </div>
      <style jsx>{`
        p {
          @apply text-red-500;
        }
      `}</style>
    </>
  )
}
