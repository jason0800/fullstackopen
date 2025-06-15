const Content = ({ languages, flagUrl }) => {
  return (
    <div>
      <h4>Languages</h4>
      {Object.values(languages).map(value => <p key={value}>{value}</p>)}
      <img src={flagUrl} />
    </div>
  )
}

export default Content
